// set image variable as myImage that selects the img element
let myImage = document.querySelector('img');

// when the image is clicked carry out the function
myImage.onclick = function() {
    // set new variable equal to the attribute of the image
    let mySrc = myImage.getAttribute('src');

    // if statement to change the attribute to the image
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/fox-head.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}

let showButton = document.querySelector("button");

showButton.onclick = function() {
    if ((!myImage.style.visibility) || (myImage.style.visibility === 'visible')){
        myImage.style.visibility = 'hidden'
    } else {
        myImage.style.visibility = 'visible'
    }
    
}




/*
Mozilla explanation:

You stored a reference to your <img> element in the myImage variable. Next, you made this variable's onclick event handler property equal to a function with no name (an "anonymous" function). So every time this element is clicked:

The code retrieves the value of the image's src attribute.
The code uses a conditional to check if the src value is equal to the path of the original image:
If it is, the code changes the src value to the path of the second image, forcing the other image to be loaded inside the <img> element.
If it isn't (meaning it must already have changed), the src value swaps back to the original image path, to the original state.
*/

// initialize variables for button and header elements
// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');

// // set function to display string with user name
// function setUserName() {
//   let myName = prompt('Please enter your name.');
//   if(!myName) {
//     setUserName();
//   } else {
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Mozilla is cool, ' + myName;
//   }
// }


// Mozilla explanation: 
// In human language, this means: If myName has no value, run setUserName() again from the start. If it does have a value (if the above statement is not true), then store the value in localStorage and set it as the heading's text.


// // if statement that gets users name
// // if data already exists then don't reprompt
// if(!localStorage.getItem('name')) {
//   setUserName();
// } else {
//   let storedName = localStorage.getItem('name');
//   myHeading.textContent = 'Mozilla is cool, ' + storedName;
// }

// // call setUserName when button is clicked
// myButton.onclick = function() {
//   setUserName();
// }