function Onload(){
    function pegAtual(x){
        s = (60*60*3*1000) + x*1000
        const data = new Date(s);
        return data.toLocaleTimeString('pt-BR',{hour12: false})
    };
   function pegaSegundos(){
        const agora = new Date();
        return agora.getMilliseconds()
   }
    
   
    function sobeSegundo(b){
        segundos++;
        return pegAtual(b)
    }


    var segundos = 30
    let horas =  document.querySelector('.horas')
    setInterval(function(){horas.innerHTML = sobeSegundo(segundos)},1000)
    
        
 
    

 

}
Onload()