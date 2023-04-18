function Onload(){
    function pegAtual(){
        const data = new Date();
        return data.toLocaleTimeString('pt-BR',{hour12: false})
    };
    
   
    function sobeSegundo(){

        return pegAtual()
    }

    let horas =  document.querySelector('.horas')
    setInterval(function(){horas.innerHTML = sobeSegundo()},1000)
    
    
}
Onload()