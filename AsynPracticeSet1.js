/** 

Instructions:
    1.Specific instructions have been written for each question present in this set.
    2.Don’t use async-await in this set.
    3.Please follow ES6 norms for writing your functions.
    4.You can make use of some methods such as .length, toLowerCase(), toUpperCase() and .join() if needed.
    5.An example has been provided for fetch call related questions for your understanding. 
    
*/

/**  
 * 
1. Write a function ‘delayedGreeting’ that consoles a greeting message after a delay of 2 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

 delayedGreeting();
 // Hello, welcome to my portfolio!
 
*/

const delayedGreeting = () =>
  setTimeout(() => "Hello, Welcome to my portfolio", 2000);

function delay() {
  setTimeout(() => console.log("Hello Kunal "), 2000);
}
// delayedGreeting()
// delay();

/** 2. Write a function ‘delayedAddition’ that takes in two numbers and consoles their sum after a delay of 4 seconds using setTimeout. You can practice this question in any JS editor or your browser console.



 delayedAddition(2, 3); 
// 5 */

const delayedAddition = (num1, num2) =>
  setTimeout(() => console.log(num1 + num2), 4000);

// delayedAddition(10, 20);

/**  3. Write a function ‘delayAlert’ that takes in a message ‘Hello, world!’ and a delay time in milliseconds, and displays the message in an alert box after the specified delay time using setTimeout. You can practice this question 
 
 delayedAlert('Hello, world!', 2000);
 // Should display an alert box with the message, Hello, world! 
 
 */

const delayedAlert = (message) => setTimeout(() => alert(message), 2000);

// delayedAlert("Hello Kunal ");

/** 4. Write a function delayedLoop that takes a number 3 and consoles a message 'Hello' three times after a delay of 1 second each, using a for-loop and setTimeout. You can practice this question in any JS editor or your browser console.

 delayedLoop(3);
 // should print Hello three times after 1 second each
 // Output:
 // Hello -- after 1 second
 // Hello -- after another 1 second
 // Hello -- after another 1 second */

const delayedLoop = (num) => {
  for (let i = 0; i < num; i++) {
    setTimeout(() => console.log("Hello"), i * 1000);
  }
};

// delayedLoop(6);

/** 5. Make a fake fetch call that takes a message and a boolean value to get data and console the message received from the server. A fake fetch has been provided. You can practice this question in any JS editor or your browser console.'
 
 const fakeFetch = (msg, shouldSucceed) => {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 if (shouldSucceed) {
 resolve(`message from server: ${msg}`);
 }
 reject(`error from server: ${msg}`);
 }, 3000);
 });
 };


 // Hi -- after 3 seconds */

const fakeFetch = (msg, shouldSucceed) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve(`message from server: ${msg}`);
      }
      reject(`error from server: ${msg}`);
    }, 3000);
  });
};

const data = (message, sholdSucess) =>
  fakeFetch(message, sholdSucess)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

// data("Hello Kunal ", false);

/** 6. EXAMPLE QUESTION: (Solution has been provided for this question for your understanding)
 Use this URL - https://example.com/api/itemlist to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or
 Vanilla template in CodeSandbox for this question.

 const fakeFetch = (url) => {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 if (url === "https://example.com/api/itemlist") {
 reject({
          status: 404,
        message: "Items list not found."
 });
 } else {
 resolve({
          status: 200,
        data: {
            message: "Success",
          data: 
[
 { itemName: "Bread", price: 30 },
 { itemName: "Water Bottle", price: 50 },
 { itemName: "Dairy Milk", price: 20 }
 ]
 }
 });
 }
 }, 2000);
 });
 }



 const displayOutput = document.querySelector("#output");

 fakeFetch("https://example.com/api/itemlist")
 .then((response) => console.log(response))
 .catch((error) => {
 if (error.status === 404) {
      displayOutput.textContent =
 "The data you are looking for, does not exist.";
 }
 });
 // Output on the DOM should be: 
// The data you are looking for, does not exist.


 Explanation:
 In the above code solution, we are making a fakeFetch function call with the URL https://example.com/api/itemlist.

 If the Promise is resolved, the **then**method is executed with the successful response as the argument, and the console.log statement outputs the response object to the console. If the Promise is rejected, the **catch**method is executed with the error object as the argument, and the if statement checks if the error status is equal to 404. If the error status is 404, the message "The data you are looking for, does not exist." is displayed in the HTML
 element with ID "output".

*/

const fakeFetch2 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/itemlist") {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: [
              { itemName: "Bread", price: 30 },
              { itemName: "Water Bottle", price: 50 },
              { itemName: "Dairy Milk", price: 20 },
            ],
          },
        });
      }
    }, 2000);
  });
};

const getData = (url) =>
  fakeFetch2(url)
    .then((data) => console.log(data))
    .catch((error) =>
      error.status == 404
        ? console.log("The data you are looking for, does not exist.")
        : null
    );

// getData("https://example.com/api/itemlis");

/**  7. Use this URL - https://example.com/api/chat to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

 const fakeFetch = (url) => {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 if (url === "https://example.com/api/chat") {
 reject({
          status: 503,
        message: "Service Unavailable"
 });
 } else {
 resolve({
          status: 200,
        data: {
            message: "Success"
 }
 });
 }
 }, 2000);
 });
 };

 // Output on the DOM should be: 
// We are facing high demand at the moment. Please check back later in sometime.

*/

const fakeFetch3 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/chat") {
        reject({
          status: 503,
          message: "Service Unavailable",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
          },
        });
      }
    }, 2000);
  });
};

const getFakeApiData = (url) =>
  fakeFetch3(url)
    .then((response) => console.log(response))
    .catch((error) =>
      error.status == 503
        ? console.log(
            "Server is Unaviable at this time! Please try agian later"
          )
        : null
    );

// getFakeApiData();

/** 8. Use this URL - https://example.com/api/itemlist to make a fake fetch call and list out all the items as an ordered list on the DOM. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.
 
const fakeFetch = (url) => {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 if (url === "https://example.com/api/itemlist") {
 resolve({
          status: 200,
          message: "Success",
          data: 
[
 { itemName: "Bread", price: 30, quantity: 10 },
 { itemName: "Water Bottle", price: 50, quantity: 50 },
 { itemName: "Dairy Milk", price: 20, quantity: 30 }
 ]
 });
 } else {
 reject({
          status: 404,
          message: "Items list not found."
 });
 }
 }, 2000);
 });
 };

 // Output on the DOM should be in the format, {itemName} -- INR {price} -- {quantity}:
 // 1. Bread -- INR 30 -- 10
 // 2. Water Bottle -- INR 50 -- 50
 // 3. Dairy Milk -- INR 20 -- 30 */

const fakeFetch4 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/itemlist") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { itemName: "Bread", price: 30, quantity: 10 },
            { itemName: "Water Bottle", price: 50, quantity: 50 },
            { itemName: "Dairy Milk", price: 20, quantity: 30 },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      }
    }, 2000);
  });
};

const GetItemList = (url) =>
  fakeFetch4(url)
    .then((response) => console.log(response))
    .catch((error) =>
      error.status == 404 ? console.log("Item is not in the list ") : null
    );

// GetItemList("https://example.com/api/itemlist");

/**  9. Use this URL - https://example.com/api/data to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.
 const fakeFetch = (url) => {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 if (url === "https://example.com/api/data") {
 reject({
          status: 500,
        message: "Internal Server Error"
 });
 } else {
 resolve({
          status: 200,
        data: {
            message: "Success"
 }
 });
 }
 }, 2000);
 });
 };
// Your Code here
 // Output on the DOM should be: 
// Internal Server Error! The server crashed. Please try again in some time. */
const fakeFetch5 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/data") {
        reject({
          status: 500,
          message: "Internal Server Error",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
          },
        });
      }
    }, 2000);
  });
};

const getUserData = (url) =>
  fakeFetch5(url)
    .then((response) => console.log(response))
    .catch((error) =>
      error.status == 500
        ? console.log(
            "Internal Server Error! The server crashed. Please try again in some time. "
          )
        : null
    );

// getUserData("https://example.com/api/dat");

/** 10. Use this URL - https://example.com/api/profile to make a fake fetch call and handle errors if
 any. Show a proper message to the user on the DOM, as per the status and message received
 from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or
 Vanilla template in CodeSandbox for this question.
 const fakeFetch = (url) => {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 if (url === "https://example.com/api/profile") {
 reject({
          status: 401,
          message: "Unauthorized Access"
 });
 } else {
 resolve({
          status: 200,
          data: 
{
            message: "Success"
 }
 });
 }
 }, 2000);
 });
 };
 // Your Code here
 // Output on the DOM should be: 
// Unauthorized Access! Looks like you are not logged in. Please login to see your profile. */

const fakeFetch6 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/profile") {
        reject({
          status: 401,
          message: "Unauthorized Access",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
          },
        });
      }
    }, 2000);
  });
};

const getUserStatus = (url) =>
  fakeFetch6(url)
    .then((resopne) => console.log(resopne))
    .catch((error) =>
      error.status == 401
        ? console.log(
            "Unauthorized Access! Looks like you are not logged in. Please login to see your profile."
          )
        : null
    );

// getUserStatus("https://example.com/api/profile");

/** 11. Use this URL - https://example.com/api/profile/NC002 in which we are passing the id of a user to make a fake fetch call and display a welcome message to the user on the DOM. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template inCodeSandbox for this question.

 const fakeFetch = (url) => {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 if (url === "https://example.com/api/profile/NC002") {
 resolve({
          status: 200,
          data: 
{
            message: "Success",
            data: 
{ id: "LNCAT01", name: "CAT BRO ", institute: "CAT  ACADEMY " }
 }
 });
 } else {
 reject({
          status: 404,
          message: "Resource not found"
 });
};
 }
 }, 2000);
 });
 // Your Code here
 // Output on the DOM should be: Welcome!, CAT BRO  from CAT  ACADEMY */

const fakeFetch7 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/profile/LNCAT01") {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: {
              id: "LNCAT01",
              name: "CAT BRO",
              institute: "CAT ACADEMY",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "Resource not found",
        });
      }
    }, 2000);
  });
};

const getCatBroDetails = (url) =>
  fakeFetch7(url)
    .then((respone) =>
      console.log(
        `Welcome!, ${respone.data.data.name} from ${respone.data.data.institute} `
      )
    )
    .catch((error) =>
      error.status == 404
        ? console.log("Resourse Not Found! Please Try Again")
        : null
    );

getCatBroDetails("https://example.com/api/profile/LNCAT01");
