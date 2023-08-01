import React from 'react';


export default function Main (){
    return (
        <main>
            <h1>Kenneth Jakobsen</h1>
            <p>Frontend Developer</p>
            <div className='main--buttons'>
                <form target='_blank'>
                    <button type='submit' formAction="https://github.com/Kenneth-Jakobsen">
                    <i className="fa-brands fa-github fa-fw"></i>GitHub</button>
                </form>
            </div>
        </main>
    )
}