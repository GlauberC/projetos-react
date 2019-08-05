import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div>
            <h1>Home</h1>
            <div>
                <h2>Lista de profile para acessar</h2>
                <Link to = '/profile/0'>Profile 1</Link><br/><br/>
                <Link to = '/profile/1'>Profile 2</Link><br/><br/>
                <Link to = '/profile/2'>Profile 3</Link><br/><br/>
                <Link to = '/profile/3'>Profile 4</Link><br/><br/>
                <Link to = '/profile/4'>Profile 5</Link><br/><br/>
            </div>
        </div>
    )
}