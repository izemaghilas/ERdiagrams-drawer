/***
 * react component for drawer 
 */

import React from 'react'
import { FcAssistant } from 'react-icons/fc'
import { dia } from 'jointjs'

import renderPaper from '../controller/renderPaper'

import ToolsBar from './ToolsBar'
import UsageCard from './userGuide/UsageCard'

import './drawer.css'
import logo from './images/logoER.png'


export default class Drawer extends React.Component<{}, {paper: dia.Paper, showAssistantIcon: boolean, showUserGuide: boolean}> {

    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            paper: new dia.Paper({}),
            showAssistantIcon: false,
            showUserGuide: true
        }
    }
    componentDidMount() {
        let rendredPaper = renderPaper(document.getElementById("paper") as HTMLElement)
        this.setState({paper: rendredPaper})
    }
    closeUserGuide(){
        this.setState({showAssistantIcon: true, showUserGuide: false})
    }
    openUserGuide(){
        this.setState({showAssistantIcon: false, showUserGuide: true})
    }

    render() {
        return (
            <div className="drawer">
                <div className="drawer-header">
                    <div>
                        <img src={logo} alt="logo"/>
                        <h4>Entity Relationship Diagram</h4>
                    </div>
                    {this.state.showAssistantIcon?
                        <FcAssistant  
                            className="drawer-header-assistant-icon" 
                            title="assistant"
                            size={60}
                            onClick={this.openUserGuide.bind(this)}
                        />
                        : 
                        null
                    }
                    {this.state.showUserGuide?
                        <UsageCard closeUserGuide={this.closeUserGuide.bind(this)}/>
                        :
                        null
                    }
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