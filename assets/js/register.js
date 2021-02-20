var PW = document.getElementById("password"),
    CPW = document.getElementById("confirm_password");

function validatePassword() {
    if (PW.value != CPW.value) {
        CPW.setCustomValidity("Passwords do not Match");
    } else {
        CPW.setCustomValidity('');
    }
}

PW.onchange = validatePassword;
CPW.onkeyup = validatePassword;


function previewFile(input) {
    var file = $("input[type=file]").get(0).files[0];

    if (file) {
        var reader = new FileReader();

        reader.onload = function() {
            $("#previewImg").attr("src", reader.result);
        }

        reader.readAsDataURL(file);
    }
}

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
let userPass = document.querySelector('#password');
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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var xyz = 1;
const db = Firestore.collection("data");
const photo = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAPoA+gDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z";
document.getElementById("submit").addEventListener("click", function() {
    let userNameInput = userName.value;
    let userNoInput = userNo.value;
    let userPassInput = userPass.value;
    let userPasswordInput = userPassword.value;
    let userEngNameInput = userEngName.value;
    let userGenderInput = userGender.value;
    let userBirthInput = userBirth.value;
    let userLevelInput = userLevel.value;
    const dataUrl = getDataUrl(img);
    let userPictureInput = dataUrl;
    console.log(userPictureInput)


    if ((userNameInput != "") && (isNaN(userNoInput) === false) && (userNoInput.length === 8) && (userPasswordInput != "") && (userPassInput === userPasswordInput) && (userEngNameInput != "") && (userGenderInput != "") && (userBirthInput != "") && (userPictureInput != photo)) {
        submitBtn.disabled = true
        console.log("NIce");



        Firestore.collection("data").where("Username", "==", userNameInput)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    window.nnoA = (doc.id);
                    console.log(nnoA);
                    window.dataadata = (nnoA);

                })
            });
        Firestore.collection("data").where("Phone_number", "==", userNoInput)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(ddoc) {
                    window.noA = (ddoc.id);
                    console.log(noA);
                    window.datadata = (noA);

                })
            });


        sleep(1000).then(() => {
            try {
                submitBtn.disabled = false
                console.log(datadata);
            } catch (err) {
                console.log(err);
                window.xyz = (xyz + 1);
            }
        });

        sleep(900).then(() => {
            try {
                submitBtn.disabled = false
                console.log(dataadata);
            } catch (err) {
                console.log(err);
                window.xyz = (xyz + 1);
            }
        });

        sleep(1200).then(() => {
            console.log(xyz);
            if (xyz === 3) {
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
                        Firestore.collection("data").where("Username", "==", userNameInput)
                            .get()
                            .then(function(querySnapshot) {
                                querySnapshot.forEach(function(doc) {
                                    // doc.data() is never undefined for query doc snapshots
                                    window.ABCD = (doc.id);
                                    console.log(ABCD);
                                    var sendata = "?" + ABCD;
                                    window.location.href = "profile.html" + sendata;


                                });
                            })
                    })
            } else {
                alert("Username or phone number has been used!");
                xyz = 1;
                delete dataadata;
                delete datadata;
            }
        });




    }
});

document.getElementById("name").addEventListener("input", function() {
    let userNameInput = userName.value;
    let userNoInput = userNo.value;
    let userPassInput = userPass.value;
    let userPasswordInput = userPassword.value;
    let userEngNameInput = userEngName.value;
    let userGenderInput = userGender.value;
    let userBirthInput = userBirth.value;
    let userLevelInput = userLevel.value;
    const dataUrl = getDataUrl(img);
    let userPictureInput = dataUrl;

    if ((userNameInput != "") && (isNaN(userNoInput) === false) && (userNoInput.length === 8) && (userPasswordInput != "") && (userPassInput === userPasswordInput) && (userEngNameInput != "") && (userGenderInput != "") && (userBirthInput != "") && (userPictureInput != photo)) {
        submitBtn.setAttribute('type', 'button');
        console.log("ali");
    }


});

document.getElementById("phone").addEventListener("input", function() {
    let userNameInput = userName.value;
    let userNoInput = userNo.value;
    let userPassInput = userPass.value;
    let userPasswordInput = userPassword.value;
    let userEngNameInput = userEngName.value;
    let userGenderInput = userGender.value;
    let userBirthInput = userBirth.value;
    let userLevelInput = userLevel.value;
    const dataUrl = getDataUrl(img);
    let userPictureInput = dataUrl;

    if ((userNameInput != "") && (isNaN(userNoInput) === false) && (userNoInput.length === 8) && (userPasswordInput != "") && (userPassInput === userPasswordInput) && (userEngNameInput != "") && (userGenderInput != "") && (userBirthInput != "") && (userPictureInput != photo)) {
        submitBtn.setAttribute('type', 'button');
        console.log("ali");
    }


});

document.getElementById("password").addEventListener("input", function() {
    let userNameInput = userName.value;
    let userNoInput = userNo.value;
    let userPassInput = userPass.value;
    let userPasswordInput = userPassword.value;
    let userEngNameInput = userEngName.value;
    let userGenderInput = userGender.value;
    let userBirthInput = userBirth.value;
    let userLevelInput = userLevel.value;
    const dataUrl = getDataUrl(img);
    let userPictureInput = dataUrl;

    if ((userNameInput != "") && (isNaN(userNoInput) === false) && (userNoInput.length === 8) && (userPasswordInput != "") && (userPassInput === userPasswordInput) && (userEngNameInput != "") && (userGenderInput != "") && (userBirthInput != "") && (userPictureInput != photo)) {
        submitBtn.setAttribute('type', 'button');
        console.log("ali");
    }


});

document.getElementById("confirm_password").addEventListener("input", function() {
    let userNameInput = userName.value;
    let userNoInput = userNo.value;
    let userPassInput = userPass.value;
    let userPasswordInput = userPassword.value;
    let userEngNameInput = userEngName.value;
    let userGenderInput = userGender.value;
    let userBirthInput = userBirth.value;
    let userLevelInput = userLevel.value;
    const dataUrl = getDataUrl(img);
    let userPictureInput = dataUrl;

    if ((userNameInput != "") && (isNaN(userNoInput) === false) && (userNoInput.length === 8) && (userPasswordInput != "") && (userPassInput === userPasswordInput) && (userEngNameInput != "") && (userGenderInput != "") && (userBirthInput != "") && (userPictureInput != photo)) {
        submitBtn.setAttribute('type', 'button');
        console.log("ali");
    }


});

document.getElementById("engname").addEventListener("input", function() {
    let userNameInput = userName.value;
    let userNoInput = userNo.value;
    let userPassInput = userPass.value;
    let userPasswordInput = userPassword.value;
    let userEngNameInput = userEngName.value;
    let userGenderInput = userGender.value;
    let userBirthInput = userBirth.value;
    let userLevelInput = userLevel.value;
    const dataUrl = getDataUrl(img);
    let userPictureInput = dataUrl;

    if ((userNameInput != "") && (isNaN(userNoInput) === false) && (userNoInput.length === 8) && (userPasswordInput != "") && (userPassInput === userPasswordInput) && (userEngNameInput != "") && (userGenderInput != "") && (userBirthInput != "") && (userPictureInput != photo)) {
        submitBtn.setAttribute('type', 'button');
        console.log("ali");
    }


});

document.getElementById("gender").addEventListener("input", function() {
    let userNameInput = userName.value;
    let userNoInput = userNo.value;
    let userPassInput = userPass.value;
    let userPasswordInput = userPassword.value;
    let userEngNameInput = userEngName.value;
    let userGenderInput = userGender.value;
    let userBirthInput = userBirth.value;
    let userLevelInput = userLevel.value;
    const dataUrl = getDataUrl(img);
    let userPictureInput = dataUrl;

    if ((userNameInput != "") && (isNaN(userNoInput) === false) && (userNoInput.length === 8) && (userPasswordInput != "") && (userPassInput === userPasswordInput) && (userEngNameInput != "") && (userGenderInput != "") && (userBirthInput != "") && (userPictureInput != photo)) {
        submitBtn.setAttribute('type', 'button');
        console.log("ali");
    }


});


document.getElementById("Birth").addEventListener("input", function() {
    let userNameInput = userName.value;
    let userNoInput = userNo.value;
    let userPassInput = userPass.value;
    let userPasswordInput = userPassword.value;
    let userEngNameInput = userEngName.value;
    let userGenderInput = userGender.value;
    let userBirthInput = userBirth.value;
    let userLevelInput = userLevel.value;
    const dataUrl = getDataUrl(img);
    let userPictureInput = dataUrl;

    if ((userNameInput != "") && (isNaN(userNoInput) === false) && (userNoInput.length === 8) && (userPasswordInput != "") && (userPassInput === userPasswordInput) && (userEngNameInput != "") && (userGenderInput != "") && (userBirthInput != "") && (userPictureInput != photo)) {
        submitBtn.setAttribute('type', 'button');
        console.log("ali");
    }


});


document.getElementById("level").addEventListener("input", function() {
    let userNameInput = userName.value;
    let userNoInput = userNo.value;
    let userPassInput = userPass.value;
    let userPasswordInput = userPassword.value;
    let userEngNameInput = userEngName.value;
    let userGenderInput = userGender.value;
    let userBirthInput = userBirth.value;
    let userLevelInput = userLevel.value;
    const dataUrl = getDataUrl(img);
    let userPictureInput = dataUrl;

    if ((userNameInput != "") && (isNaN(userNoInput) === false) && (userNoInput.length === 8) && (userPasswordInput != "") && (userPassInput === userPasswordInput) && (userEngNameInput != "") && (userGenderInput != "") && (userBirthInput != "") && (userPictureInput != photo)) {
        submitBtn.setAttribute('type', 'button');
        console.log("ali");
    }


});

document.getElementById("previewImg").addEventListener("load", function() {
    let userNameInput = userName.value;
    let userNoInput = userNo.value;
    let userPassInput = userPass.value;
    let userPasswordInput = userPassword.value;
    let userEngNameInput = userEngName.value;
    let userGenderInput = userGender.value;
    let userBirthInput = userBirth.value;
    let userLevelInput = userLevel.value;
    const dataUrl = getDataUrl(img);
    let userPictureInput = dataUrl;

    if ((userNameInput != "") && (isNaN(userNoInput) === false) && (userNoInput.length === 8) && (userPasswordInput != "") && (userPassInput === userPasswordInput) && (userEngNameInput != "") && (userGenderInput != "") && (userBirthInput != "") && (userPictureInput != photo)) {
        submitBtn.setAttribute('type', 'button');
        console.log("ali");
    }


});