import React from 'react'
import styled from 'styled-components'

export default props => (
    <Link href = '#'>
         <img src={props.src} alt = {props.alt}/>
    </Link>
)

const Link = styled.a`
    display: block;
    float: left;
    margin-left: 10px;
`