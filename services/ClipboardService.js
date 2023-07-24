export const ClipboardService = {
  copy: (text) => {
    return navigator.clipboard.writeText(text);
  },
};
