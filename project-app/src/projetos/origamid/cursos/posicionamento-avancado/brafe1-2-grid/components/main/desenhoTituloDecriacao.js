import React, { Component } from 'react'
import styled from 'styled-components'
import {breakP} from '../../styles/page'

export default class DesenhoTituloDecriacao extends Component {

    Desenho = styled.div`
        display: block;
        width: 100px;
        height: 100px;
        background-color: ${this.props.color};
        border-radius: 50%;
        margin: 20px auto;

        box-shadow: 0 0 0 5px #e7e4d8, 0 0 0 15px ${this.props.color} ;
    `
    render(){
        return(
            <Produto>
                <this.Desenho/>
                <h2>{this.props.titulo}</h2>
                <p>{this.props.descricao}</p>
            </Produto>
        )
    }
}

const Produto = styled.div`
    width: 300px;
    float: left;
    margin: 0 10px 20px 10px;
    h2{
        text-align: center;
        font-size: 2.25em;
        margin-bottom: 20px;
        text-transform: capitalize;
    }
    p{
        font-size: 0.875em;
        line-height: 1.4em;
    }

    @media only screen and (max-width: ${breakP.pc}px) and (min-width: ${breakP.tablet+1}px){
        width: 220px;
    }

    @media only screen and (max-width: ${breakP.tablet}px){
        width: 300px;
        margin: 0 auto 20px auto;
    }
`
