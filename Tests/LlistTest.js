describe('LList', () =>{

    describe('push()', () => {
        const testData = [
            {
                arr:[0, 1, 2],
                el:2,
                expected: {
                    array: [0, 1, 2, 2],
                    len: 4
                }
            },
            {
                arr: [],
                el: 2,
                expected: {
                    array: [2],
                    len: 1
                }
            },
            {
                arr: [1],
                el: 2,
                expected: {
                    array: [1, 2],
                    len: 2
                }
            },
            {
                arr: [1, 2],
                el: 2,
                expected: {
                    array: [1, 2, 2],
                    len: 3
                }
            },
        ];

        testData.forEach(data =>{
            const {arr , el , expected} = data;

            const llist = new LList();
            llist.init(arr);
            llist.push(el);

            const actual = {
                array: llist.getArray(),
                len: llist.getSize()
            };

            it(`Should return ${expected.len} and change start array to [${expected.array}] when element = ${el} and array = [${arr}]`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('pop()', () => {
        const testData = [
            {
                arr: [],
                expected: {
                    array: [],
                    elem: undefined
                }
            },
            {
                arr: [1],
                expected: {
                    array: [],
                    elem: 1
                }
            },
            {
                arr: [1, 2],
                expected: {
                    array: [1],
                    elem: 2
                }
            },
            {
                arr: [1, 2, 3],
                expected: {
                    array: [1, 2],
                    elem: 3
                }
            },
            {
                arr: [1, 2, 3, 4, 5, 6],
                expected: {
                    array: [1, 2, 3, 4, 5],
                    elem: 6
                }
            },
        ];

        testData.forEach(data => {

            const {arr,  expected } = data;

            const llist = new LList();
            llist.init(arr);
            let elem = llist.pop();

            const actual = {
                array: llist.getArray(),
                elem: elem
            };

            it(`Should return ${expected} and change array tp [${expected.array}] when array was [${arr}]`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('getSize()', () => {
        const testData = [
            {
                arr: [],
                expected: 0
            },
            {
                arr: [0],
                expected: 1
            },
            {
                arr: [0, 1],
                expected: 2
            },
            {
                arr: [0, 1, 2],
                expected: 3
            },
            {
                arr: [0, 1, 2, 3, 4],
                expected: 5
            },
        ];

        testData.forEach(data => {
            const {arr, expected } = data;

            const llist = new LList();
            llist.init(arr);

            const actual = llist.getSize();

            it(`Should return ${expected} when array = [${arr}]`, () => {
                assert.deepEqual(actual, expected)
            });
        });
    });

    describe('init()', () => {
        const testData = [
            {
                arr: [],
                expected: []
            },
            {
                arr: [0],
                expected: [0]
            },
            {
                arr: [0, 1],
                expected: [0, 1]
            },
            {
                arr: [0, 1, 2],
                expected: [0, 1, 2]
            },
            {
                arr: [0, 1, 2, 3, 4],
                expected: [0, 1, 2, 3, 4]
            },
        ];

        testData.forEach(data => {
            const { arr, expected } = data;

            const llist = new LList();
            llist.init(arr);

            const actual = llist.getArray();

            it(`Should initialize [${expected}] when array = [${arr}]`, () => {
                assert.deepEqual(actual, expected)
            });
        });
    });

    describe('init() ERROR', () => {
        let llist1 = new LList();

        it(`Catch ERROR`, () => {
            assert.throw(llist1.init, Error, 'Invalid initialization!');
        });
    });

    describe('shift()', () => {
        const testData = [
            {
                arr: [],
                expected: {
                    array: [],
                    elem: undefined
                }
            },
            {
                arr: [0, 1],
                expected: {
                    array: [1],
                    elem: 0
                }
            },
            {
                arr: [0, 1, 2],
                expected: {
                    array: [1, 2],
                    elem: 0
                }
            },
            {
                arr: [0, 1, 2, 3, 4],
                expected: {
                    array: [1, 2, 3, 4],
                    elem: 0
                }
            },
        ];

        testData.forEach(data => {
            const { arr, expected } = data;

            const llist = new LList();
            llist.init(arr);
            let elem = llist.shift();

            const actual = {
                array: llist.getArray(),
                elem: elem
            };

            it(`Should return ${expected.elem} and change array to [${expected.array}] when start array = [${arr}] `, () => {
                assert.deepEqual(actual, expected)
            });
        });
    });

    describe('unshift()', () => {
        const testData = [
            {
                arr: [],
                el:2,
                expected: {
                    array: [2],
                    len: 1
                }
            },

            {
                arr: [0, 1],
                el: 2,
                expected: {
                    array: [2, 0, 1],
                    len: 3
                }
            },
            {
                arr: [0, 1, 2],
                el: 2,
                expected: {
                    array: [2, 0, 1, 2],
                    len: 4
                }
            },
            {
                arr: [0, 1, 2, 3, 4],
                el: 2,
                expected: {
                    array: [2, 0, 1, 2, 3, 4],
                    len: 6
                }
            },
        ];

        testData.forEach(data => {
            const { arr,el, expected } = data;

            const llist = new LList();
            llist.init(arr);
            llist.unshift(el);

            const actual = {
                array: llist.getArray(),
                len: llist.getSize()
            };

            it(`Should return ${expected.len} and change array to [${expected.array}] when array = [${arr}] and element == ${el}`, () => {
                assert.deepEqual(actual, expected)
            });
        });
    });

    describe('slice()', () => {
        const testData = [
            {
                array: [1, 2, 3],
                startIndex: 1,
                finishIndex: 2,
                expected: [2]
            },
            {
                array: [1, 2, 3, 4, 5, 6],
                startIndex: 2,
                finishIndex: 4,
                expected: [3, 4]
            },
            {
                array: [1, 2, 3],
                startIndex: 1,
                finishIndex: 3,
                expected: [2, 3]
            },
            {
                array: [1, 2, 3, 4, 5],
                startIndex: 3,
                finishIndex: 0,
                expected: []
            },
            {
                array: [1, 2, 3, 4, 5],
                startIndex: 3,
                finishIndex: 1,
                expected: []
            },
            {
                array: [1, 2, 3, 4, 5],
                startIndex: 3,
                finishIndex: undefined,
                expected: [4, 5]
            },
            {
                array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                startIndex: 5,
                finishIndex: undefined,
                expected: [6, 7, 8, 9]
            },
            {
                array: [1, 2, 3, 4],
                startIndex: undefined,
                finishIndex: undefined,
                expected: [1, 2, 3, 4]
            },
            {
                array: [1, 2, 3, 4, 5, 6, 7],
                startIndex: undefined,
                finishIndex: 5,
                expected: [1, 2, 3, 4, 5]
            },
            {
                array: [1, 2, 3, 4, 5, 6, 7],
                startIndex: 4,
                finishIndex: 10,
                expected: [5, 6, 7]
            },
        ];

        testData.forEach(data => {
            const {array, startIndex, finishIndex, expected} = data;

            const llist = new LList();
            llist.init(array);

            const actual = llist.slice(startIndex, finishIndex);

            it(`Should return [${expected}] when array = [${array}], start index = ${startIndex} and finish = ${finishIndex}`, () => {
                assert.deepEqual(actual, expected)
            });
        });
    });


});
