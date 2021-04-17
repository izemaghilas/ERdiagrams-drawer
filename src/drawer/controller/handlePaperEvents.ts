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
            console.log("Undefined Handler ", error);
        }
    })
    paper.on("link:mouseenter", function(relationView: dia.LinkView){
        let relationRemoveButton = relationView.findLabelNode(0, "remove") as SVGElement
        relationRemoveButton.style.visibility ='visible'
    })
    paper.on("link:mouseleave", function(relationView: dia.LinkView){
        let linkRemoveButton = relationView.findLabelNode(0, "remove") as SVGElement
        linkRemoveButton.style.visibility ='hidden'
    })

    // ******** relation events *******
    paper.on("relation:draw", function(relation: dia.Link){
        paper.$el.on({
            "mousemove.relation:draw": function(event){
                const x = event.clientX as number
                const y = event.clientY as number
                try {
                    const localPoint = paper.clientToLocalPoint(x, y)
                    relation.target(localPoint)    
                } catch (error) {
                    console.log("cann't draw relation");
                }
            },
            "mouseup.relation:draw": function(event){
                paper.$el.off(".relation:draw")
                const x = event.clientX as number
                const y = event.clientY as number
                try {
                    const localPoint = paper.clientToLocalPoint(x, y)
                    let tables = graph.findModelsFromPoint(localPoint)
                            .filter(element=>element.get("type") === TypesEnumeration.TABLE_TYPE);  
                    
                    if(tables.length === 0)
                        relation.remove()
                    else
                        relation.target(tables[0])
                    

                } catch (error) {
                    console.log("cann't draw relation");
                }
            }
        })
    })
    paper.on("relation:remove", function(relation: dia.Link){
        relation.remove()
    })
    paper.on("relation:changeType", function(relation: dia.Link){
        let relationTypes: string[] = relation.get("relationTypes") as string[]

        let currentRelationType = relationTypes[0]
        relationTypes = relationTypes.slice(1)
        relationTypes.push(currentRelationType)

        let relationView = relation.findView(paper) as dia.LinkView
        let relationLabel = relationView.findLabelNode(0, "label") as SVGElement

        relationLabel.textContent = relationTypes[0]
        relation.set("relationTypes", relationTypes)
    })
    // ******************************************************************
}

export default handlePaperEvents