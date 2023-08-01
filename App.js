import React from 'react'
import Main from './Components/Main.js'
import About from './Components/About.js'


export default function App (){
    return (
        <div className="card">
            <img src='/images/me.jpg' />
            <Main />
            <About />
        </div>
    )
    
}