import React, {Component} from 'react'
import FotoLink from './header/fotolink'
import {HeaderContainer, MenuContainer} from '../styles/headerStyle'

export default class Header extends Component{
    render(){
        return(
            <HeaderContainer>
                <MenuContainer>
                    <FotoLink src = {require('../assets/img/brafe.png')} alt = 'Brafé'/>
                    <nav>
                        <ul>
                            <li><a href = '#'>Sobre</a></li>
                            <li><a href = '#'>Produtos</a></li>
                            <li><a href = '#'>Portfólio</a></li>
                            <li><a href = '#'>Contato</a></li>
                        </ul>
                    </nav>
                </MenuContainer>
            </HeaderContainer>
        )
    }
}

