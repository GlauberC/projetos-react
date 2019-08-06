import styled from 'styled-components'
import {Container} from './page'

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
`  

