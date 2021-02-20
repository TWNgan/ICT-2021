//Tommy
var AHAHAHA = decodeURIComponent(window.location.search);
AHAHAHA = AHAHAHA.substring(1);
console.log(AHAHAHA);

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


let cityReff = Firestore.collection('data').doc(AHAHAHA)
console.log(cityReff);
cityReff.get().then(docSnapshot => {
    if (docSnapshot.exists) {
        let datacc = docSnapshot.data()
        imagedataa = datacc.Profile_picture
        console.log("succ");
        document.getElementById("img-fluid").src = imagedataa;

    } else {
        console.log("LOLLOLO");
        x.style.display = "none";
        console.log("LOLLOLO");
    }
})

document.getElementById("navbar-brand").addEventListener("click", function() {

    var senddataa = "?" + AHAHAHA;
    window.location.href = "profile.html" + senddataa;
})

if (AHAHAHA == "") {
    var x = document.getElementById("img-fluid");
    x.style.display = "none";
    console.log("LOLLOLO");
}