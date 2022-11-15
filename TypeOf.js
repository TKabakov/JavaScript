//Using typeOf

var test = typeof("what is this?")
console.log(test);//string

var test = typeof(10);
console.log(test);//number

var test = typeof(3.14);
console.log(test);//number

var test = typeof(true);
console.log(test);//boolean

var test = typeof(false);
console.log(test);//boolean

var test = typeof(1<2);
console.log(test);//boolean

var test = typeof([1,2,3]);
console.log(test);//object

var test = typeof({firstProperty: 1});
console.log(test);//object

var test = typeof(function anc(){console.log('abc');});
console.log(test);//function
