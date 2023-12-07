/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let s=str.toLowerCase();
  let news="";
  for(let i=0;i<s.length;i++){
    if(s[i]>='a' && s[i]<='z') news+=s[i];
  }
  // console.log(news);
  for(let i=0;i<news.length;i++)
  {
    if(news[i]!=news[news.length-i-1]) return false;
    // console.log(news[i],news[news.length-i-1]);
  }
  return true;
}

console.log(isPalindrome('Eva, can I see bees in a cave?'));

module.exports = isPalindrome;
