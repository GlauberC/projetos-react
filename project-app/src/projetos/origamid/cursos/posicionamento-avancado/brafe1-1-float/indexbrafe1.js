import React from 'react'

import './style.css'


import Header from './components/header'
import FotoMsg from './components/main/FotoMsg'
import DesenhoTituloDecriacao from './components/main/desenhoTituloDecriacao'
import Local from './components/main/local'
import Newsletter from './components/main/newsletter'
import Footer from  './components/footer'

import {Introducao, Sobre, Produtos, Locais, Assine} from './styles/mainStyle'
import {Container, Botao} from './styles/page'

export default () => (
    <div>
        <Header/>
        <main>
            <Introducao >
                <h1>Cafés com a cara<br/> do Brasil</h1>
                <p>Direto das fazendas de Minas Gerais</p>
            </Introducao>
            <Sobre>
                <Container>
                    <h2>Uma mistura de</h2>
                    <FotoMsg  src = {require('./assets/img/cafe-1.jpg')}msg = "amor"/>
                    <FotoMsg  src = {require('./assets/img/cafe-2.jpg')}msg = "perfeição"/>
                </Container>
                <p>O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. É servido tradicionalmente quente, mas também pode ser consumido gelado. Ele é um estimulante, por possuir cafeína - geralmente 80 a 140 mg para cada 207 ml dependendo do método de preparação</p>
            </Sobre>
            <Produtos>
                <Container>
                    <DesenhoTituloDecriacao color = '#492901' titulo = 'paulista' descricao = 'Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a consulta aos diversos militantes desafia a capacidade de equalização das condições financeiras e administrativas exigidas.'/>
                    <DesenhoTituloDecriacao color = '#c17139' alt = 'carioca' titulo = 'carioca' descricao = 'Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a consulta aos diversos militantes desafia a capacidade de equalização das condições financeiras e administrativas exigidas.'/>
                    <DesenhoTituloDecriacao color = '#d7a54d' alt = 'mineiro' titulo = 'mineiro' descricao = 'Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a consulta aos diversos militantes desafia a capacidade de equalização das condições financeiras e administrativas exigidas.'/>
                </Container>
                <Botao href = '#'>Saiba mais</Botao>
            </Produtos>
            <Locais>
                <Local src = {require('./assets/img/botafogo.jpg')} alt = 'Brafé Unidade Botafogo' titulo = 'Botafogo' texto = ' No entanto, não podemos esquecer que a contínua expansão de nossa atividade estimula a padronização do fluxo de informações.' btncontent = 'Ver Mapa'/>
                <Local src = {require('./assets/img/iguatemi.jpg')} alt = 'Brafé Unidade Iguatemi' titulo = 'Iguatemi' texto = ' No entanto, não podemos esquecer que a contínua expansão de nossa atividade estimula a padronização do fluxo de informações.' btncontent = 'Ver Mapa'/>
                <Local src = {require('./assets/img/mineirao.jpg')} alt = 'Brafé Unidade  Mineirão' titulo = 'Mineirão' texto = ' No entanto, não podemos esquecer que a contínua expansão de nossa atividade estimula a padronização do fluxo de informações.' btncontent = 'Ver Mapa'/>
            </Locais>
            <Assine>
                <Newsletter/>
            </Assine>
        </main>
        <Footer/>
    </div>
)



