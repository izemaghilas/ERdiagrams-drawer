import { dia } from "jointjs";
import getElementsResizeHandler from "./ElementsResizeHandler";

function resizeTableOnColumnRemoved(table: dia.Element, width: number):void{
    table.getEmbeddedCells().forEach(cell=>{
        let handler = getElementsResizeHandler(cell.get("type"))
        handler.resizeElement(cell as dia.Element, width)
    })
    table.fitEmbeds()
}

export default resizeTableOnColumnRemoved