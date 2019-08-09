import React from 'react'

export default () => (
    <section className = "container contato">
        <h1 className = "grid-4 titulo">Contato</h1>
        <div className = "grid-7 offset-1">
            <form>
                <label>Nome</label>
                <input class = "text" type = "text"/>
                <div className = "row">
                    <div className = "grid-7">
                        <label>E-mail</label>
                        <input class = "text" type = "text"/>
                    </div>
                    <div className = "grid-5">
                        <label>Telefone</label>
                        <input class = "text" type = "text"/>
                    </div>
                </div>
                <label>Mensagem</label>
                <textarea></textarea>
                <input className = "button" type = "button" value = "enviar"/>
            </form>
            <div className = "contato-info">
                <p>contato@lescone.com ////</p>
                <p>+55 021 2412-3333 ////</p>
            </div>
            <a href = "#" className = "contato-mapa">
                <img src = {require('../assets/map.png')} alt = "Como chegar em Le Scone"/>
            </a>
        </div>
    </section>
)