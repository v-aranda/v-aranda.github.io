function Onload(){
    function previneReload(reload){
        reload.preventDefault()
    };
    // cronometro
    function pegAtual(marco, passado=0){
        milisegundosContados =passado + (Date.now()-marco)
        const tempo = new Date( milisegundosContados);
        let milisegundos = tempo.getMilliseconds()
        return tempo.toLocaleTimeString('pt-BR',{minute:"2-digit",second:"2-digit"}) + `:${('000'+milisegundos).slice(-3)}`
    };  
    function setRelogioZerado(){
        horas.innerHTML = pegAtual(Date.now())
        botoes.innerHTML = '<button class="inicia">COMEÇAR</button>'
        botaoInicia =  document.querySelector('.inicia')
        botaoInicia.addEventListener('click', iniciaContagem)
    }
    function setRelogioContando(){
        botoes.innerHTML = '<button class="continua">CONTINUAR</button> <button class="para">PARAR</button> <button class="zera">ZERAR</button>'
        let botaoContinua = document.querySelector('.continua')
        let botaoPara =  document.querySelector('.para')
        let botaoZera =  document.querySelector('.zera')

        botaoContinua.addEventListener('click', continua)
        botaoPara.addEventListener('click',marcaContagem)
        botaoZera.addEventListener('click',zera) 
    }
    function pisca(){  
        const styleDocument = getComputedStyle(document.body);
        if (cor){
            horas.style.color = 'rgb(25, 252, 38)'
            cor = false
        }else{
            horas.style.color = 'rgb(0,0,0)'
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
        horas.style.color = '#19fc26'
        update = setInterval(function(){horas.innerHTML = pegAtual(a,b)},1)
    }
    
    
    function marcaContagem(){
        relogioPara()
        marcaDecorrido.unshift(milisegundosContados)
        console.log(marcaDecorrido[0])
    };
    function continua(){
        retomaContagem = Date.now()
        relogioConta(retomaContagem, marcaDecorrido[0])
           
    };
    function zera(){
        relogioPara()
        marcaDecorrido = []
        setRelogioZerado()
        relogioPisca()
    };
    function iniciaContagem(){
        setRelogioContando()  
        marcaInicio = Date.now();
        relogioConta(marcaInicio,0);
    }



    const horas =  document.querySelector('.horas')
    const botoes = document.querySelector('.botoes')
    document.addEventListener('submit',previneReload)
    
    let marcaDecorrido = []
    let cor,marcaInicio,update,piscar = 0
    zera()
    

 

}
Onload()