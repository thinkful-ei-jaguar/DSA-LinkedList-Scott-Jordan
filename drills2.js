//#5 Reverse a list

//all pointers should point backward

function Reverse(list) {
  let current = list.head;
  let previous = list.head;
  
  while (current.next !== null) {
    if(current === list.head) {
      current.next = null;
    }
    current.next = previous;
    current = current.next;
  }
list.head = current //set the head of the list to current, which is the last
return list;
}

console.log(Reverse(SLL))
