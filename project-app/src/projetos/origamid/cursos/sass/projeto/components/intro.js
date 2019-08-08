import React from 'react'

export default () => (
    <div class = 'container intro'>
        <div className = "grid-5">
            <img className = "logo" src = {require('../assets/lescone.png')} alt = "Le Scone"/>
            <div className = "intro-info">
                <p>
                    De Seg. à Sab. <span className = 'aberto'></span><br/>
                    das 07:00 ás 18:00h
                </p>
                <p>
                    Praia de Botafogo, 300<br/> Rio de Janeiro - RJ
                </p>
            </div>
            <p className = "intro-telefone">+55 021 2412-3333</p>
        </div>
        <div className = "grid-7">
            <img className = "intro-foto" src = {require('../assets/foto.jpg')} alt = "Foto de Le Scone"/>
        </div>
    </div>
)