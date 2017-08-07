import { Meteor } from 'meteor/meteor';
import expect from 'expect';
import { validateNewUser } from './users';

if (Meteor.isServer) {
    describe('users', function () {

        it ('should allow vaild email addres', function () {
            const testUser = {
                emails: [
                    {
                        address: 'test@example.com'
                    }
                ]
            };
            const res = validateNewUser(testUser);

            expect(res).toBe(true);
        });

        it ('should reject invalid email', function () {
            const testUser = {
                emails: [
                    {
                        address: 'test.com'
                    }
                ]
            };

            expect(() => {
                validateNewUser(testUser);
            }).toThrow();

        });
    });
}

// const add = (a, b) => {
//     if (typeof b !== 'number') {
//         return a + a
//     }
//     return a + b;
// }

// describe('add', function () {

//     it('should add two numbers', function () {
//         const res = add(11, 9);

//         expect(res).toBe(20);

//         // if (res !== 20) {
//         //     throw new Error('Sum was not equal to expected value');
//         // }
//     });

//     it('should double a single number', function () {
//         const res = add(8);

//         expect(res).toBe(16);
//     });

// });

