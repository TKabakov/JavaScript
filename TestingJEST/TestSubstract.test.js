const { default: TestRunner } = require('jest-runner');
const substarct = require('./TestSubstarct')

test('properly substarct two numbers', ()=>{
    expect(
        substarct(5, 3)
        ).toBe(2)
})