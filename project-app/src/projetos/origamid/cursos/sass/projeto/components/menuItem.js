import React from 'react'
export default props => (
    <div className = "menu-item">
        <img src = {props.src} alt = {props.alt}/>
        <h2>{props.titulo}</h2>
        <ul>
            {props.data.map(item => (
                <li key = {item.key}><span>{item.preco}</span>{item.nome}</li>
            ))}
        </ul>
    </div>
)