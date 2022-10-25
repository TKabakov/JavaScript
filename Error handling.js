try{
 console.log(a+b)
 }catch(err){
 console.log(err);
 console.log("There is an error");
 console.log("The error is saved in the err block");
 }
 
 console.log("My program does not stop");
 
/*
There is an error
The error is saved in the err block
My program does not stop
*/
 
try{
 throw new ReferenceError()
 }catch(error){
 console.log(error);
 console.log("There is an Reference Error");
 }
 
 console.log("My program does not stop");
/*
There is an Reference Error
My program does not stop
*/
 
 //A ReferenceError gets thrown when, for example, one tries to use variables that haven't been declared anywhere
 console.log(username);//ReferenceError: username is not defined at Object
 
//Any kind of invalid JavaScript code will cause a SyntaxError 
 let c "there is no assignment operator here";//SyntaxError: Unexpected string
 /*
 SyntaxError in JavaScript: cannot be caught using the try-catch block.
 */
 
 "hello".pop();//TypeError: "hello".pop is not a function at Object.
 /*
 A TypeError is thrown when, for example, trying to run a method on a non-supported data type.
 */
 
 
