import React from 'react'

import {Title, Container, Quadrado, QuadradoMaior} from './style'

export default () => (
    <div>

        <Title>Oi titulo</Title>
        <Container>
            <p>Olá, esse é um texto com formatação pois está dentro do container</p>
        </Container>
        <p>Texto sem formatação</p>
        <Quadrado color = 'blue'/>
        <Quadrado color = 'green'/>
        <Quadrado color = 'red'/>

        <QuadradoMaior color = 'teal'>

        </QuadradoMaior>

    </div>
)