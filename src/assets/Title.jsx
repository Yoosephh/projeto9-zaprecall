import { styled } from "styled-components"
import { imgs } from "./cards"

export default function Title() {
    return (
        <TitleContent>
            <img src={imgs.logo} alt="logo"/>
            <h1>ZapRecall</h1>
        </TitleContent>
    )
}

const TitleContent = styled.div `
display: flex;
    img {
        width: 52px;
        height: 60px;
    }
    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.012em;
        color: #FFFFFF;
        transform: rotate(0.58deg);
    }
`