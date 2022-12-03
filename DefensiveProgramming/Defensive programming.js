function letterFinder (word, match) {
    let condition1 = typeof(word) == "string" && word.length >= 2;
    let condition2 = typeof(match) == "string" && match.length == 1;
    if (condition1 == true && condition2 == true){
        for (let i = 0; i < word.length; i++){
            if(word[i] == match) {
                console.log ('Found the', match, 'at ', i);
            }
            else{
                console.log ('--No match found at', i);
            }
        }
    }
    else {
        console.log('Please, pass correct arguments to the function.')
    }
}

letterFinder(3,5);//Please, pass correct arguments to the function.

letterFinder("cat", 3);//Please, pass correct arguments to the function.

letterFinder("build","ld");//Please, pass correct arguments to the function.

letterFinder("cat", "t");
/*
--No match found at 0
--No match found at 1
Found the t at  2
*/

letterFinder("build", "u");
/*
--No match found at 0
Found the u at  1
--No match found at 2
--No match found at 3
--No match found at 4
*/
