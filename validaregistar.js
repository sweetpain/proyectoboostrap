function valipassword (){
var pass= /^(?=(.*[\W]){1,})(?=(.*?[A-Z]){1,})(?!.*\s).{7,32}$/;
var password = document.getElementById("idContraseña");
if(password.value.match(pass)){
    
    return true;
}
else{
    alert('Contraseña incorrecta.')
    return false;
}

}

function valiname (){
    var nombre= /^[a-z0-9ü][a-z0-9ü_]{1,15}$/;
    var nombreusu = document.getElementById("idpNombre");
    if(nombreusu.value.match(nombre)){
        
        return true;
    }
    else{
        alert('Nombre incorrecto.')
        return false;
    }
    
    }




/*
    (function(){
        var formulario= document.getElementsByName("formulario")[0];
        elementos= formulario.elements;
        boton= document.getElementById("btn");
        
        var validarNombre = function (e){
            if (formulario.nombre.value == 0) {
                alert("complete el campo del nombre");
                e.preventDefault();
            }
        };
        var validarCorreo = function (e){
            if (formulario.email.value == 0) {
                alert("complete el campo del correo");
                propForm.expresionRegular=/^[a-zA-Z]+4/;
                e.preventDefault();
            }
        };
        var validarPassword = function (e){
            if (formulario.contraseña.value == 0) {
                alert("complete el campo del nombre");
                e.preventDefault();
            }
        };
        var validarDiassemana = function (e){
            if (formulario.Diassemana.value == 0) {
                alert("complete el campo de su cumpleaños");
                e.preventDefault();
            }
        };
        var validarRadio = function(e){
            if (formulario.sino[0].checked == true || formulario.sino[1].checked == true) {
                
            }else{
                alert("tiene que rellenar alguno de los dos campos");
                e.preventDefault();
            }
        };
        var validarIntereses = function (e){
            if (formulario.intereses.value == 0) {
                alert("es obligatoria elegir una opcion");
                e.preventDefault();
            }
        };
        var validarCheckbox= function(e){
            if (formulario.terminos.checked == false) {
                alert("Acepte los terminos");
                e.preventDefault();
            }
        };
    
        
        
    
        var validar = function(e){
            validarNombre(e);
            validarCorreo(e);
            validarPassword(e);
            validarDiassemana(e);
            validarRadio(e);
            validarIntereses(e);
            validarCheckbox(e);
            
        };
    
        formulario.addEventListener("submit",validar);
    }())
*/

