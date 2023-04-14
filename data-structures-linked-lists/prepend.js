/* eslint-disable no-unused-vars -- Remove me */
import LinkedList from './lib/linked-list';

export default function prepend(list, value) {
  const newList = new LinkedList(value);
  newList.next = list;
  return newList;
}
