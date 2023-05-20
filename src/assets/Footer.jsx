import { styled } from "styled-components"


export default function Footer({counter}){
    return (
        <DivFooter>
            <h1>{counter}/8 CONCLUÍDOS</h1>
        </DivFooter>
    )
}

const DivFooter = styled.div`
    height: 70px;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
`