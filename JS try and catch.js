
try{
    try{
        throw new Error("oops");
    }
    finally{
        console.log("finally");
    }
}
catch(ex){
    console.log("outer", ex.message);
}

//Output:
//finally
//outer oops

try{
    try{
        throw new Error("oops");
    }
    catch (ex){
        console.error("inner", ex.message);
    }
    finally{
        console.log("finally");
    }
}
catch(ex) {
    console.error("outer", ex.message);
}
//Output
//inner oops
//finally

try{
    try{
        throw new Error('oops');
    }
    catch(ex) {
        console.error('inner', ex.message);
        throw ex;
    } finally {
        console.log('finally');
    }
}
catch (ex){
    console.error('outer', ex.message);
}
//Output
//inner oops
//finally
//outer oops

(() =>{
    try{
        try{
            throw new Error("oops");
        }
        catch(ex){
            console.error("inner", ex.message);
            throw ex;
        }
        finally{
            console.log("finally");
            return;
        }
    }
    catch(ex){
        console.log("outer", ex.message);
    }
})();
/*
The outer "oops" is not thrown 
because of the return in the finally-block. 
The same would apply to any value returned from the catch-block.
*/
//Output:
//inner oops
//finally

