import React, {Component} from 'react'
import {Container, Header, Main, Aside, SectionsContainer, Footer} from './style'

export default class Site extends Component{
    render(){
        return(
            <Container>
                <Header>
                    <h1>Cabecalho</h1>
                </Header>
                <Main>
                    <SectionsContainer>

                    </SectionsContainer>
                    <Aside>

                    </Aside>
                </Main>
                <Footer>
                    <p>Nenhum direito reservado</p>
                </Footer>

            </Container>
        )
    }
}