import { styled } from "styled-components"
import RenderAnswer from "./RenderAnswer"


export default function Footer({counter, status}){
    return (
        <DivFooter data-test="footer">
            <h1>{counter}/8 CONCLUÍDOS</h1>
            <ul>
                <RenderAnswer status={status} />
            </ul>
        </DivFooter>
    )
}

const DivFooter = styled.div`
    height: 70px;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 7px;
    h1{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
    ul {
        display: flex;
        flex-direction: row;
        gap: 10px;
        padding-top: 10px;
    }
`