function insertNodeAtHead(head, data) {
  let newNode = new SinglyLinkedListNode(data);
  if (!head) {
    return newNode;
  } else {
    newNode.next = head;
  }
  return newNode;
}
