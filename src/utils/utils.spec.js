import { sum } from './utils';

describe('utils', () => {
    describe('sum', () => {
        test('should add numbers correctly', () => {
            sum(5, 10) // 15
            expect(sum(5,10)).toBe(15);
        });
    });
});