/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

let sortString = (s) => {
  return s.split("").sort().join("");
};

function isAnagram(str1, str2) {
  let s1=str1.toLowerCase();
  let s2=str2.toLowerCase();
  let news1=s1;
  let news2=s2;
  // for(let i=0;i<s1.length;i++){
  //   if(s1[i]>='a' && s1[i]<='z') news1+=s1[i]; 
  // }
  // for(let i=0;i<s2.length;i++){
  //   if(s2[i]>='a' && s2[i]<='z') news2+=s2[i]; 
  // }
  if(sortString(news1)==sortString(news2)) return true;
  return false;
}

// console.log(isAnagram('School MASTER', 'The ClassROOM'));
module.exports = isAnagram;
