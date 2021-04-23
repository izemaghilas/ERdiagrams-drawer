import { dia } from "jointjs"

import DrawerShapesFactory from "../view/DrawerShapesFactory"
import TypesEnumeration from "../view/ShapesTypes"

const handleGraphEvents = (graph : dia.Graph): void=>{
    
    graph.on("change:embeds", function(element: dia.Element){
        element.fitEmbeds()
    })
    
    graph.on("change:LabelValue", function(inputElement: dia.Element, value, opt){
        let label = DrawerShapesFactory.LABEL.getShape() as dia.Element
        label.set("position", inputElement.get("position"))
        label.resize(opt.length, inputElement.size().height)
        label.attr("label/text", value)
        label.addTo(graph)

        let parent = inputElement.getParentCell() as dia.Element
        const parentSize = parent.size()
        if(label.size().width < parentSize.width){
            label.resize(parentSize.width-25, label.size().height)
        }
    
        parent.embed(label)
        inputElement.remove()

        if(parent.get("type") === TypesEnumeration.COLUMN_TYPE){
            parent = parent.getParentCell() as dia.Element
            parent.fitEmbeds()
        }
    
        parent.getEmbeddedCells().forEach(cell=>{
            let cellElement = cell as dia.Element
            let cellSize: {width: number; height: number} = cell.get("size")
            
            if(cellSize.width < parent.get("size").width){
                cellElement.resize(parent.get("size").width, cellSize.height)
            }
            
            if(cellElement.get("type") === TypesEnumeration.COLUMN_TYPE){
                cellElement.getEmbeddedCells().forEach(columnEmbdedCell=>{
                    let columnEmbdedElement = columnEmbdedCell as dia.Element

                    if(columnEmbdedCell.get("type") === TypesEnumeration.LABEL_TYPE){
                        columnEmbdedElement.resize(cellElement.size().width-25, cellElement.size().height)
                    }
                })
            }
        })
        
    })
    
}

export default handleGraphEvents