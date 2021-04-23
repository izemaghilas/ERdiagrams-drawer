import { dia } from 'jointjs'
import React from 'react'

type ToolProps = {
    graph: dia.Graph
}

export default class DeleteDiagramTool extends React.Component<ToolProps, {}> {

    state = {
        delete: this.delete.bind(this)
    }

    private delete(): void {
        this.props.graph.clear() 
    }

    render() {
        return(
            <div className="delete-diagram-container">
                <div 
                    className="delete-diagram" 
                    title="clear paper"
                    onClick={this.state.delete}
                ></div>
            </div>
        )
    }
}