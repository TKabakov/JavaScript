function concatStrings(strA, strB){
    return strA + strB
}

var m = concatStrings("abc", "def");
console.log(m);
//abcdef

var n = concatStrings(1, 2);
console.log(n);
//3

expect(concatStrings("abc", "def")).toBe("abcdef");


