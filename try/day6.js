/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 || l2 || carry) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;

    const sum = x + y + carry;
    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummyHead.next;
};

// const addTwoNumbers = (l1, l2) => {
//   let carry = 0;
//   const result = [];

//   for (let i = 0; i < Math.max(l1.length, l2.length); i++) {
//     const x = i < l1.length ? l1[i] : 0;
//     const y = i < l2.length ? l2[i] : 0;
//     const sum = x + y + carry;
//     carry = Math.floor(sum / 10);
//     result.push(sum % 10);
//   }

//   if (carry) {
//     result.push(carry);
//   }

//   return result;
// };

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
