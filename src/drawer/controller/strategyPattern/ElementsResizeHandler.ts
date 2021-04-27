import TypesEnumeration from "../../view/ShapesTypes"
import resizeAddColumn from "./resizeAddColumn"
import resizeColumn from "./resizeColumn"
import resizeLabel from "./resizeLabel"
import resizeTable from "./resizeTable"
import { ElementResizeHandler } from "./types"

const TableResizeHandler: ElementResizeHandler = {
    elementType: TypesEnumeration.TABLE_TYPE,
    resizeElement: resizeTable
}
const LabelResizeHandler: ElementResizeHandler = {
    elementType: TypesEnumeration.LABEL_TYPE,
    resizeElement: resizeLabel
}
const ColumnResizeHandler: ElementResizeHandler = {
    elementType: TypesEnumeration.COLUMN_TYPE,
    resizeElement: resizeColumn
}
const AddColumnResizeHandler: ElementResizeHandler = {
    elementType: TypesEnumeration.ADD_COLUMN_TYPE,
    resizeElement: resizeAddColumn
}


const ElementsResizeHandlers: readonly ElementResizeHandler[] = [
    TableResizeHandler,
    LabelResizeHandler,
    ColumnResizeHandler,
    AddColumnResizeHandler
]

function getElementsResizeHandler(elementType: string): ElementResizeHandler{
    return ElementsResizeHandlers
        .find(handler=>handler.elementType === elementType) as ElementResizeHandler
}

export default getElementsResizeHandler