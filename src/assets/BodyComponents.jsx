import { styled } from "styled-components";
import Questions from "./Questions";
import Title from "./Title";


export default function BodyComponents({setCounter, counter}) {
    return(
        <BodyComponent>
            <Title />
            <Questions setCounter={setCounter} counter={counter}/>
        </BodyComponent>
    )
}

const BodyComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #FB6B6B;
    height: calc(100vh - 80px);
    gap:60px;
`