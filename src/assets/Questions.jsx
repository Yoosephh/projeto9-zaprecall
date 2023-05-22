import { styled } from "styled-components";
import  { cards, imgs } from "./cards";
import React from "react";

export default function Questions({ setCounter, setStatus, status }) {
  const {setaPlay, setaVirar} = imgs
  const qstn = cards.map((item, index) => {
    const pergunta = index + 1;
    
    return (
      <div data-test="flashcard" key={index}>
        <h1 data-test="flashcard-text">Pergunta {pergunta}</h1>
        <button data-test="play-btn" onClick={() => displayQstn(item, index)}>
          <img src={setaPlay} alt="start" />
        </button>
      </div>
    );
  });
  const [GameState, setGameState] = React.useState(qstn);

  function displayQstn(item, index) {
    setGameState((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = (
        <div data-test="flashcard" className="divPergunta" key={index}>
          <h1 data-test="flashcard-text" className="pergunta">{item.question}</h1>
          <button data-test="turn-btn" className="revela" onClick={() => displayAnswer(item, index)}>
            <img src={setaVirar} alt="start" />
          </button>
        </div>
      );
      return updatedState;
    });
  }

  function displayAnswer(item, index) {
    setGameState((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = (
        <div data-test="flashcard" className="divResposta" key={index}>
          <h1 data-test="flashcard-text" className="resposta">{item.answer}</h1>
          <div>
            <button 
              data-test="no-btn"
              onClick={() => HandleAnswer("erro", index)}
              className="errei"
            >
              Não lembrei
            </button>
            <button
              data-test="partial-btn"
              onClick={() => HandleAnswer("quase", index)}
              className="quase"
            >
              Quase não lembrei
            </button>
            <button
              data-test="zap-btn"
              onClick={() => HandleAnswer("certo", index)}
              className="zap"
            >
              Zap!
            </button>
          </div>
        </div>
      );
      return updatedState;
    });
  }

  function HandleAnswer(answer, index) {
    setCounter((prevCount) => prevCount + 1);
    setGameState((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = (
        <div data-test="flashcard" className="divFinal" key={index}>
          <h1 data-test="flashcard-text" className={answer}>Pergunta {index + 1}</h1>
          <img src={imgs[answer]} data-test={answer === "certo" ? "zap-icon" : answer === "erro" ? "no-icon" : "partial-icon"} alt={answer} />
        </div>
      )
      return updatedState;
    });
    setStatus((prevState) => {
      const updatedState = [...prevState];
      updatedState.push({image:imgs[answer], data_test: answer === "certo" ? "zap-icon" : answer === "erro" ? "no-icon" : "partial-icon"})
      return updatedState;
    })
  }
  
  return <DivQstn>{GameState}</DivQstn>;
}

const DivQstn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  div {
    background: #ffffff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    height: 65px;
    align-items: center;
    font-family: "Recursive";
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
  button {
    border: none;
    color: #ffffff;
    background-color: #ffffff;
  }
  .divPergunta {
    height: 140px;
    background: #ffffd5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: start;
    color: #333333;
    img {
      width: 30px;
      height: 17px;
      background: #ffffd5;
    }
    button {
      border: none;
      color: #ffffd5;
      background-color: #ffffd5;
    }
    .pergunta {
      width: 100%;
      padding: 10px;
      align-self: flex-start;
    }
    .revela {
      padding: 10px;
      align-self: flex-end;
    }
  }
  .divResposta {
    display: flex;
    flex-direction: column;
    height: 140px;
    background: #ffffd5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: "Recursive";
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
      background: #ffffd5;
    }
    button {
      font-family: "Recursive";
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
      background: #ff3030;
    }
    .zap {
      background: #2fbe34;
    }
    .quase {
      background: #ff922e;
    }
  }
  .divFinal {
    h1 {
      text-decoration: line-through;
    }
    .erro {
      color: #ff3030;
    }
    .certo {
      color: #2fbe34;
    }
    .quase {
      color: #ff922e;
    }
  }
`;
