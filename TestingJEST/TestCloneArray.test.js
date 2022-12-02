
const { default: TestRunner } = require('jest-runner');

const cloneArray = require('./TestCloneArray');

test('cloning an array properly', ()=>{
    const array = [1, 2, 3]
    expect (cloneArray(array)).toEqual(array)
    expect (cloneArray(array)).not.toBe(array)
})