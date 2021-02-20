var AHAHA = decodeURIComponent(window.location.search);
AHAHA = AHAHA.substring(1);
console.log(AHAHA);

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

let cityRef = Firestore.collection('data').doc(AHAHA)
cityRef.get().then(docSnapshot => {
    if (docSnapshot.exists) {
        let datac = docSnapshot.data()
        Usernamedata = datac.Username
        Engnamedata = datac.Full_name
        Birthdata = datac.Birth
        Genderdata = datac.Gender
        Phonedata = datac.Phone_number
        ELdata = datac.Education_level
        PWdata = datac.Password
        imagedata = datac.Profile_picture
        console.log(Birthdata)
        document.getElementById("User Name").innerHTML = Usernamedata;
        document.getElementById("EngName").innerHTML = Engnamedata;
        document.getElementById("genderdata").innerHTML = Genderdata;
        document.getElementById("phoneno").innerHTML = Phonedata;
        document.getElementById("DOB").innerHTML = Birthdata;
        document.getElementById("EL").innerHTML = ELdata;
        document.getElementById("PWW").innerHTML = PWdata;
        document.getElementById("photocon").src = imagedata;


    }
})

document.getElementById("PWW").style.display = "none";

function showPW() {
    document.getElementById("BT").style.display = "none";
    document.getElementById("PWW").style.display = "block";
}

function closePW() {
    location.reload();
}

document.getElementById("Homepagego").addEventListener("click", function() {
    window.location.href = "index.html" + "?" + AHAHA;
})