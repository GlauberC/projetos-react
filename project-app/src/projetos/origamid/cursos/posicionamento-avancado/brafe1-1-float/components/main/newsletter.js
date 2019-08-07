import React from 'react'
import { Container, breakP } from '../../styles/page';
import styled from 'styled-components'

export default props => (
    <AssineContainer>
        <div>
            <h2>Assine Nossa Newsletter</h2>
            <p>promoções e ventos mensais</p>
        </div>
        <form>
            <label>E-mail</label>
            <input type = 'text' placeholder='Digite seu e-mail'/>
            <button type = 'submit'>Enviar</button>
        </form>
    </AssineContainer>
)

const AssineContainer = styled(Container)`
    div{
        width: 460px;
        margin: 0 10px;
        float: left;
        h2{
            font-size: 2.25em;
        }
        p{
            font-size: 1.5em;
            font-style: italic;
        }
    }
    form{
        width: 460px;
        margin: 10px 10px 0 10px;
        float: left;

        label{
            display: none;
        }
        input{
            width: 320px;
            border: 3px solid #252525;
            background: none;
            font-size: 1.5em;
            font-style: italic;
            font-family: Georgia, 'Times New Roman', Times, serif;
            padding: 10px;
            float: left;
        }
        button{
            background: #252525;
            border: none;
            font-family: Georgia, 'Times New Roman', Times, serif;
            text-transform: uppercase;
            font-size: 1.5em;
            width: 140px;
            padding: 13px 0;
            color: #fff;
            cursor: pointer;            
        }
    }


    @media only screen and (max-width: ${breakP.pc}px) and (min-width: ${breakP.tablet+1}px){
        div, form, input{
            width: 340px;
        }        
    }

    @media only screen and (max-width: ${breakP.tablet}px){
        div, form, input{
            width: 340px;
        }   margin: 10px 0 0 0;
    }
`
