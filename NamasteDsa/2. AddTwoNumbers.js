// 328. Odd Even Linked List
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.
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
var addTwoNumbers = function(l1, l2) {
    let ans=new ListNode();
    let carry=0;
    let ansHead=ans;
    while(l1 || l2||carry){
        let sum=(!l1?0:l1.val)+(!l2?0:l2.val)+carry;
        carry=Math.floor(sum/10);
        let digit=sum%10;
        let newNode=new ListNode(digit);
        ans.next=newNode;
        ans=ans.next;
        l1=l1&&l1.next;
        l2=l2&&l2.next;
    }
    return ansHead.next;
};