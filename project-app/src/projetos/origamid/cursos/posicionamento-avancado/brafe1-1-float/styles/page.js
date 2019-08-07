import styled from 'styled-components'

export const breakP = {
    mobile: 319,
    tablet: 739,
    pc: 959
    
}

export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;

    &::after, &::before{
        content: '';
        display: table;
        clear: both;
    }
    @media only screen and (max-width: ${breakP.pc}px) and (min-width: ${breakP.tablet+1}px){
        max-width: ${breakP.tablet-19}px;
    }
    @media only screen and (max-width: ${breakP.tablet}px){
        max-width: ${breakP.mobile-19}px;
    }
`
export const Botao = styled.a`
    width: 180px;
    border: 3px solid;
    color: #252525;
    text-decoration: none;
    display: block;
    font-size: 1.125em;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    padding: 15px 0;

`