import setaVirar from "./imgs/seta_virar.png"
import setaPlay from "./imgs/seta_play.png"
import quase from "./imgs/icone_quase.png"
import erro from "./imgs/icone_erro.png"
import certo from "./imgs/icone_certo.png"
import logo from "./imgs/logo.png"


export const cards = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ]


export const imgs = [
  { setaVirar: setaVirar },
  { setaPlay: setaPlay },
  { quase: quase, partIcon: "partial-icon", certo: certo, zapIcon: "zap-icon", erro: erro, noIcon: "no-icon" },
  { logo: logo }
];
