/***
 * react component for drawer 
 */

import React from 'react'

import renderPaper from './controller/renderPaper'
import './drawer.css'

export default class Drawer extends React.Component {
    
    componentDidMount() {
        renderPaper(document.getElementById("paper") as HTMLElement)
    }

    render() {
        return (
            <div className="drawer">
                <header>
                    <button>import</button>
                    <button>clear</button>
                </header>
                <main>
                    <div className="paper-container">
                        <div id="paper"></div>
                    </div> 
                </main>
            </div>
        )
    }
}