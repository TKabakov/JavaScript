
const { default: TestRunner } = require('jest-runner');
const sum = require('./Test Sum')

test('properly adds two numbers', ()=>{
    expect(
        sum(1, 2)
        ).toBe(3)
})