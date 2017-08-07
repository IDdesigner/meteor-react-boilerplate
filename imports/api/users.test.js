const add = (a, b) => {
    if (typeof b !== 'number') {
        return a + a
    }
    return a + b;
}

describe('add', function () {

    it('should add two numbers', function () {
        const res = add(11, 9);

        if (res !== 20) {
            throw new Error('Sum was not equal to expected value');
        }
    });

    it('should double a single number', function () {
        const res = add(8);

        if (res !== 16) {
            throw new Error('Sum was not equal to expected value');
        }
    });

});

