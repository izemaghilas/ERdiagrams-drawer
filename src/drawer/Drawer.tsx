/***
 * react component for drawer 
 */

import React from 'react'

export default class Drawer extends React.Component {
    
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