var firebaseConfig = {
    apiKey: "AIzaSyBQV87ztd90KK7eB-cXccehaGQ5nBBBks4",
    authDomain: "ict-2021.firebaseapp.com",
    projectId: "ict-2021",
    storageBucket: "ict-2021.appspot.com",
    messagingSenderId: "913626041292",
    appId: "1:913626041292:web:51a13482651e30c63fab69",
    measurementId: "G-RRM5WNWYLK"
};

firebase.initializeApp(firebaseConfig);
var Firestore = firebase.firestore();
const submitBtn = document.querySelector('#submit');

let userName = document.querySelector('#name');
let userNo = document.querySelector('#phone');
let userPassword = document.querySelector('#confirm_password');
let userEngName = document.querySelector('#engname');
let userGender = document.querySelector('#gender');
let userBirth = document.querySelector('#Birth');
let userLevel = document.querySelector('#level');

const img = document.querySelector('#previewImg');

function getDataUrl(img) {
    // Create canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    // Set width and height
    canvas.width = 1000;
    canvas.height = 1000;
    // Draw the image
    ctx.drawImage(img, 0, 0, 1000, 1000);
    return canvas.toDataURL('image/jpeg');
}



const db = Firestore.collection("data");

document.getElementById("submit").addEventListener("click", function() {
    //submitBtn.addEventListener("click", function() { 
    let userNameInput = userName.value;
    let userNoInput = userNo.value;
    let userPasswordInput = userPassword.value;
    let userEngNameInput = userEngName.value;
    let userGenderInput = userGender.value;
    let userBirthInput = userBirth.value;
    let userLevelInput = userLevel.value;
    const dataUrl = getDataUrl(img);
    let userPictureInput = dataUrl;

    //Access Database
    db.doc()
        .set({
            Username: userNameInput,
            Phone_number: userNoInput,
            Password: userPasswordInput,
            Full_name: userEngNameInput,
            Gender: userGenderInput,
            Birth: userBirthInput,
            Education_level: userLevelInput,
            Profile_picture: userPictureInput
        })
        .then(function() {
            console.log("Data Saved");
        })
        .catch(function(error) {
            console.log("error");
        });
});