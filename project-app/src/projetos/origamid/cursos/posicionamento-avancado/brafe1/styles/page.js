import styled from 'styled-components'

export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;

    &::after, &::before{
        content: '';
        display: table;
        clear: both;
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