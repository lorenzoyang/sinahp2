export function queryAll<TElement extends Element>(
  selector: string,
  root: ParentNode = document,
): TElement[] {
  return Array.from(root.querySelectorAll<TElement>(selector));
}

export function queryOne<TElement extends Element>(
  selector: string,
  root: ParentNode = document,
): TElement | null {
  return root.querySelector<TElement>(selector);
}

