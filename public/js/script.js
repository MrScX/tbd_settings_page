// tabs init
$(document).ready(function () {
    $('.tabs').tabs();
});

// select field init
$(document).ready(function () {
    $('select').formSelect();
});

$(document).ready(function(){
    $('.materialboxed').materialbox();
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