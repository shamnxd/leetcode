/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    let current = prev.next;

    for (let i = 0; i < right - left; i++) {
        let temp = current.next;
        current.next = temp.next;
        temp.next = prev.next;
        prev.next = temp;
    }

    return dummy.next;
};