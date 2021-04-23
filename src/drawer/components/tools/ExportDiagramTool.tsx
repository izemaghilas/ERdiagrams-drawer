import { dia, util } from 'jointjs'
import React from 'react'

type ToolProps = {
    paper: dia.Paper
}

export default class ExportDiagramTool extends React.Component<ToolProps, {}> {

    state = {
        export: this.export.bind(this)
    }

    private export(): void {
        let svgNode = document.querySelector("svg") as SVGElement
        let svgNodeClone = svgNode.cloneNode(true) as SVGElement
        let paperArea = this.props.paper.getArea()
        
        svgNodeClone.setAttribute("width", ""+paperArea.width)
        svgNodeClone.setAttribute("height", ""+paperArea.height)
        
        let svgNodeCloneString = (new XMLSerializer()).serializeToString(svgNodeClone)
        let blob = new Blob([svgNodeCloneString], {type: "image/svg+xml"})
        let url = URL.createObjectURL(blob)
        
        let canvas = document.createElement("canvas")
        canvas.width = paperArea.width
        canvas.height = paperArea.height
        let canvasContext = canvas.getContext("2d")

        let image = new Image()
        image.onload = function() {
            canvasContext?.drawImage(image, 0, 0, paperArea.width, paperArea.height)
            util.downloadDataUri(canvas.toDataURL(), "diagram.png")
            URL.revokeObjectURL(url)
        }
        image.src = url
    }

    render() {
        return (
            <div className="export-diagram-container">
                <div 
                    className="export-diagram" 
                    title="export diagram as png"
                    onClick = {this.state.export}
                ></div>
            </div>
        )
    }
}