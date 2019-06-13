function validar() {
    var name, mail, expresion;
    name = document.getElementById("name").value;
    mail = document.getElementById("mail").value;
    msg = document.getElementById("msg").value;
    expresion = /\w+@\w+\.+[a-z]/;

    if(name === "") {
        alert("El campo nombre esta vacio");
        return false;
    } 
    else if(mail === "") {
        alert("El campo email esta vacio");
        return false;
    }
    else if(msg === "") {
        alert("El campo mensaje esta vacio");
        return false;
    }
    else if(!expresion.test(mail)) {
        alert("El email no es valido");
        return false; 
    }
    else if(name.length > 20) {
        alert("El nombre es muy largo");
        return false;
    }
    else if(mail.length > 100) {
        alert("El email es muy largo");
        return false;
    }
}