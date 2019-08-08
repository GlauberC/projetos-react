import React from 'react'
import styled from 'styled-components'
import { Container, breakP } from '../../styles/page';

export default props => (
    <LocalBlock>
        <img src = {props.src} alt = {props.alt}/>
        <div>
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
            <a href = '#'>{props.btncontent}</a>
        </div>
    </LocalBlock>
)

const LocalBlock = styled.div`
    /* padding: 60px auto; */
    clear: both;
    padding: 20px 0;
    margin: 20px auto; 
    
    img{
        width: 460px;
        display: block;
        float: left;
        margin: 0 10px;
    }
    div {
        width: 460px;
        float: left;
        margin: 0 10px;
        
        h2{
            font-size: 2.25em;
            margin-bottom: 20px
        }
        p{
            font-size: 1.125em;
            line-height: 1.4em;
            max-width: 320px;
            margin-bottom: 40px;
        }
        a{
            font-size: 1.125em;
            text-transform: uppercase;
            text-decoration: none;
            border: 3px solid;
            color: #252525;
            padding: 10px 20px;

            &:hover{
                opacity: .7;
            }
        }
    }

    &::before, &::after{
        clear: both;
        content: '';
        display: table;
    }

    @media only screen and (max-width: ${breakP.pc}px) and (min-width: ${breakP.tablet+1}px){
        
        width: 340px;

        img,div{
            width: 340px;
        }
    }

    @media only screen and (max-width: ${breakP.tablet}px){
        width: 300px;
        margin: 0px;
        img, div{
            max-width: 300px;
            margin: 0px;
        }
    }


    
`