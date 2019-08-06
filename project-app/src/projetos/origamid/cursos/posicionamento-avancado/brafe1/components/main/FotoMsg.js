import React from 'react'
import styled from 'styled-components'

export default props => (
    <FotoBlock>
        <img src = {props.src}/>
        <h3>{props.msg}</h3>
    </FotoBlock>
)
const FotoBlock = styled.div`
    width: 460px;
    float: left;
    margin: 0 10px;

    img{
        display: block;
        max-width: 100%;
    }
    h3{
        font-size: 2.25em;
        background: #252525;
        width: 220px;
        color: #fff;
        line-height: 1em;
        font-style: italic;
        font-weight: normal;
        text-align: center;
        padding: 5px 0 10px 0;
        top: -25px;
        position: relative;
    }
`