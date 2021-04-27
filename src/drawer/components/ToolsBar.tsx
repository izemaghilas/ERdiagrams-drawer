import { dia } from 'jointjs'
import React from 'react'

import * as tools from './tools'

import './toolsbar.css'

function Separator() {
    return (
        <div className="tools-seperator"></div>
    )
}

type ToolsBarProps={
    paper: dia.Paper
}
export default class ToolsBar extends React.Component<ToolsBarProps, {}> {

    render() {
        return(
            <div className="tools-bar">
                <tools.DeleteDiagramTool graph={this.props.paper.model}/>
                <Separator />
                <tools.ExportDiagramTool paper={this.props.paper}/>
                <Separator />
                <tools.GitHubRepoTool />
            </div>
        )
    }
}