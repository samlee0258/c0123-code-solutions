export default function getLength(list) {
  let count = 0;
  while (list) {
    count++;
    list = list.next;
  }
  return count;
}
