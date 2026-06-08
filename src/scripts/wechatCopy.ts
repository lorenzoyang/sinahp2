const FEEDBACK_TIMEOUT_MS = 1800;

function fallbackCopy(text: string): boolean {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();

  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    textarea.remove();
  }
}

async function copyText(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return fallbackCopy(text);
    }
  }

  return fallbackCopy(text);
}

function initWechatCopy(button: HTMLButtonElement): void {
  const value = button.dataset.wechatCopy?.trim();
  const copyLabel = button.dataset.copyLabel ?? "";
  const copiedLabel = button.dataset.copiedLabel ?? copyLabel;
  const feedback = button.querySelector("[data-wechat-copy-feedback]");
  let resetTimer: number | undefined;

  button.addEventListener("click", async () => {
    if (!value || !(await copyText(value)) || !feedback) {
      return;
    }

    feedback.textContent = copiedLabel;

    if (resetTimer) {
      window.clearTimeout(resetTimer);
    }

    resetTimer = window.setTimeout(() => {
      feedback.textContent = copyLabel;
    }, FEEDBACK_TIMEOUT_MS);
  });
}

document
  .querySelectorAll<HTMLButtonElement>("[data-wechat-copy]")
  .forEach(initWechatCopy);

export {};
