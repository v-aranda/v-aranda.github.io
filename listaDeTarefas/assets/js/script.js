function Onload(){
    function setListadetarefas(){
        // console.log(listaTarefas)
        tarefas.innerHTML = ''
        for (let i in listaTarefas){
            tarefas.innerHTML += `<li>${listaTarefas[i]} <button onclick="apaga(${i})">apagar</button></li>`
        }
    };

    function recebeTarefa(){
        listaTarefas.push(criaTarefa.value)
        // console.log(listaTarefas)
        update()
    };
    
    function apagaTarefa(x){
        const lixeira = listaTarefas.splice(x,1);
        update()
    };

    function salvaLista(){
        let tarefasJason = JSON.stringify(listaTarefas)
        localStorage.setItem('tarefas',tarefasJason)
    }

    function update(){
        setListadetarefas()
        salvaLista()
    }

    const tarefas = document.querySelector('.saida')
    const entrada = document.querySelector('.entrada')
    const criaTarefa = document.querySelector('.criaTarefa')
    apaga = apagaTarefa
        
    update()
    
    entrada.addEventListener('submit',recebeTarefa)
    
}
Onload()