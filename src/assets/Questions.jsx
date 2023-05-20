import { styled } from "styled-components"
import cards from "./cards"
import React from "react"


export default function Questions ({setCounter, counter}) {
    const qstn = cards.map((item, index) => {
        const pergunta = index + 1

        return (
            <div key={index}>
                <h1>Pergunta {pergunta}</h1>
                <button onClick={() => displayQstn(item, index)}><img src="./public/assets/seta_play.png" alt="start" /></button>
            </div>
        )
    })
    const [GameState, setGameState] = React.useState(qstn)
    
    
    function displayQstn(item, index){
        const qstnBox = [...GameState]
        qstnBox[index] = (
        <div className="divPergunta" key={index}>
            <h1 className="pergunta">{item.question}</h1>
            <button className="revela" onClick={() => displayAnswer(item, index)}>
                <img src="./public/assets/seta_virar.png" alt="start" />
            </button>
        </div>
        )
        setGameState(qstnBox)
    }

    function displayAnswer(item, index){
        const asnwerBox = [...GameState]
        asnwerBox[index] = (
            <div className="divResposta" key={index}>
                <h1 className="resposta">{item.answer}</h1>
                <div>
                    <button onClick={() => HandleAnswer("erro", index)} className="errei">Não lembrei</button>
                    <button onClick={() => HandleAnswer("quase", index)} className="quase">Quase não lembrei</button>
                    <button onClick={() => HandleAnswer("certo", index)} className="zap">Zap!</button>
                </div>
            </div>
        )
        setGameState(asnwerBox)
    }

    function HandleAnswer(answer, index) {
        const divFinal = [...GameState];
        divFinal[index] = (
        <div key={index}>
            <h1>Pergunta {index + 1}</h1>
            <img src={`./public/assets/icone_${answer}.png`} alt={answer} />
        </div>
        );
        let contador = counter;
        contador += 1
        setCounter(contador);
        setGameState(divFinal);
    }

    console.log(GameState)
    return (
        <DivQstn>
            {GameState}
        </DivQstn>
    )

}

const DivQstn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    div{
        background: #FFFFFF;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        width: 300px;
        display: flex;
        justify-content: space-between;
        height: 65px;
        align-items: center;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        padding-left: 10px;
        padding-right: 10px;
        color: #333333;
    }
    img {
        width: 20px;
        height: 23px;
    }
    button{
        border: none;
        color: #FFFFFF;
        background-color: #FFFFFF;
    }
    .divPergunta{
        height: 140px;
        background: #FFFFD5;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: start;
        color: #333333;
        img{
            width: 30px;
            height: 17px;
            background: #FFFFD5;
        }
        button {
            border: none;
            color: #FFFFD5;
            background-color:#FFFFD5;
        }
        .pergunta{
            width: 100%;
            padding: 10px;
            align-self: flex-start;
        }
        .revela{
            padding: 10px;
            align-self: flex-end;
        }
    }
    .divResposta{
        display: flex;
        flex-direction: column;
        height: 140px;
        background: #FFFFD5;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        padding-top: 10px;
        div {
            display: flex;
            flex-direction: row;
            text-align: center;
            background: #FFFFD5;
        }
        button {
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            display: flex;
            align-items: center;
            color: white;
            border-radius: 5px;
            width: 85px;
            height: 40px;
            justify-content: center;
        }
        .errei {
            background: #FF3030;
        }
        .zap {
            background: #2FBE34;
        }
        .quase {
            background: #FF922E;
        }
    }
`