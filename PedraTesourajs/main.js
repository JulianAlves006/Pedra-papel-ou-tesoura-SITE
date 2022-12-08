const form = document.querySelector("#formulario");
var ganhou = 0;
var perdeu = 0;
var empate = 0;
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputEscolha = e.target.querySelector('#escolha');

    const bot = Math.floor(Math.random() * 3 + 1);

    const escolha = Number(inputEscolha.value);

    const result = getResultado(escolha, bot);
    if (result == 'Empate'){
        empate = empate + 1;
    }
    if (result == 'Perdeu'){
        perdeu = perdeu + 1;
    }
    if (result == 'Ganhou'){
        ganhou = ganhou + 1;
    }
    if(escolha <= 3 && escolha > 0){
    const msg = `Você escolheu: ${escolha} O bot escolheu: ${bot}. Resultado: ${result} <p>Você ganhou: ${ganhou};   Perdeu: ${perdeu};   Empatou: ${empate}</p>`;

    setResultado(msg, true);
    }
    else{
        const msg = `O número ${escolha} é invalido!!`;
        setResultado(msg, false)
    }
});

function getResultado(escolha, bot){ 
    if (escolha === bot){
        return 'Empate';
    }
    if(escolha == 1){
        if (bot == 2){
            return 'Perdeu';
        }
        if (bot == 3){
            return 'Ganhou';
        }
    }
    if(escolha == 2){
        if(bot == 1){
            return 'Ganhou';
        }
        if(bot == 3){
            return 'Perdeu';
        }
    }
    if(escolha == 3){
        if(bot == 1){
            return 'Perdeu';
        }
        if(bot == 2){
            return 'Ganhou';
        }
    }
}

function criaP(className){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';

    const p = criaP();

    if(isValid){
        p.classList.add('paragrafo-resultado');
    }
    else{
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}