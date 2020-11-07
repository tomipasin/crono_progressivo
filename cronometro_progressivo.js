
//crio uma variável x no escopo global. 
let x;
//e outra com o valor de start/stop atribuido como zero.
let startstop = 0;
//criamos uma função chamada startStop que vai acionar o processo do cronômetro progressivo. 
function startStop() {

  //aqui a variável que tinha o valor de 0 passa a ter atribuido o valor dela mais um
  startstop = startstop + 1;
  //uma condicional verifica se o valor dela é ideêntico a um
  if (startstop === 1) {
    //se for dá início ao cronômetro chamando a função start
    start();
    //também muda o texto do botão iniciar para parar
    document.getElementById("iniciar").innerHTML = "Parar";
    //aqui é verificada umas egunda condição: se o valor de startstop for 
    //idêntico a 2 (ou seja, se o cronômetro estiver rodando)
  } else if (startstop === 2) {
    //daí o valor do botão volta a ser iniciar. Então se tuy parar o cronômetro 
    //o botão vai te oferecer a chance de iniciar novamente.
    document.getElementById("iniciar").innerHTML = "Iniciar";
    //iniciando novamente o texto do botão muda e o valor de startstop passa a ser 0 novamente
    startstop = 0;
    //e é executada a funçã́o de parada do cronômetro.
    stop();
  }

}


//a função que inicia a contagem
function start() {
  //nada mais é do que definir o intervalo da variável x que criamos no escopo global
  //em um timer de dácimos de segundo, ou sej, o nosso cronômetro vai atualizar a cada décimo
  //de segundo nos dando essa precisão.
  x = setInterval(timer, 10);
  
} 



//a função que para o cronômetro simplesmente limpa o valor de x, assim tudo é "resetado".
function stop() {
  clearInterval(x);
} 

//aqui definimos as variáveis de tempo
let milisec = 0;
let sec = 0;
let min = 0;
let hour = 0;

//aqui outras variáveis que vão ser verificadas pela função de timer e serão usadas para saída
//dos dados.
let miliSecOut = 0;
let secOut = 0;
let minOut = 0;
let hourOut = 0;

//Aqui a função principal de timer. 
//nela, em resumo, vamos determinar valores para milisegundos, segundos, ninutos e hora. 
//Os valores serão verificados, acrescentados e checados em intervalos regulares 
//de centásimo de segundo e por fim os valores das variáveis de saída serão atualizados no
//html.
function timer() {
 
  //ela vai atribuir às variáveis criadas anteriormente os valores delas + o zero à 
  //esquerda, caso necessário. Quem adicionará este zero é a função checkTime.
  //aqui miliSecOut receberá o valor da checagem de tempo de agora com o parâmetro da variável milisec)
  //ou seja, em milésimos de segundo (1 segundo é 1000, logo 100 é um milésimo de segundo, 
  //10 e um centésimo de segundo e 1 e décimo de segundo.)
  miliSecOut = checkTime(milisec);
  //secOut da mesma forma...
  secOut = checkTime(sec);
  minOut = checkTime(min);
  hourOut = checkTime(hour);

  //aqui milisec terá valor dela atribuido de seu próprio valor em incrementos de 1 passo cada.
  milisec = ++milisec;

  //uma verificação condicional é feita e caso milisec serja idêntico a 100
  if (milisec === 100) {
    //o valor de milisec será atribuido em 0
    milisec = 0;
    //e sec será atribuido com o valor dele mesmo com incremento em passos de 1. 
    sec = ++sec;
  }

  //se sec for idêntico a 60 ele vai incrementando os minutos.
  if (sec == 60) {
    min = ++min;
    sec = 0;
  }

  //e com a hora da mesma forma que com os anteriores. 
  if (min == 60) {
    min = 0;
    hour = ++hour;

  }

  //aqui os valores são buscados no html e inseridos lá, oriúndos das let de saída. 
  document.getElementById("milisec").innerHTML = miliSecOut;
  document.getElementById("sec").innerHTML = secOut;
  document.getElementById("min").innerHTML = minOut;
  document.getElementById("hour").innerHTML = hourOut;

}


//aqui uma função que adiciona zero à esquerda dos números menores que 10, pra ficar bonito...rs
//a função é chamada com o parâmetro i (no caso milisec, sec, etc)
function checkTime(i) {
  //uma condicional é verificada pra saber se i é menor que 10
  if (i < 10) {
    //se for, i passa a ter o valor de 0i
    i = "0" + i;
  }
  //essa função, depois de adicionar o zero, retorna o i(com zero à esquerda)
  return i;
}

//Pra zerar o nosso cronômetro tem um botão que chama a função reset().
function reset() {
  //quando pressionado este botão ele zera os valores das var de milisec, sec, etc. 
  milisec = 0;
  sec = 0;
  min = 0
  hour = 0;
  //e também insere no html os 00 correspondentes. 
  document.getElementById("milisec").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("hour").innerHTML = "00";

}

