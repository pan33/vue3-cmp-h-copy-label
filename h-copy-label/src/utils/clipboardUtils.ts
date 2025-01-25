import Clipboard from "clipboard";
export default function handleClipboard(text:string, event:any) {
  const clipboard = new Clipboard(event.target, {
    text: () => text,
  });
  clipboard.on("success", () => {
    clipboard.destroy();
  });
  clipboard.on("error", () => {
    clipboard.destroy();
  });
}
