function Onload(){
    function pegAtual(){
        const data = new Date(Date.now());
        return [data.getDay(),data.getDate(),data.getMonth(),data.getFullYear(),data.getHours(),data.getMinutes()]
    };
    function nomeDiaSemana(numerodia){
        switch (numerodia){ 
            case 0:
                return 'Domingo';
            case 1:
                return 'Segunda-feira';
            case 2:
                return 'Terça-feira';
            case 3:
                return 'Quarta-feira';
            case 4:
                return 'Quinta-feira';
            case 5:
                return 'Sexta-feira';
            case 6:
                return 'Sabado';
        }
    };
    function nomeMes(numerodia){
        switch (numerodia){ 
            case 0:
                return 'Janeiro';
            case 1:
                return 'Fevereiro';
            case 2:
                return 'Março';
            case 3:
                return 'Abril';
            case 4:
                return 'Maio';
            case 5:
                return 'Junho';
            case 6:
                return 'Julio';
            case 7:
                return 'Agosto';
            case 8:
                return 'Setembro';
            case 9:
                return 'Outubro';
            case 10:
                return 'Novembro';
            case 11:
                return 'Dezembro';

        }
    };
    const agora = pegAtual();
    agora[0] = nomeDiaSemana(agora[0]);
    agora[2] = nomeMes(agora[2]);
    const hora = agora[4] <= 9 ? `0${agora[4]}`:`${agora[4]}`;
    const minutos = agora[5]<=9 ? `0${agora[5]}`:`${agora[5]}`;

    const data = document.querySelector(".visor h4");
    const horas = document.querySelector(".visor h1")
    data.innerHTML = `${agora[0]}, ${agora[1]} de ${agora[2]} de ${agora[3]}`
    horas.innerHTML = `${hora}:${minutos}`
    

};

Onload()