// tabs init
$(document).ready(function(){
    $('.tabs').tabs();
});

// select field init
$(document).ready(function(){
    $('select').formSelect();
});

// pp listen for change

const checkImageValidity = (url, callback) => {
    const img = new Image();
    img.onload = function() { callback(true); };
    img.onerror = function() { callback(false); };
    img.src = url;
}

document.getElementById("pp_img_field").addEventListener("input",function(evt){

    let imgUrl = this.value;

    checkImageValidity(imgUrl, (exists)=>{

        const targetImg = document.getElementById("pp_img");

        if(exists){
            targetImg.src = imgUrl;
        }else{
            targetImg.src = "https://www.torrentbd.com/torrent/images/default_avatar.png";
        }
    });
});