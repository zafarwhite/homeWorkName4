describe('Alist testing', () => {
    describe('init()', () => {
        const testData = [
            {
                args: [],
                expected: []
            },
            {
                args: [1],
                expected: [1]
            },
            {
                args: [1, 2, 3],
                expected: [1, 2, 3]
            },
            {
                args: [1, 3, 5, 7, 9],
                expected: [1, 3, 5, 7, 9]
            }
        ];

        testData.forEach(data => {
            const {args, expected} = data;

            let alist1 = new AList();
            alist1.init(args);

            const actual = alist1.getArray();

            it(`Should return [${expected}] when input args = [${args}]`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('getArray()', () => {
        const testData = [
            {
                array: [1, 3, 4, 7],
                expected: [1, 3, 4, 7]
            },
            {
                array: [],
                expected: []
            },
            {
                array: [7],
                expected: [7]
            },
            {
                array: [1, 3, 4, 7, 2, 3, 0],
                expected: [1, 3, 4, 7, 2, 3, 0]
            },
            {
                array: [1, 3, 4, 'text1', 4, true, 7],
                expected: [1, 3, 4, 'text1', 4, true, 7]
            }
        ];

        testData.forEach(data => {
            const {array, expected} = data;

            let alist = new AList();
            alist.init(array);

            const actual = alist.getArray();

            it(`Should return [${expected}]`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('toString()', () => {
        const testData = [
            {
                args: [],
                expected: '"[]"'
            },
            {
                args: [1],
                expected: '"[1]"'
            },
            {
                args: [1, 2, 3],
                expected: '"[1, 2, 3]"'
            },
            {
                args: [1, 3, 5, 7, 9],
                expected: '"[1, 3, 5, 7, 9]"'
            }
        ];

        testData.forEach(data => {
            const {args, expected} = data;

            let alist = new AList();
            alist.init(args);

            const actual = alist.toString();

            it(`Should return ${expected} when args = "[${args}]"`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getSize()', () => {
        const testData = [
            {
                args: [],
                expected: 0
            },
            {
                args: [1],
                expected: 1
            },
            {
                args: [1, 2, 3],
                expected: 3
            },
            {
                args: [1, 2, 3, 4, 5],
                expected: 5
            },
        ];

        testData.forEach(data => {
            const {args, expected} = data;

            let alist = new AList();
            alist.init(args);

            const actual = alist.getSize();

            it(`Should return ${expected} when args = "[${args}]"`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('push()', () => {
        const testData = [
            {
                array: [],
                elem: 0,
                expected: {
                    array: [0],
                    len: 1
                }
            },
            {
                array: [1, 2],
                elem: 3,
                expected: {
                    array: [1, 2, 3],
                    len: 3
                }
            },
            {
                array: [2, 4, 6, 8],
                elem: 10,
                expected: {
                    array: [2, 4, 6, 8, 10],
                    len: 5
                }
            },
            {
                array: [2, 4, 6, 8],
                elem: 'string',
                expected: {
                    array: [2, 4, 6, 8, 'string'],
                    len: 5
                }
            },
        ];

        testData.forEach(data => {
            const {array, elem, expected} = data;

            let alist = new AList();
            alist.init(array);
            alist.push(elem);

            const actual = {
                array: alist.getArray(),
                len: alist.getSize()
            };

            it(`Should return {array: [${expected.array}], len: ${expected.len}} when array = "[${array}]" and push elem = ${elem}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('pop()', () => {
        const testData = [
            {
                array: [1, 2],
                expected: {
                    array: [1],
                    elem: 2
                }
            },
            {
                array: [1, 2, 3, 4, 5],
                expected: {
                    array: [1, 2, 3, 4],
                    elem: 5
                }
            },
            {
                array: [1],
                expected: {
                    array: [],
                    elem: 1
                }
            },
            {
                array: [],
                expected: {
                    array: [],
                    elem: undefined
                }
            }
        ];

        testData.forEach(data => {
            const {array, expected} = data;

            let alist = new AList();
            alist.init(array);
            let elem = alist.pop();

            const actual = {
                array: alist.getArray(),
                elem: elem
            };

            it(`Should return {array: [${expected.array}], elem: ${expected.elem}}, when array = [${array}]`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('shift()', () => {
        const testData = [
            {
                array: [1, 2],
                expected: {
                    array: [2],
                    elem: 1
                }
            },
            {
                array: [1, 2, 3, 4, 5],
                expected: {
                    array: [2, 3, 4, 5],
                    elem: 1
                }
            },
            {
                array: [1],
                expected: {
                    array: [],
                    elem: 1
                }
            },
            {
                array: [],
                expected: {
                    array: [],
                    elem: undefined
                }
            }
        ];

        testData.forEach(data => {
            const {array, expected} = data;

            let alist = new AList();
            alist.init(array);
            let elem = alist.shift();

            const actual = {
                array: alist.getArray(),
                elem: elem
            };

            it(`Should return {array: [${expected.array}], elem: ${expected.elem}}, when array = [${array}]`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('unshift()', () => {
        const testData = [
            {
                array: [],
                elem: 0,
                expected: {
                    array: [0],
                    len: 1
                }
            },
            {
                array: [1, 2],
                elem: 3,
                expected: {
                    array: [3, 1, 2],
                    len: 3
                }
            },
            {
                array: [2, 4, 6, 8],
                elem: 10,
                expected: {
                    array: [10, 2, 4, 6, 8],
                    len: 5
                }
            },
            {
                array: [2, 4, 6, 8],
                elem: 'string',
                expected: {
                    array: ['string', 2, 4, 6, 8],
                    len: 5
                }
            }
        ];

        testData.forEach(data => {
            const {array, elem, expected} = data;

            let alist = new AList();
            alist.init(array);
            alist.unshift(elem);

            const actual = {
                array: alist.getArray(),
                len: alist.getSize(),
            };

            it(`Should return {array: [${expected.array}], len: ${expected.len}} when array = [${array}] and push elem = ${elem}`, () => {
                assert.deepEqual(actual, expected);
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
                expected: [1, 2, 3, 4, 5, 6, 7]
            },
            {
                array: [1, 2, 3, 4, 5, 6, 7],
                startIndex: 4,
                finishIndex: 10,
                expected: [5, 6, 7]
            }
        ];

        testData.forEach(data => {
            const {array, startIndex, finishIndex, expected} = data;

            let alist = new AList();
            alist.init(array);

            const actual = alist.slice(startIndex, finishIndex);

            it(`Should return copy sliced [${expected}], when array = [${array}], start index = ${startIndex} and finish index = ${finishIndex}`, () => {
                assert.deepEqual(actual, expected);
            });

        });
    });

    describe('splice()', () => {
        const testData = [
            {
                array: [0, 1, 2, 3, 4],
                startIndex: 1,
                amountDelete: 2,
                insertArray: ['*', '#', '@'],
                expectedResult: [0, '*', '#', '@', 3, 4],
                expectedSpliced: [1, 2]
            },
            {
                array: [0, 1, 2, 3, 4],
                startIndex: 2,
                amountDelete: 1,
                insertArray: ['*'],
                expectedResult: [0, 1, '*', 3, 4],
                expectedSpliced: [2]
            },
            {
                array: [0, 1, 2, 3, 4],
                startIndex: 6,
                amountDelete: 1,
                insertArray: ['*'],
                expectedResult: [0, 1, 2, 3, 4, '*'],
                expectedSpliced: []
            },
            {
                array: [0, 1, 2, 3, 4],
                startIndex: 4,
                amountDelete: 3,
                insertArray: ['*'],
                expectedResult: [0, 1, 2, 3, '*'],
                expectedSpliced: [4]
            },
            {
                array: [0, 1, 2, 3, 4],
                startIndex: 0,
                amountDelete: 0,
                insertArray: ['*', '#'],
                expectedResult: ['*', '#', 0, 1, 2, 3, 4],
                expectedSpliced: []
            },
            {
                array: [0, 1, 2, 3, 4],
                startIndex: 'text',
                amountDelete: 'text',
                insertArray: ['*', '#'],
                expectedResult: [0, 1, 2, 3, 4],
                expectedSpliced: []
            },
            {
                array: [0, 1, 2, 3, 4],
                startIndex: 2,
                amountDelete: 'text',
                insertArray: ['*', '#'],
                expectedResult: [0, 1, '*', '#', 2, 3, 4],
                expectedSpliced: []
            },
            {
                array: [0, 1, 2, 3, 4, 5, 6, 7],
                startIndex: 2,
                amountDelete: 2,
                insertArray: [],
                expectedResult: [0, 1, 4, 5, 6, 7],
                expectedSpliced: [2, 3]
            },
            {
                array: [0, 1, 2, 3, 4, 5, 6, 7],
                startIndex: 1,
                amountDelete: 10,
                insertArray: [],
                expectedResult: [0],
                expectedSpliced: [1, 2, 3, 4, 5, 6, 7]
            },
            {
                array: [0, 1, 2, 3, 4, 5, 6, 7],
                startIndex: 0,
                amountDelete: 5,
                insertArray: [],
                expectedResult: [5, 6, 7],
                expectedSpliced: [0, 1, 2, 3, 4]
            }
        ];

        testData.forEach(data => {
            const {array, startIndex, amountDelete, insertArray, expectedResult, expectedSpliced} = data;

            let alist = new AList();
            alist.init(array);

            const actualSpliced = alist.splice(startIndex, amountDelete, ...insertArray);

            const actualResult = alist.getArray();

            it(`Should return [${expectedSpliced}] and change start array to [${expectedResult}],\n
                when start index = ${startIndex}, amount elements to delete = ${amountDelete} and insert elements = (${insertArray})`, () => {
                assert.deepEqual(actualSpliced, expectedSpliced);
                assert.deepEqual(actualResult, expectedResult);
            });
        });
    });

    describe('sortFunc()', () => {
        const testData = [
            {
                first: 1,
                second: 2,
                expected: -1
            },
            {
                first: 2,
                second: 1,
                expected: 1
            },
            {
                first: 1,
                second: 1,
                expected: 0
            }
        ];

        testData.forEach(data => {
            const {first, second, expected} = data;

            const actual = sortFunc(first, second);

            it(`Should return ${expected}, when first = ${first} and second = ${second}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('sort()', () => {
        const testData = [
            {
                array: [3, 1, 5, 4, 8, 3],
                expected: [1, 3, 3, 4, 5, 8]
            },
            {
                array: [1, 2, 3, 4, 5],
                expected: [1, 2, 3, 4, 5]
            },
            {
                array: [-5, -2, 4, 2, 7, -4],
                expected: [-5, -4, -2, 2, 4, 7]
            },
            {
                array: [],
                expected: []
            },
            {
                array: [1],
                expected: [1]
            }
        ];

        testData.forEach(data => {
            const {array, expected} = data;

            let alist = new AList();
            alist.init(array);
            alist.sort(sortFunc);

            const actual = alist.getArray();

            it(`Should return [${expected}], when array = [${array}]`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('get()', () => {
        const testData = [
            {
                array: [1, 2, 3],
                index: 0,
                expected: 1
            },
            {
                array: [],
                index: 0,
                expected: undefined
            },
            {
                array: [1, 2, 3],
                index: 4,
                expected: undefined
            },
            {
                array: [1, 2, 3, 4, 5],
                index: 4,
                expected: 5
            },
            {
                array: [1, 2, 3, 4, 5],
                index: 4,
                expected: 5
            }
        ];

        testData.forEach(data => {
            const {array, index, expected} = data;

            let alist = new AList();
            alist.init(array);

            const actual = alist.get(index);

            it(`Should return ${expected}, when array = [${array}] and index of element = ${index}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('set()', () => {
        const testData = [
            {
                array: [1, 2, 3],
                index: 0,
                value: 4,
                expected: [4, 2, 3]
            },
            {
                array: [1, 2, 3, 2, 5, 7],
                index: 5,
                value: 6,
                expected: [1, 2, 3, 2, 5, 6]
            },
            {
                array: [1, 2, 3],
                index: 2,
                value: 4,
                expected: [1, 2, 4]
            },
        ];

        testData.forEach(data => {
            const {array, index, value, expected} = data;

            let alist = new AList();
            alist.init(array);
            alist.set(index, value);

            const actual = alist.getArray();

            it(`Should return ${expected}, when array = [${array}], index of change element = ${index} and new value = ${value}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('init() ERROR', () => {
        let alist1 = new AList();

        it(`Catch ERROR`, () => {
            assert.throw(alist1.init, Error, 'Invalid initialization!');
        });
    });
}); 