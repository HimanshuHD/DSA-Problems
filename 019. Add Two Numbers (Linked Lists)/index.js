// **Add Two Numbers (Linked List)

/**
 * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
    this.current = this;

    this.addNode = (v, n) => {
        let newNode = new ListNode(v, n);
        this.current.next = newNode;
        this.current = this.current.nect;
    };
};

var __addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0, null);
    let resultStart = result;
    let sum = 0;

    while (1) {
      sum += (l1 && l1.val) + (l2 && l2.val);
      result.val = sum % 10;
      sum = sum > 9 ? 1 : 0;
      
      l1 = l1 && l1.next;
      l2 = l2 && l2.next;
      if (l1 || l2 || sum) {
        result.next = new ListNode(0, null);
        result = result.next;
      } else break;
    }
    
    return resultStart;
};

let l1 = new ListNode(0, null);
// [2, 4, 3]
l1.addNode(2, null)
// let tempL1 = l1;
// let l2 = [5, 6, 4];
// let i = 1;
// while (i <= 3) {
//     tempL1.val = 2;
//     tempL1.next = new ListNode(0, null);
//     tempL1 = tempL1.next;
//     i++;
// }
console.log(l1);
// console.log(`Sum of 2 numbers ${l1} and ${l2} is >`, __addTwoNumbers(l1, l2));
