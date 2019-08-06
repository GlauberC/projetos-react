import React from 'react'
import styled from 'styled-components'

export default props => (
    <FotoBlock>
        <img src = {props.src} alt = {props.alt}/>
        <h3>{props.titulo}</h3>
        <p>{props.texto}</p>
        <a>{props.btncontent}</a>
    </FotoBlock>
)

const FotoBlock = styled.div`
    
`