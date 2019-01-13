// JavaScript source code
//------------------------------------slide show-----------------------------------------

function slideSwitch() {
    var $active = $('#slideshow img.active');

    if ($active.length == 0) $active = $('#slideshow img:last');

    var $next = $active.next().length ? $active.next()
        : $('#slideshow img:first');

    $active.addClass('last-active');

    $next.css({ opacity: 0.0 })
        .addClass('active')
        .animate({ opacity: 1.0 }, 1000, function () {
            $active.removeClass('active last-active');
        });
}

$(function () {
    setInterval("slideSwitch()", 5000);
});









function formValidator() {
    // Make quick references to our fields
    var name = document.getElementById('name');
    var uname = document.getElementById('uname');
    var psw= document.getElementById('psw');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var date = document.getElementById('date');
    var message = document.getElementById('message');



    // Check each input in the order that it appears in the form!
    if (isAlphabet(name, "Please enter only letters for your name")) {
      if (notEmpty(uname, "Please Write username")) {
        if (notEmpty(psw, "Please Write password")) {
        if (emailValidator(email, "Please enter a valid email address")) {
           if (notEmpty(phone, "Please Write phone")) {
                if (notEmpty(message, "Please Write something to send")) {
                    //alert("Message Sent Successfully")
                    sendMail();
                    return true;
                }
            }
          }
        }
      }
    }

    return false;

}





function notEmpty(elem, helperMsg) {
    if (elem.value.trim() == "") {
        alert(helperMsg);
        
        elem.focus(); // set the focus to this input
        return false;
    }
    return true;
}




function isAlphabet(elem, helperMsg) {
    var alphaExp = /^[a-zA-Z ]+$/;
    if (elem.value.match(alphaExp)) {
        return true;
    } else {
        alert(helperMsg);
        elem.focus();
        return false;
    }
}




function emailValidator(elem, helperMsg) {
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (elem.value.match(emailExp)) {
        return true;
    } else {
        alert(helperMsg);
        elem.focus();
        return false;
    }
}




function sendMail() {
    var link = "lrgamage88@gmail.com"
             + "?cc=" + escape(document.getElementById('email').value)
             + "&subject=" + escape("Mail to Neha")
             + "&body=" + escape(document.getElementById('message').value)
    ;

    alert("mail sent successfully");
    //window.location.href = link;
}