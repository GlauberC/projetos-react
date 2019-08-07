import styled from 'styled-components'
import {Container, breakP} from './page'

export const HeaderContainer = styled.header`
    background-color: #252525;
    padding: 20px 0;
`

export const MenuContainer = styled(Container)`

    nav{
        float: right;
        margin-right: 10px;

        ul{
            li{
                display: inline-block;

                a{
                    display: block;
                    padding: 10px;
                    text-decoration: none;
                    color: #ffffff;
                    font-size: 1.125em;

                    &:hover{
                        opacity: 0.7;
                    }
                }
            }
        }
    }


    @media only screen and (max-width: ${breakP.tablet}px){
        text-align: center;
        max-width: 360px;
        nav{
            float: none;
            clear: both;
            /* Não foi ajustado os botoes do menu */
        }
        &>a{
            float: none;
            margin: 0px auto 20px auto;
        }

    }


`  

