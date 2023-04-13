export default function isEmpty(stack) {
  for (const key in stack) {
    if (key === '') {
      return true;
    }
  }
  return false;
}
