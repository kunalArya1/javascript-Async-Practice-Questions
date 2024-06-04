/** 
 
Instructions:
    Specific instructions have been written for each question present in this set.
    Please follow ES6 norms for writing your functions.
    You can make use of basic methods such as .length, toLowerCase(), toUpperCase() if needed.
    An example has been provided for fetch call related questions for your understanding. 
    
*/


/**  1. Use this URL - https://example.com/post/comments to make a fake fetch call and list out all the
 emails of users on the DOM in ordered list. A fakeFetch has been provided. Use HTML, CSS &
 JS template in REPL or Vanilla template in CodeSandbox for this question.
 const fakeFetch = (url) => {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 if (url === "https://example.com/post/comments") {
 resolve({
          status: 200,
          message: "Success",
          data: 
[
 { email: "xyz@gmail.com", commentBody: "Well done keep it up" },
 {
              email: 
"hello@outlook.com",
              commentBody: "Good going a lot to learn from you awesome"
 },
 {
              email: 
"ram99@gmail.com",
              commentBody: "Anyone from Vadodara here"
 }
 ]
 });
 } else {
 reject({
          status: 404,
          message: "No Commentes found."
 });
 }
 }, 2000);
 });
 };
 // your code here
 // Output on the DOM should be:
 // 1. xyz@gmail.com
 // 2. hello@outlook.com
 // 3. ram99@gmail.com */


  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/post/comments") {
          resolve({
            status: 200,
            message: "Success",
            data: [
              { email: "xyz@gmail.com", commentBody: "Well done keep it up" },
              {
                email: "hello@outlook.com",
                commentBody: "Good going a lot to learn from you awesome",
              },
              {
                email: "ram99@gmail.com",
                commentBody: "Anyone from Vadodara here",
              },
            ],
          });
        } else {
          reject({
            status: 404,
            message: "No Commentes found.",
          });
        }
      }, 2000);
    });
  };