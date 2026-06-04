from __future__ import annotations

import random
import re
import sys
import uuid
from pathlib import Path


IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}


class GalleryOrderError(Exception):
    pass


def main() -> int:
    print("Gallery image order helper")
    print("1. Shuffle images in a folder")
    print("2. Swap two image positions")

    choice = input("Choose an action (1/2): ").strip()
    if choice not in {"1", "2"}:
        print("Error: choose 1 or 2.")
        return 1

    prefix = input("Image filename prefix, e.g. gallery-ingredient-: ").strip()
    if not prefix:
        print("Error: prefix cannot be empty.")
        return 1

    try:
        if choice == "1":
            renames = build_shuffle_renames(prefix)
        else:
            renames = build_swap_renames(prefix)

        if not renames:
            print("No changes needed.")
            return 0

        print_rename_preview(renames)
        if not confirm("Apply these renames?"):
            print("Canceled. No files were changed.")
            return 0

        apply_renames(renames)
    except GalleryOrderError as error:
        print(f"Error: {error}")
        return 1

    print("Done.")
    return 0


def build_shuffle_renames(prefix: str) -> list[tuple[Path, Path]]:
    raw_folder = input("Target folder (leave empty for current folder): ").strip()
    folder = resolve_user_path(raw_folder) if raw_folder else Path.cwd()

    if not folder.exists():
        raise GalleryOrderError(f"folder does not exist: {folder}")
    if not folder.is_dir():
        raise GalleryOrderError(f"not a folder: {folder}")

    files = find_numbered_images(folder, prefix)
    if not files:
        raise GalleryOrderError(
            f"no images found matching {prefix}<number> in {folder}"
        )

    shuffled = files[:]
    random.shuffle(shuffled)

    renames: list[tuple[Path, Path]] = []
    for index, source in enumerate(shuffled):
        target = source.with_name(f"{prefix}{index}{source.suffix}")
        renames.append((source, target))

    validate_destinations(renames)
    return renames


def build_swap_renames(prefix: str) -> list[tuple[Path, Path]]:
    first = resolve_existing_file(input("First image path: ").strip())
    second = resolve_existing_file(input("Second image path: ").strip())

    if first == second:
        raise GalleryOrderError("choose two different files.")
    if first.parent.resolve() != second.parent.resolve():
        raise GalleryOrderError("both images must be in the same folder.")

    first_number = parse_image_number(first, prefix)
    second_number = parse_image_number(second, prefix)

    first_target = first.with_name(f"{prefix}{second_number}{first.suffix}")
    second_target = second.with_name(f"{prefix}{first_number}{second.suffix}")
    renames = [(first, first_target), (second, second_target)]

    validate_destinations(renames)
    return renames


def find_numbered_images(folder: Path, prefix: str) -> list[Path]:
    files = [
        path
        for path in folder.iterdir()
        if path.is_file() and is_numbered_image(path, prefix)
    ]

    return sorted(files, key=lambda path: parse_image_number(path, prefix))


def is_numbered_image(path: Path, prefix: str) -> bool:
    if path.suffix.lower() not in IMAGE_EXTENSIONS:
        return False

    return re.fullmatch(re.escape(prefix) + r"\d+", path.stem) is not None


def parse_image_number(path: Path, prefix: str) -> int:
    if path.suffix.lower() not in IMAGE_EXTENSIONS:
        raise GalleryOrderError(f"unsupported image extension: {path}")

    match = re.fullmatch(re.escape(prefix) + r"(\d+)", path.stem)
    if match is None:
        raise GalleryOrderError(
            f"file does not match {prefix}<number>: {path}"
        )

    return int(match.group(1))


def validate_destinations(renames: list[tuple[Path, Path]]) -> None:
    source_keys = {path_key(source) for source, _ in renames}
    destination_keys: set[str] = set()

    for source, target in renames:
        key = path_key(target)
        if key in destination_keys:
            raise GalleryOrderError(f"duplicate target filename: {target}")
        destination_keys.add(key)

        if target.exists() and key not in source_keys and source != target:
            raise GalleryOrderError(f"target already exists: {target}")


def apply_renames(renames: list[tuple[Path, Path]]) -> None:
    operations = [(source, target) for source, target in renames if source != target]
    if not operations:
        print("All files are already in the requested positions.")
        return

    temporary_operations: list[tuple[Path, Path, Path]] = []

    try:
        for source, target in operations:
            temporary = make_temporary_path(source)
            source.rename(temporary)
            temporary_operations.append((temporary, target, source))

        for temporary, target, _source in temporary_operations:
            temporary.rename(target)
    except OSError as error:
        restore_temporary_files(temporary_operations)
        raise GalleryOrderError(f"rename failed: {error}") from error


def restore_temporary_files(
    temporary_operations: list[tuple[Path, Path, Path]],
) -> None:
    for temporary, _target, original in reversed(temporary_operations):
        if temporary.exists() and not original.exists():
            try:
                temporary.rename(original)
            except OSError:
                pass


def make_temporary_path(path: Path) -> Path:
    while True:
        temporary = path.with_name(
            f".{path.name}.gallery-order-{uuid.uuid4().hex}.tmp"
        )
        if not temporary.exists():
            return temporary


def resolve_existing_file(raw_path: str) -> Path:
    if not raw_path:
        raise GalleryOrderError("image path cannot be empty.")

    path = resolve_user_path(raw_path)
    if not path.exists():
        raise GalleryOrderError(f"file does not exist: {path}")
    if not path.is_file():
        raise GalleryOrderError(f"not a file: {path}")

    return path


def resolve_user_path(raw_path: str) -> Path:
    path = Path(raw_path).expanduser()
    if not path.is_absolute():
        path = Path.cwd() / path

    return path.resolve()


def print_rename_preview(renames: list[tuple[Path, Path]]) -> None:
    print()
    print("Rename preview:")
    for source, target in renames:
        if source == target:
            continue
        print(f"  {format_path(source)} -> {format_path(target)}")
    print()


def confirm(prompt: str) -> bool:
    answer = input(f"{prompt} Type y to continue: ").strip().lower()
    return answer in {"y", "yes"}


def format_path(path: Path) -> str:
    try:
        return str(path.resolve().relative_to(Path.cwd().resolve()))
    except ValueError:
        return str(path)


def path_key(path: Path) -> str:
    return str(path.resolve()).casefold()


if __name__ == "__main__":
    sys.exit(main())
