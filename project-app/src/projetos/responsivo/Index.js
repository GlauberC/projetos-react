import React, {Component} from 'react'
import {Container} from './style/page'
import {colors} from './style/design'
import Header from './component//header'
import './index.css'

export default class Index extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Container bgColor = {colors.type3} height = '2000'>
                </Container>
            </div>
        )
    }
}