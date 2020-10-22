function Node(data) {
    this.data = data;
    this.next = null;
}

function sortedInsert(head, data) {
    const newNode = new Node(data);

    if (head === null) {
        return newNode;
    }

    let current = head;
    let prevNode = null;
    while (current !== null && current.data < newNode.data) {
        prevNode = current;
        current = current.next;
    }

    if (current === head) {
        newNode.next = current;
        return newNode;
    }

    if (current === null) {
        prevNode.next = newNode;
        return head;
    }

    prevNode.next = newNode;
    newNode.next = current;
    return head;
}
