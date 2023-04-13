export default function countValues(stack) {
  let count = 0;
  while (stack.pop() !== undefined) {
    count++;
  }
  return count;
}
