import { dia } from "jointjs"

import TypesEnumeration from "../view/ShapesTypes"
import renderInputElement from "./renderInputElement"
import renderTable from "./renderTable"

import getPointerClickonElementHandler from './strategyPattern/PointerClickEventHandlerStrategy'

const handlePaperEvents = (paper: dia.Paper, graph: dia.Graph): void=>{
    paper.on("blank:pointerdblclick", function(evt, x, y): void{
        renderTable(graph, {x: x, y: y})
    })

    paper.on("element:pointerdblclick", function(cellView: dia.CellView, evt: dia.Event, x, y): void{

        if(cellView.model.get("type") === TypesEnumeration.LABEL_TYPE){
            renderInputElement(cellView.model, graph, paper)
        }
    })

    
    paper.on("element:pointerclick", function(cellView: dia.CellView, evt: dia.Event, x, y): void{
        let pointerClickHandler =  getPointerClickonElementHandler(cellView.model.get("type"))
        try {
            pointerClickHandler.handleEvent(cellView)   
        } catch (error) {
            console.log("Unknow Handler ", error);
        }

        /*
        if(cellView.model.get("type") === TypesEnumeration.ADD_COLUMN_TYPE){
            renderColumn(cellView.model, graph)
        }
        if(cellView.model.get("type") === TypesEnumeration.REMOVE_COLUMN_TYPE){
            removeColumnFromTable(cellView.model)
        }
        if(cellView.model.get("type") === TypesEnumeration.LABEL_TYPE){
            let removeTools = new elementTools.Remove()
            let b = new elementTools.Boundary()
            let a = new elementTools.Button()
            let toolsView = new dia.ToolsView({
                name: '',
                tools: [removeTools, b, a],
            })
            cellView.addTools(toolsView)
        }
        */

    })
    
    
}

export default handlePaperEvents