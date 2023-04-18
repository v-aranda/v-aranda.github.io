
function onload(){
    const form = document.querySelector(".form");
    //entradas
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const objetos = []
    const resultado = document.querySelector(".resultado");
    let c = 0

    function mostraNome(evento){
        evento.preventDefault();
        
        let objeto = {
            nome:nome.value,
            sobrenome:sobrenome.value
        };
       
        objetos.push(objeto);
        resultado.innerHTML += `<p> Olá ${objetos[c].nome} ${objetos[c].sobrenome}</p>`

        nome.value = ''
        sobrenome.value = ''
        c++
        


        
        
    };
    form.addEventListener('submit',mostraNome)
    
}


onload()

