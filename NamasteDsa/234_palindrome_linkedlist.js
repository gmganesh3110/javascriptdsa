// 234. Palindrome Linked List
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }

    let prev = null;
    let current = slow;
    while (current) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    let firstList = head;
    let secondList = prev;
    while (secondList) {
        if (firstList.val != secondList.val) return false;
        firstList = firstList.next;
        secondList = secondList.next
    }
    return true
};

