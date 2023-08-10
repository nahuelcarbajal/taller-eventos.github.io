 
document.addEventListener("DOMContentLoaded", () =>{

    let alerta = document.querySelector("div");
    let btn = document.querySelector("button");

        alerta.addEventListener("click", () =>{
        alert("¡Hola! Soy el div");
        });

        btn.addEventListener("click", e=>{
            event.stopPropagation();
            alert("Hola!");
        });
});