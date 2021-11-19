const API = "https://rickandmortyapi.com/api/character/";
const ul= document.getElementById("list");

function crearElemento(element){
    return document.createElement(element);
}
function agregarElemento(padre,hijo){
    return padre.appendChild(hijo);
}

const consulta = async () =>{
    const data = await fetch(API)
        .then(datos => {return datos.json()});
    
    let results = data.results;
    results.map(function(result){
        let li = crearElemento('li');
        let img = crearElemento('img');
        let span = crearElemento('span');
        let span2 = crearElemento('span');

        span2.innerHTML = "Unknown"
        
        span.innerHTML = `${result.name}`;
        let query = ()=> { fetch (result.origin.url)
            .then(data => {return data.json()})
            .then(data => {return data.dimension})
            .then(data =>  span2.innerHTML = `${data}` )
            .catch(error => new Error(error))
        }
        query();
        img.src = result.image;

        agregarElemento(li,img);
        agregarElemento(li,span);
        agregarElemento(li,span2);
        agregarElemento(ul,li);
    }) 
    
} 


consulta()


