const form = document.querySelector("#formulario");
var ganhou = 0;
var perdeu = 0;
var empate = 0;
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputEscolha = e.target.querySelector('#escolha');
    const bot = Math.floor(Math.random() * 3 + 1);
    const escolha = Number(inputEscolha.value);
    const escolhai = inputEscolha.value;
    const result = getResultado(escolha, bot);

    var escolhaFormatada;
    var botFormatado;

    if(escolha == 1){
        escolhaFormatada = 'Pedra';
    }
    if(escolha == 2){
        escolhaFormatada = 'Papel';
    }
    if(escolha == 3){
        escolhaFormatada = 'Tesoura'
    }


    if(bot == 1){
        botFormatado = 'Pedra';
    }
    if(bot == 2){
        botFormatado = 'Papel';
    }
    if(bot == 3){
        botFormatado = 'Tesoura'
    }


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
    const msg = `Você escolheu: ${escolhaFormatada} O bot escolheu: ${botFormatado}. Resultado: ${result}`;
    const conta = `Ganhou: ${ganhou} vez(es); Perdeu: ${perdeu} vez(es); Empatou: ${empate} vez(es)`;

    setResultado(msg, true);
    setContagem(conta);
    }
    else{
        const msg = `${escolhai} é invalido!!`;
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

function setContagem(msg){
    const contagem = document.querySelector("#contagem");
    contagem.innerHTML = '';

    const p = criaP();

    p.innerHTML = msg;
    contagem.appendChild(p);
}
