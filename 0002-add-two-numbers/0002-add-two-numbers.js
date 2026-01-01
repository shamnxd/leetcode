function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var addTwoNumbers = function (l1, l2) {
    let toSum1 = [];
    let toSum2 = [];

    let current1 = l1;
    while (current1) {
        toSum1.push(current1.val);
        current1 = current1.next;
    }

    let current2 = l2;
    while (current2) {
        toSum2.push(current2.val);
        current2 = current2.next;
    }

    toSum1.reverse();
    toSum2.reverse();

    let num1 = BigInt(toSum1.join(''));
    let num2 = BigInt(toSum2.join(''));

    let sumStr = (num1 + num2).toString();

    let newRoot = null;
    for (let i = 0; i < sumStr.length; i++) {
        let node = new ListNode(Number(sumStr[i]));
        node.next = newRoot;
        newRoot = node;
    }

    return newRoot;
};
