(function(){

    $(document).ready(function () {
    
        $('.tabs').tabs();
    
        $('.materialboxed').materialbox();
    
        $('.tooltipped').tooltip({ delay: 10 });
    
        $('input#input_text, textarea#textarea2').characterCounter();
    
        $('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 80,
            format: 'yyyy-mm-dd',
        });
    
        // datepicker chrome solution
        $('.datepicker').on('mousedown', function (event) {
            event.preventDefault();
        });
    });
    const changeTooltip = (elem, text) => {
    
        elem.dataset.tooltip = text;
        $('.tooltipped').tooltip({ delay: 10 });
    }
    
    // pp listen for change
    
    const defaultImgLink = "https://www.torrentbd.com/torrent/images/default_avatar.png";
    
    const checkImageValidity = (url, callback) => {
    
        let img = new Image();
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
                changeTooltip(this, "Hide Password");
    
            } else if (field.type === "text") {
    
                field.type = "password";
                this.style.color = "#c1cdd2";
                changeTooltip(this, "Show Password");
            }
        });
    });
    
    document.getElementById("re_password").addEventListener("keyup", function (evt) {
    
        const password = document.getElementById("password");
        
    
        if (this.value !== password.value) {
    
            this.classList.add("invalid");
            password.classList.add("invalid");
    
        } else {
    
            this.classList.remove("invalid");
            password.classList.remove("invalid");
    
            this.classList.add("valid");
            password.classList.add("valid");
        }
    
    });
    
})();


