function insertNodeAtTail(head, data) {
 // data:  stores a value
 // head:  assigns a node as the head of a list
  let newNode = new SinglyLinkedListNode(data);

  if (head === null) return newNode;
  else {
    let temp = head;
    // next:  points to the next node in the list
    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = newNode;
    return head;
  }
}
