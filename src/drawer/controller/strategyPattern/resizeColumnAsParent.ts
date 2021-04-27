import { dia } from "jointjs";
import TypesEnumeration from "../../view/ShapesTypes";
import setPrimaryKeyPosition from "./setPrimaryKeyPosition";

function resizeColumnAsParent(column: dia.Element, labelWidth: number): void {
    if(labelWidth+50 > column.size().width){
        setPrimaryKeyPosition(column, labelWidth+50)
        column.fitEmbeds()
        column.prop("ColumnWidth", column.size().width)
    }
    else{
        // label width == columnWidth -50
        let columnSize = column.size()
        let label = column.getEmbeddedCells().find(cell=>cell.get("type") === TypesEnumeration.LABEL_TYPE) as dia.Element
        label.size(columnSize.width-50, columnSize.height)
    }
}

export default resizeColumnAsParent