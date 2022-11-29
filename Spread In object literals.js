//Shallow=cloning or merging of objects
//is possible using spread syntax

const obj1 = { foo: "bar", x: 42};
const obj2 = { foo: "baz", y: 13};

const cloneObj = {...obj1};
console.log(cloneObj);
//{ foo: 'bar', x: 42 }

const mergeObj = {...obj1, ...obj2};
console.log(mergeObj);
//{ foo: 'baz', x: 42, y: 13 }

//NOTE! Object.assign() ca be used to mutate
//an object, whereas spread syntax can't.

const obj01 = { foo: "bar", x: 42};
Object.assign(obj01, { x: 1337});
console.log(obj01);
//{ foo: 'bar', x: 1337 }

//Object.assign() triggers setters on the target object, 
//whereas spread syntax does not.

const objectAssign = Object.assign({set foo(val) {console.log(val);}}, {foo: 1});
//1

const spread = { set foo(val){ console.log(val);},...{foo: 1}};
//nothing is logged; spread.foo is 1


