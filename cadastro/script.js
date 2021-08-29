let boton1=document.querySelector('#buton1');
let boton2=document.querySelector('#buton2');
let registros=[];
let registro ={
    nome:'',
    cnpj: '',
    cpf:'',
    categoria:'',
    email: '',
    password:'',
    enderecoCep:'',
    telefone:''
};
 
 function agregarRegistroPessoa(){      
     let imputNome= document.querySelector('#nome');
     let imputCPF=document.querySelector('#inputCpf');
     let imputCategoria=document.querySelector('#inputCategoria');
     let inputEmail=document.querySelector('#inputEmail');
     let website=document.querySelector("#website");
     let inputEnderecoCEP=document.querySelector('#inputEnderecoCep');
     let inputTelefone=document.querySelector('#inputTelefone');
     
     let capturaNome=imputNome.value;
     let capturaCPF=imputCPF.value;
     let capturaCategoria=imputCategoria.value;
     let capturaEmail=inputEmail.value;
    
     let capturaEnderecoCEP=inputEnderecoCEP.value;
     let capturaTelefone=inputTelefone.value;

      registro = {
        nome:capturaNome,  
        cpf:capturaCPF,
        categoria:capturaCategoria,
        email: capturaEmail,
        website:website.value,
        enderecoCep:capturaEnderecoCEP,
        telefone:capturaTelefone
     };
     
     registros.push(registro);

     imputNome.value='';
     imputCPF.value='';
     imputCategoria.value='';
     inputEmail.value='';
     website.value='';
     inputEnderecoCEP.value='';
     inputTelefone.value='';
      
    inserir();
    
    for(let registro of registros){
    console.log('Nome: '+registro.nome+ ' Idade: '+registro.cpf);
    }    
}

function agregarRegistroEmpresa(){
     
    let imputNome= document.querySelector('#nome');
    let imputCnpj=document.querySelector('#inputCnpj');
    let imputCategoria=document.querySelector('#inputCategoria');
    let inputEmail=document.querySelector('#inputEmail');
    
    let inputEnderecoCEP=document.querySelector('#inputEnderecoCep');
    let inputTelefone=document.querySelector('#inputTelefone');
    
    let capturaNome=imputNome.value;
    let capturaCnpj=imputCnpj.value;
    let capturaCategoria=imputCategoria.value;
    let capturaEmail=inputEmail.value;
   
    let capturaEnderecoCEP=inputEnderecoCEP.value;
    let capturaTelefone=inputTelefone.value;

       registro ={
       "nome":capturaNome,
       "cnpj":capturaCnpj,
       "categoria":capturaCategoria,
       "email": capturaEmail,
       "website":website.value,
       "enderecoCep":capturaEnderecoCEP,
       "telefone":capturaTelefone
    }
    
    registros.push(registro);

    imputNome.value='';
    imputCnpj.value='';
    imputCategoria.value='';
    inputEmail.value='';
    website.value='';
    inputEnderecoCEP.value='';
    inputTelefone.value='';
     
   for(let registro of registros){
   console.log('Nome: '+registro.nome+ ' CNPJ: '+registro.cnpj);
   }
   
   inserir();
}

if(document.URL.includes("Empreca")){
    document.querySelector('#buton1').addEventListener('click', agregarRegistroEmpresa);
}else{
    document.querySelector('#buton2').addEventListener('click', agregarRegistroPessoa);
}


function inserir(){
    
    let _data = registro;

      
      fetch('http://localhost:3000/prestadores/', {
        method: "POST",
        body: JSON.stringify(_data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err));
    
    console.log("inserido");
    alert("inserido");

}
/* function obtener(){
    let inputNome= document.querySelector('#nome');
    let inputCpf=document.querySelector('#inputCpf');
    let inputCategoria=document.querySelector('#inputCategoria');
    let inputEmail=document.querySelector('#inputEmail');
    let inputEnderecoCEP=document.querySelector('#inputEnderecoCep');
    let inputTelefone=document.querySelector('#inputTelefone');

    let  ={
        nome:capturaNome,
        cnpj:capturaCnpj,
        categoria:capturaCategoria,
        email: capturaEmail,
        password:capturaPassword,
        enderecoCep:capturaEnderecoCEP,
        telefone:capturaTelefone
     }
} */
