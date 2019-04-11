
$(document).ready(function () {

    $('.tabs').tabs();

    $('.materialboxed').materialbox();

    $('.tooltipped').tooltip({delay: 0});

    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 80,
        format: 'yyyy-mm-dd',
    });

    $(".tooltip").trigger("focus.tooltip");

    // datepicker chrome solution
    $('.datepicker').on('mousedown', function (event) {
        event.preventDefault();
    });
});

// pp listen for change

const defaultImgLink = "https://www.torrentbd.com/torrent/images/default_avatar.png";

const checkImageValidity = (url, callback) => {

    const img = new Image();
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
    img.src = url;

    img = null; // cleanup memory
}

document.getElementById("pp_img_field").addEventListener("input", function (evt) {

    let imgUrl = this.value;

    checkImageValidity(imgUrl, (exists) => {

        const targetImg = document.getElementById("pp_img");

        if (exists) {

            targetImg.src = imgUrl;
            this.style.borderColor = "green";
            this.style.boxShadow = "0 0 0 0.2rem rgba(88,214,141,.5)";

        } else {

            targetImg.src = defaultImgLink;
            this.style.borderColor = "crimson";
            this.style.boxShadow = "0 0 0 0.2rem rgba(220,20,60,.5)";

        }
    });
});

document.getElementById("show_password").addEventListener("click", function () {

    const inputFields = Array.from(document.querySelectorAll(".passwd_field"));

    inputFields.forEach(field => {

        if (field.type === "password") {

            field.type = "text";
            this.style.color = "#4db6ac"; // "this" refers to the icon here;

        } else if (field.type === "text") {

            field.type = "password";
            this.style.color = "white";
        }
    });
});

// document.getElementById("cTitle").addEventListener("focus",function(){
//     const instance = M.Tooltip.getInstance(elem);

//     instance.open();
// });