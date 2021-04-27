import { dia } from "jointjs";

import getElementsResizeHandler from "./ElementsResizeHandler";

function resizeTable(table: dia.Element, width: number): void {
    let tableWidth = table.size().width
    if(tableWidth < width){
        let widthState = table.get("widthState") as number[]
        widthState.push(width)
        
        //resize Children according to new width
        table.getEmbeddedCells().forEach(cell=>{
            let handler = getElementsResizeHandler(cell.get("type"))
            handler.resizeElement(cell as dia.Element, width)
        })
    }
    else {
        //resize Children according to table width
        table.getEmbeddedCells().forEach(cell=>{
            let handler = getElementsResizeHandler(cell.get("type"))
            handler.resizeElement(cell as dia.Element, tableWidth)
        })
    }

    table.fitEmbeds()
}

export default resizeTable