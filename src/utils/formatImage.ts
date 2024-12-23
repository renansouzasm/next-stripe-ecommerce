export function formatImage(thumbnail: string): string {
  return thumbnail.replace(/\w\.jpg/gi, "W.jpg");
}
