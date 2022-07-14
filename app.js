function matchPassword() {
    let pw1 = document.getElementById('password');
    let pw2 = document.getElementById('confirmPassword');
    console.log(pw1.value);
    console.log(pw2.value);
    if (pw1.value != pw2.value) {
        let errBox = document.querySelector('.err-msg');
        errBox.textContent = "*Passwords don't match";
        pw1.style.border = "1px solid red";
        pw2.style.border = "1px solid red";
    }
}