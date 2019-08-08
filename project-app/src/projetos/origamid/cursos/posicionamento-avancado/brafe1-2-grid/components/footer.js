import React from 'react'
import { Container, breakP } from '../styles/page';
import styled from 'styled-components'

export default () => (
    <Footer>
        <Container>
            <p>Este é um projeto da Oriamid. Mais em origamid.com<br/> Praia de Botafogo, 300, 5° andar - Botafogo - Rio de Janeiro</p>
            <img src = {require('../assets/img/brafe.png')} alt = "Brafé"/>
        </Container>
    </Footer>  
)

const Footer = styled.footer`
    background: #d6d3c8;
    padding: 40px 0;

    p{
        float: left;
        margin: 0 10px;
        font-size: 1.125em;
        line-height: 1.4em;
    }
    img{
        float: right;
        margin: 0 10px;
        display: block;
    }

    @media only screen and (max-width: ${breakP.tablet}px){
        p{
            float: none;
            margin: 0px;
        }
        img{
            float: none;
            margin: 20px auto;
        }
    }
`