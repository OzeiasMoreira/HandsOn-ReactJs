const button = document.querySelector("button");
const p = document.querySelector("div");

function executarQuandoClicarNoBotao() {
    if(p.style.display == "none") {
        p.style.display = "block";
    } 
    else {
        p.style.display = "none";
    }
}

button.addEventListener("click", executarQuandoClicarNoBotao);