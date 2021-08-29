let reload=document.getElementById("reload");
let btn_autonomo=document.getElementById("autonomo");
let btn_empresa=document.getElementById("empresa");
let btn_voltar=document.getElementById("voltar");
let btn_mostrar=document.getElementById("mostrar");

btn_mostrar.addEventListener("click",mostrarbtns);//prencher
btn_autonomo.addEventListener("click",mostrarAutonomo);
btn_empresa.addEventListener("click",mostrarEmpreca);

btn_voltar.addEventListener("click",voltar);




function mostrarAutonomo(){
    ocultar();
    btn_voltar.style.display="";
reload.innerHTML=`<iframe class="iframe" style="width:100%; height:600px; overflow:hidden;" src="cadastro/cadastroPessoaAutonoma.html">
</iframe>
`
}

function mostrarEmpreca(){
    ocultar();
    btn_voltar.style.display="";
    reload.innerHTML=`<iframe class="iframe" style="width:100%; height:600px; overflow:hidden;" src="cadastro/cadastroEmprecaServico.html">
    </iframe>
    `
}

function ocultar(){
    document.getElementById("temp-text").style.display="none";
    btn_autonomo.style.display="none";
    btn_empresa.style.display="none";
    
}

function mostrarbtns(){//prencher
    btn_autonomo.style.display="";
    btn_empresa.style.display="";
    btn_mostrar.style.display="none";
}

function voltar(){
    document.getElementById("temp-text").style.display="";
    let div_iframe=document.querySelectorAll(".iframe");
    for(i=0;i<div_iframe.length;i++){
        div_iframe[i].style.display="none";
    }
    btn_mostrar.style.display="";//prenchear
    btn_voltar.style.display="none";//volver
}