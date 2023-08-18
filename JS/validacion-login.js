function ir(){
    var c = 12345;
    var u = "jd.alzate29@ciaf.edu.co";
    if(document.form.password.value == c && document.form.login.value == u){
              window.location="./Agro.html";
              alert("Bienvenido a Agrosoftware");
     }
     else{
        alert("ERROR en usuario o contraseña")
     }
}
