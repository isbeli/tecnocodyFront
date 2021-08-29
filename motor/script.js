setTimeout(function(){    
	let input=document.querySelector("#gs_tti50 .gsc-input");
	let button=document.querySelector(".gsc-search-button");
	button.addEventListener("click",listar);
},2000);

function listar(){
	let area=document.querySelector(".gsc-results-wrapper-overlay");
	area.style.display = 'none';

	setTimeout(function(){
		let pesquisas=document.querySelectorAll("a.gs-title");
		let posiblesPrestadores=[];//array para almacenar Posibles prestadores de servicos
		let prestadorServico;

		for(i=0;i<pesquisas.length;i++){
			if(pesquisas[i].innerText=="" || pesquisas[i].href==""){
				
			}else{
				prestadorServico={
				titulo : pesquisas[i].innerText, 
				url : pesquisas[i].href
				}
				console.log(prestadorServico);
				posiblesPrestadores[i]=prestadorServico;
			}
		}
		let tabelaResult=document.getElementById("tabelaResult");
		mostrarTabela(posiblesPrestadores,tabelaResult);
		inserirPresencia(posiblesPrestadores);
		
	},1500);
	
	
}

function mostrarTabela(lista,elementDom){
	elementDom.innerHTML=`<table class="table table-light table-striped">
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Url</th>
							<th>accion</th>
                        </tr>
                    </thead>
                    <tbody id="listado">
					</tbody>
					</table>
                    `;
	let listado=document.getElementById("listado");
	for(i=0;i<lista.length;i++){
                listado.innerHTML+= `<tr>
                                        <td>${lista[i].titulo}</td>
                                        <td>${lista[i].url}</td>
                                        <td><button class="btn btn-danger" type="button">eliminar url</button><button class="btn btn-success" type="button">verificar</button></td>
                                    </tr>`;
    }
	
}
           
            


function inserirPresencia(objeto){
    
    let _data =objeto;

      
      fetch('http://localhost:3000/presencias/', {
        method: "POST",
        body: JSON.stringify(_data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err));
    
    console.log("inserido");

}