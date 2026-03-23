//Example 1
let string = "Hello World";
//Split
let split=string.split(" ");
console.log(split);  
//last word in the array
let lastword=split[split.length-1];
console.log(lastword);

console.log(lastword.length);


//Example 2
let string1="fly me to the moon"
//split the word
let splitword=string1.split(" ")
console.log(splitword);
//last word in the array
let lastword1=splitword[splitword.length-1];
console.log(lastword1);
//Print - length of the last word
console.log(lastword1.length);

//Example 3

function isAnagram(str1,str2)
{
    //converting to the same case
   str1=str1.replace(/\s/g, "").toLowerCase();
   str2=str2.replace(/\s/g, "").toLowerCase();
    if(str1.length!==str2.length)
        {
           console.log("The strings are not anagrams");
           return false;
        }
       let sort1=str1.split("").sort().join("");
       let sort2=str2.split("").sort().join("");
       console.log(sort1);
       console.log(sort2);
    return sort1 === sort2;
}
console.log(isAnagram("testleaf","Playwright"));




