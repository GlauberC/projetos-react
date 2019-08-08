import React from 'react'
import MenuItem from './menuItem'

const pratos1 = [
    {key: 0, preco: "1.70", nome: "Ovos Mexidos"},
    {key: 1, preco: "2.70", nome: "Scones de Frutas"},
    {key: 2, preco: "3.70", nome: "Joelho de Queijo"},
    {key: 3, preco: "4.70", nome: "Presunto Cozido"},
    {key: 4, preco: "3.70", nome: "Coxinha de Frango"},
]
const pratos2 = [
    {key: 0, preco: "11.70", nome: "Penne com Queijo"},
    {key: 1, preco: "22.70", nome: "Feijoada"},
    {key: 2, preco: "43.70", nome: "Costela ao Barbecue"},
    {key: 3, preco: "41.70", nome: "Medalhão de Frango"},
    {key: 4, preco: "30.70", nome: "Coxinha de Frango"},
]

export default () => (
    <section className = "container menu">
        <h1 className = "grid-4 titulo">Menu</h1>
        <div className = "grid-7 offset-1">
            <MenuItem src = {require('../assets/prato-1.png')} alt = "Foto Prato 1" titulo = "Entrada" data = {pratos1}/>
            <MenuItem src = {require('../assets/prato-2.png')} alt = "Foto Prato 2" titulo = "Pratos Principais" data = {pratos2}/>
        </div>
    </section>
)