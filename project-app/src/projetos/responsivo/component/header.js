import React, {Component} from 'react'

import {Container, ContainerGrid, Box} from '../style/page'
import {Logo, Menu, MenuMobile} from '../style/header'
import {colors, sizes} from '../style/design'

export default class Header extends Component{
    state = {
        menu: false
    }
    toggleMenu = () => {
        this.setState({menu: !this.state.menu})
    }
    render(){
        return(
            <header>
                {this.state.menu? 
                    <MenuMobile>
                        <a className = 'close' onClick = {this.toggleMenu}/>
                    </MenuMobile>: 
                
                ''}
                <Container bgColor = {colors.type2} height = '100'>
                    <ContainerGrid>
                        <Box float = 'left'>
                            <Logo src={require('../assets/logo.png')}/>
                        </Box>
                        <Box float = 'right'>
                            <Menu>
                                <a onClick = {this.toggleMenu}><Box width = '50px' height = '50px'></Box></a>
                                <ul>
                                    <li>item1</li>
                                    <li>item2</li>
                                    <li>item3</li>
                                    <li>item4</li>
                                    <li>item5</li>
                                </ul>
                            </Menu>
                        </Box>
                    </ContainerGrid>
                </Container>
            </header>
        )
    }
}