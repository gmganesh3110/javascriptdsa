// 160. Intersection of Two Linked Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let set=new Set();
    let current=headB;
    while(headB){
        set.add(headB)
        headB=headB.next;
    }
    while(headA){
        if(set.has(headA)) return headA;
        headA=headA.next;
    }
    return null;

};