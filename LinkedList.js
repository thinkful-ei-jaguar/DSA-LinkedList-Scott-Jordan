class _Node {
  constructor(value=null, next=null) {
    this.value = value;
    this.next = next;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    //find a block, create a new node with the data 
    //direct the head to that new node
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    //start at the head, find the current last item
    //create a new node with item and nxt ptr being null
    //redirect the current last to the new node
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  //insertAt
  // start at the head, and traverse to the insertion point 
  // create a new node 
  // attach pointer to the next node

  //insertBefore
  insertBefore(item, insertPt) {
    if (this.head === null || this.head.value == insertPt)  {
      this.insertFirst(item);
    } else {
      // Start at the head
      let currNode = this.head;
      // Keep track of previous node
      let previousNode = this.head;

      while (currNode.value !== insertPt) {
      // Save the previous node 
        previousNode = currNode;
        currNode = currNode.next;
      } 
      previousNode.next = new _Node(item, currNode);
    }
  }

  //insertAfter
  insertAfter(item , insertPt) {
    if (this.head === null)  {
      this.insertFirst(item);
    } 

    let currNode = this.head;

    while(currNode.value !== insertPt) {
      currNode = currNode.next;
    }
    currNode.next = new _Node(item, currNode.next);
  }

  insertAt(item, position) {
    if(position < 0) {
      throw new Error('Error');
    }
    if(position === 0) {
      this.insertFirst(item);
    } else {
      let currNode = this.head; //starting at the first node(beginning), and tracking as we traverse through
      for(let i = 0; i < position - 1; i++) { //-1 is what we need to look for, the node in front
        currNode = currNode.next; //at node just in front of position to insert
      }
      const newNode = new _Node(item, null);
      newNode.next = currNode.next;
      currNode.next = newNode;
    }
  }

  find(item){
    //start at the head
    let currNode = this.head;
    //if the list is empty 
    if (!this.head) {
      return null;
    }
    //check for the item 
    while (currNode.value !== item) {
      //return null is its the end of the list and the item is not on the list 
      if (currNode.next === null) {
        return null;
      }
      else {
        //otherwise, keep looking 
        currNode = currNode.next;
      }
    }
    //found it 
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

// let ll = new LinkedList();
// console.log(ll, 'll');

function main() {
  let SLL = new LinkedList();
  console.log(SLL, 'SLL');

  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');
  // SLL.insertLast('Tauhida');
  // // SLL.remove('squirrel'); // output: 'Item not found'
  // SLL.insertBefore('Jordan', 'Tauhida');
  // SLL.insertBefore('Scott', 'Jordan');
  // SLL.insertBefore('Thinkful', 'Starbuck');
  // SLL.insertAfter('Kaiya', 'Starbuck');
  // SLL.insertAfter('Zura', 'Starbuck');
  // SLL.insertAfter('Kiba', 'Starbuck');
  // SLL.insertAt('Bananas', 4);
  // SLL.insertAt('Apples', 5);
  // SLL.insertAt('Applez', 1);
  // SLL.insertAt('Bananaz', 2);
  // SLL.insertAt('Oranges', 1);

  // console.log(JSON.stringify(SLL, null, 2), 'SLL after insert');
  return SLL;
}
const SLL = main();


const display = (LL) => { //should display the linked list
  let currNode = LL.head; 
  while (!(currNode.next == null)) { 
    // console.log(currNode.next); 
    currNode = currNode.next; 
  } 
  return (JSON.stringify(LL));
};
// console.log(display(SLL));


const size = (LL) => {
  let currNode = LL.head;
  let counter = 1;
  while(currNode.next !== null) {
    currNode = currNode.next;
    counter++;
  }
  return counter;
};
// console.log(size(SLL));


const isEmpty = (LL) => {
  console.log(LL);
  if (LL.head === null) {
    return true;
  }
  return false;
};
let emptyLL  = new LinkedList();
// console.log(isEmpty(emptyLL));

const findPrevious = (LL, position) => {
  console.log(LL.head, 'head');
  if(position < 0) {
    throw new Error('Error');
  }

  let node = LL.head;

  for (let i=0; i <= position - 1; i++) {
    if(node == null) {
      return 'Node doesn\'t exist';
      
    } else {
      node = node.next;
    }
  }
  return node;
};
// console.log(findPrevious(SLL, 2));


const findLast = (LL) => {
  let currNode = LL.head;
  while(currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
};
// console.log(findLast(SLL));
