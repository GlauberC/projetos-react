import styled from 'styled-components'
import { Container, Botao } from './page';

export const Introducao = styled.section`
    background: url(${require('../assets/img/bg-intro.jpg')}) no-repeat center center;
    background-size: cover; /* Sempre 100% */
    padding: 150px 0;
    text-align: center;
    color: #fff;

    h1{
        text-transform: uppercase;
        font-size: 3em;

        &::after{
            content: '';
            display: block;
            width: 20px;
            height: 4px;
            background-color: #fff;
            margin: 10px auto;
        }
    }
    
    p{
        font-style: italic;
        font-size: 1.125em;
    }
    
`


export const Sobre = styled.section`
    padding: 60px 0;

    ${Container}{
        h2{
            text-align: center;
            font-size: 2.25em;
            margin-bottom: 60px;
        }
    }
    p{
        font-size: 1.125em;
        line-height: 1.4em;
        font-style: italic;
        text-align: center;
        margin: 20px auto;
        max-width: 460px;
    }
`

export const Produtos = styled.section`
    background: #e7e4d8;
    padding: 60px 0;
    border-top: 3px solid #d6d3c8;
    border-bottom: 3px solid #d6d3c8;
    ${Botao}{
        margin: 20px auto;

        &:hover{
            opacity: .5;
        }
    }
`

export const Locais = styled.section`
    max-width: 960px;
    margin: 0 auto;
    padding: 60px 0;
`

export const Assine = styled.section`
    background: #e7e4d8;
    padding: 30px 0;

`