function Node (value) {
    this.value = value;
    this.next = null;
}

function LList () {
    let root = null;
    let size = 0;

    this.push = value => {
        const node = new Node(value);

        if (root === null) {
            root = node;
        } else {
            let tempNode = root;

            while (tempNode.next) {
                tempNode = tempNode.next;
            };

            tempNode.next = node;
        };

        size++;
        return this.getSize();
    };

    this.init = (array) => {

        for (let i = 0; i < array.length; i++) {
            this.push(array[i]);
        };

    };

    this.getSize = () => {
        return size;
    };

    this.toString = () => {
        let string = '"[';
        let temp = root;
        for (let i = 0; i < this.getSize(); i++) {

            if (temp.next !== null && i !== this.getSize() - 1) {
                string += temp.value;
                temp = temp.next;
                string += ', ';
            } else {
                string += temp.value + ']"';
            };

        };

        return string;
    };

    this.pop = () => {
        let temp = root;
        let beforeElem;
        let returnTemp;

        for (let i = 0; i < this.getSize(); i++) {

            if (temp.next !== null) {
                beforeElem = temp;
                temp = temp.next;
            } else {
                beforeElem.next = null;
                returnTemp = temp;
                size--;
            };

        };

        return returnTemp.value;
    };

    this.shift = () => {
        let temp = root;
        root = temp.next;
        size--;
        return temp.value;
    };

    this.unshift = value => {
        let node = new Node(value);
        let temp = root;
        node.next = temp;
        root = node;
        size++;
        return this.getSize();
    };

    this.slice = (startIndex, finishIndex) => {
        let start = startIndex;
        let finish = finishIndex;
        let array = [];
        let count = 0;
        let temp = root;

        if(!startIndex && startIndex !== 0) {
            start = 0;
        };

        if (startIndex < 0 || startIndex > this.getSize()) {
            throw new Error("Start index out of array!");
        };

        if (finishIndex < 0 || finishIndex > this.getSize()) {
            throw new Error("Finish index out of array!");
        };

        if (!finishIndex) {
            finish = this.getSize();
        };

        for (let i = 0; i < finish; i++) {

            if (i === start) {
                array[count] = temp.value;
                count++;
                start++;
            };

            temp = temp.next;
        };

        return array;
    };

    this.get = index => {
        let temp = root;
        let curIndex = 0;

        if (index > this.getSize() || index < 0 ) {
            throw new Error("Index out of array!");
        } else {

            while (curIndex < index) {
                curIndex++;
                temp = temp.next;
            };

        };

        return temp.value;
    };

    this.set = (index, value) => {
        let temp = root;
        let curIndex = 0;

        if (index > this.getSize() || index < 0) {
            throw new Error("Index out of array!");
        };

        while (curIndex < index) {
            curIndex++;
            temp = temp.next;
        };

        temp.value = value;
    };

    this.splice = (startIndex, amountDelete, insertElem) => {
        let definedStartIndex = 0;
        let definedAmountDeleted = 0;
        let definedInsertElem = [];
        let spliceArray = [];

        if (!startIndex) {
            definedStartIndex = 0;
        } else if (!!Number(startIndex)) {

            if (startIndex > this.getSize()) {
                definedStartIndex = this.getSize();
            } else if (startIndex < -this.getSize()) {
                definedStartIndex = 0;
            } else {
                definedStartIndex = parseInt(startIndex);
            }

        } else {
            return spliceArray;
        };

        if (!amountDelete || amountDelete <= 0) {
            definedAmountDeleted = 0;
        } else if (!!Number(amountDelete)) {
            definedAmountDeleted = parseInt(amountDelete);
        } else {
            definedAmountDeleted = 0;
        }

        if (!insertElem) {
            definedInsertElem = null;
        } else {

            for (let i = 0; i < insertElem.length; i++) {
                definedInsertElem[i] = insertElem[i];
            };

        };

        spliceArray = this.slice(definedStartIndex,definedStartIndex + definedAmountDeleted);

        return spliceArray;
    };

    this.sort = comparator => {
        let current = root;

        for (let i = 0; i < this.getSize(); i++) {

            for (let j = 0; j < this.getSize() - 1; j++) {
                let result = comparator(current.value, current.next.value);
                let temp = 0;

                if (result > 0) {
                    temp = current.next.value;
                    current.next.value = current.value;
                    current.value = temp;
                }

                if (current.next) {
                    current = current.next;
                } else {
                    break;
                }

            };

            current = root;
        };

        return root;
    };
};

const sortFunc = (first, second) => {

    if(first > second) {
        return 1;
    } else if (first === second) {
        return 0;
    } else {
        return -1;
    };

};
