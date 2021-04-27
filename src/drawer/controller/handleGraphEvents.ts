import { dia } from "jointjs"
import DrawerShapesFactory from "../view/DrawerShapesFactory"
import TypesEnumeration from "../view/ShapesTypes"

import getElementsResizeHandler from "./strategyPattern/ElementsResizeHandler"
import getLabelChangeEventHandler from "./strategyPattern/LabelValueChangeEventHandler"
import resizeTableOnColumnRemoved from "./strategyPattern/resizeTableOnColumnRemoved"


function getTextWidth(label: dia.Element, paper: dia.Paper): number {
    let labelView = label.findView(paper)
    let LabelNode = labelView.findBySelector("label")[0]
    let width = LabelNode.getBoundingClientRect().width
    return width
}

const handleGraphEvents = (graph : dia.Graph, paper: dia.Paper): void=>{

    graph.on("change:LabelValue", function(inputElement: dia.Element, value: string){

        let position = inputElement.get("position") as {x: number; y: number}
        let height = inputElement.size().height
        let parent = inputElement.getParentCell() as dia.Element
        inputElement.remove()
        
        let label = DrawerShapesFactory.LABEL.getShape() as dia.Element
        label.set("position", position)
        label.attr("label/text", value)
        label.addTo(graph)
        parent.embed(label)
        
        let width = getTextWidth(label, paper)
        // +10 to center text
        label.size(width+10, height)

        let handler = getLabelChangeEventHandler(parent.get("type"))
        handler.handleEvent(parent, width)
    })

    graph.on("change:ColumnWidth", function(column: dia.Element, width: number){
        let parent = column.getParentCell() as dia.Element
        let handler = getElementsResizeHandler(parent.get("type"))
        handler.resizeElement(parent, width)
    })

    graph.on("change:RemoveColumn", function(table: dia.Element, column: dia.Element){
        
        let label = column.getEmbeddedCells().find(
            cell=>cell.get("type") === TypesEnumeration.LABEL_TYPE
        ) as dia.Element
        // +50 => remove column and pk width 
        let width = getTextWidth(label, paper) + 50 

        let widthState = table.get("widthState") as number[]
        console.log(widthState);
        
        if(width === widthState[widthState.length-1]){
            widthState.pop()
            resizeTableOnColumnRemoved(table, widthState[widthState.length-1])
        }

        column.remove()

    })
    
}

export default handleGraphEvents