// Given a sorted list, write a function to insert an item in the sorted liked list preserving the order of the list. Only take one pass through the list to do this. 
// 1->2->3->7
// 1->2->3->4->7

//check to see if head is null
//place the item as head
//traverse the list and find the right spot for new item
//if the next node 

class _Node {
  constructor(value=null, next=null) {
    this.value = value;
    this.next = next;
  }
}

function insertInSortedOrder(sortdlist, item) {
  if (sortdlist.head === null || item < sortdlist.head.value) {
    sortdlist.head = new _Node(item, sortdlist.head);
  }

  let current = sortdlist.head;
  let previous = sortdlist.head;

  while(current !== null && current.value < item) {
    previous = current;
    current = current.next;
  }
  previous.next = new _Node(item, current);
}

let linkToSort;
insertInSortedOrder(linkToSort, 4);