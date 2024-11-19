export function getImageUrl(imageId: string, size = 's') {
  return (
    'http://localhost:5173/' +
    imageId +
    size +
    '.jpg'
  );
}
