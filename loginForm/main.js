/**
 * @author amanzanor
 * @create 2022-06-16 11:39:11
 * @modify 2022-06-16 11:39:11
 * @desc JS(Logica on js simple) 
 */

let form = document.forms['form'];
form.onsubmit = function(e) {
    e.preventDefault();
    let user = document.form.userN.value;
    let pswd = document.form.pswdN.value;
    if (user === '' || pswd === '') {
        alert("Ingresa Usuario/Contraseña");
    } else {
        alert("User: " + user + " Password: " + pswd);
    }
}

function loginSocial(option) {
    switch (option) {
        case 1:
            alert("Login con Google");
            break;
        case 2:
            alert("Login con Facebook");
            break;
        case 3:
            alert("Login con Github");
            break;
        default:
            break;
    }
}