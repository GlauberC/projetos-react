import styled from 'styled-components'
import {sizes, colors} from './design'


export const Logo = styled.img`
        width: 64px;
        height: 64px;
        margin: 18px;
`
export const Menu = styled.nav`
    @media screen and (max-width: ${sizes.tablet}){
        background-image: url(${require('../assets/menu.png')});
        width: 50px;
        height: 50px;
        margin: 26px;
        a{
            cursor: pointer;
        }
        ul{
            display: none;
        }

    }
    @media screen and (min-width: ${sizes.tablet}){
        a{
            display: none;
        }
        ul{
            margin-top: 40px;
            li{
                display: inline;
                padding: 10px;
                margin: 10px;
                font-size: 20px;
            }
        }
    }
`

export const MenuMobile = styled.div`
    @media screen and (max-width: ${sizes.tablet}){
        position: absolute;
        width: 100%;
        height: 100px;
        top: 100px;
        right: 0px;
        background-color: ${colors.type1};
        ul{
            li{
                display: inline;
            }
        }
    }
`