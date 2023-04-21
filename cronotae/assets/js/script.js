function Onload(){
    function previneReload(reload){
        reload.preventDefault()
    };
    // cronometro
    function pegAtual(marco, passado=0){
        milisegundosContados =passado + (Date.now()-marco)
        const tempo = new Date( milisegundosContados);
        let milisegundos = tempo.getMilliseconds()
        return [tempo.toLocaleTimeString('pt-BR',{minute:"2-digit",second:"2-digit"}),('000'+milisegundos).slice(-3)]
        
    };  

    // interface-cronometro ########################################################################################################

    function setRelogioZerado(){
        segundos.innerHTML = pegAtual(Date.now())[0]
        milsegundos.innerHTML = pegAtual(Date.now())[1]
        botoes.innerHTML = '<button class="inicia"><i class="bi bi-play-circle"></i></button>'
        botaoInicia =  document.querySelector('.inicia')
        botaoInicia.addEventListener('click', iniciaContagem)
    }
    function setRelogioContando(){
        botoes.innerHTML = '<button class="zera"><i class="bi bi-stop-circle"></i></button> <button class="controla"><i class="bi bi-pause-circle"></i></button> <button class="marca"><i class="bi bi-plus-circle"></i></button>'
        
        let botaoMarca =  document.querySelector('.marca')
        botaoControle =  document.querySelector('.controla')
        let botaoZera =  document.querySelector('.zera')

        botaoMarca.addEventListener('click',marcaContagem)
        botaoControle.addEventListener('click',controlaContagem)
        botaoZera.addEventListener('click',zera) 
    }
    function pisca(){  
        if (cor){
            segundos.style.color = 'var(--cor)'
            cor = false
        }else{
            segundos.style.color = 'rgb(0,0,0)'
            cor = true
            
        }
    }; 
    function relogioPisca(){
        piscar = setInterval(function(){pisca()},500)
    }

    function relogioPara(){
        clearInterval(piscar);
        clearInterval(update)
    }
    function relogioConta(a,b){
        relogioPara()
        segundos.style.color = 'var(--cor)'
        milsegundos.style.color = 'var(--cor)'
        update = setInterval(function(){segundos.innerHTML = pegAtual(a,b)[0];milsegundos.innerHTML = pegAtual(a,b)[1]},1)
    }
    function marcaContagem(){
        salvaValores()
        updatelista()
    };
    
    function paraContagem(){
        relogioPara()
        marcadecorrido.unshift(milisegundosContados)
        updatelista()
    };

    function salvaValores(){
        marcadecorrido.unshift(milisegundosContados)
        listaMarcadoresSalvos.unshift(milisegundosContados)
    }

    function continuaContagem(){
        retomaContagem = Date.now()
        relogioConta(retomaContagem, marcadecorrido[0])
           
    };
    function controlaContagem(){
        if (rodando){
            rodando = false
            paraContagem()
            botaoControle.innerHTML = '<i class="bi bi-play-circle"></i>'
        }
        else{
            rodando = true
            continuaContagem()
            botaoControle.innerHTML = '<i class="bi bi-pause-circle"></i>'
        }
    };

    function zera(){
        updatelista()
        relogioPara()
        marcadecorrido = []
        setRelogioZerado()
        relogioPisca()
    };
    function iniciaContagem(){
        setRelogioContando()  
        marcaInicio = Date.now();
        relogioConta(marcaInicio,0);
    }

    // marcador
    function setListamarcadores(){
        listaMarcadores.innerHTML = ''
        
        for (let i in listaMarcadoresSalvos){
            let second = new Date(listaMarcadoresSalvos[i])
            let milisegundos = second.getMilliseconds()
            let marca = second.toLocaleTimeString('pt-BR',{minute:"2-digit",second:"2-digit"}) + `:${('000'+milisegundos).slice(-3)}`
            listaMarcadores.innerHTML += `<li>${marca} <button onclick="apaga(${i})"><i class="bi bi-trash"></i></button></li>`
        }
    };
    function apagaMarcador(x){
        const lixeira = listaMarcadoresSalvos.splice(x,1);
        updatelista()
    };

    function salvaLista(){  
        // let marcadoresJason = JSON.stringify(listaMarcadoresSalvos)
        // localStorage.setItem('marcadores',marcadoresJason)
    }

    function updatelista(){
        setListamarcadores()
        salvaLista()
    }

    document.addEventListener('submit',previneReload)
    const segundos =  document.querySelector('.out-segundos')
    const milsegundos =  document.querySelector('.out-milesimos')
    const botoes = document.querySelector('.botoes')
    const listaMarcadores = document.querySelector('.marcas')
    apaga = apagaMarcador
    let marcadecorrido = [] 
    let listaMarcadoresSalvos= []
    let rodando = true
    let cor,botaoControle,marcaInicio,update,piscar = 0

    zera()
    updatelista()
}
Onload()