import React from 'react'
import {Container, ImgContainer} from '../style/page'
import {colors} from '../style/design'
import Navbar from '../components/navbar'


export default () => (
    <Container bgColor = {colors.tertiary} height = '3282'>
        <header>
            <Navbar/>
            <ImgContainer height = '408' url = {require('../assets/img/home/bg-intro.png')}>
            
            </ImgContainer>
        </header>
    </Container>
)
