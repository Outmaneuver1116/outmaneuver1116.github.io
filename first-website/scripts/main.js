const myImage = document.querySelector('img');
myImage.addEventListener('click', () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/user-icon-1024x1024-dtzturco.png') {
        myImage.setAttribute('src', 'images/cdnlogo.com_google-icon.png');
    } else {
        myImage.setAttribute('src', 'images/user-icon-1024x1024-dtzturco.png');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = '';

    while (!myName) {
        myName = prompt('Please enter your name.');
        if (myName === '') {
            alert('Please enter a valid name.');
        } else if (myName === null) {
            return;
        }
    } 
    localStorage.setItem('name', myName);
    myHeading.textContent = `Welcome to my website, ${myName}`;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Welcome to my website, ${storedName}`;
}

myButton.addEventListener('click', () => {
    setUserName();
});