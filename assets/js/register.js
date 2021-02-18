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


const input = document.getElementById('example');
const datepicker = new TheDatepicker.Datepicker(input);
datepicker.render();


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