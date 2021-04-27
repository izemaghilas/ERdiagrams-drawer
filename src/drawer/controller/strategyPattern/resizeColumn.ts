import { dia } from "jointjs";
import TypesEnumeration from "../../view/ShapesTypes";
import setPrimaryKeyPosition from "./setPrimaryKeyPosition";

function resizeColumn(column: dia.Element, width: number): void {
    let columnSize = column.size()
    column.size(width, columnSize.height)
    let label = column.getEmbeddedCells().find(
        cell=>cell.get("type") === TypesEnumeration.LABEL_TYPE
    )
    label?.set("size", {
        width: column.size().width-50, 
        height: columnSize.height
    })

    // set new position for pk
    setPrimaryKeyPosition(column, column.size().width)
}

export default resizeColumn