// 141. Linked List Cycle
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let current = head;
    let seenNodes = new Set();
    while (current) {
        if (seenNodes.has(current)) {
            return true;
        }
        else {
            seenNodes.add(current);
            current = current.next;
        }

    }
    return false;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycleFlyods = function(head) {
    let slow=head;
    if(!slow) return false
    let speed=head.next;
    while(slow != speed){
        if(speed==null || speed.next==null) return false
        slow=slow.next;
        speed=speed.next.next;
    }
    return true;
};