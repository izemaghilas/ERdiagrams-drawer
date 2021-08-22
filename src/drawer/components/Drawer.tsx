/***
 * react component for drawer 
 */

import React from 'react'
import { dia } from 'jointjs'

import renderPaper from '../controller/renderPaper'

import ToolsBar from './ToolsBar'

import './drawer.css'
import logo from './images/logoER.png'


export default class Drawer extends React.Component<{}, {paper: dia.Paper}> {
    
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            paper: new dia.Paper({})
        }
    }
    componentDidMount() {
        let rendredPaper = renderPaper(document.getElementById("paper") as HTMLElement)
        this.setState({paper: rendredPaper})
    }

    render() {
        return (
            <div className="drawer">
                <div className="drawer-header">
                    <div>
                        <img src={logo} alt="logo"/>
                        <h4>Entity Relationship Diagram</h4>
                    </div>
                </div>
                <ToolsBar paper={this.state.paper}/>
                <main>
                    <div className="paper-container">
                        <div id="paper"></div>
                    </div> 
                </main>
            </div>
        )
    }
}