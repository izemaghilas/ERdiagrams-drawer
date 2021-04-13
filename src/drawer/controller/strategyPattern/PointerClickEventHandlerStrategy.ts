import { dia } from "jointjs"
import TypesEnumeration from "../../view/ShapesTypes"
import removeColumnFromTable from "./removeColumnFromTable"
import renderColumn from "./renderColumn"

type PointerClickEventHandler = {
    elementType: string; // event target
    handleEvent: (
        target: dia.CellView
    )=>void
}

const labelOnPointerClick: PointerClickEventHandler = {
    elementType: TypesEnumeration.LABEL_TYPE,
    handleEvent: ()=>{
        
    }
}
const addColumnOnPointerClick: PointerClickEventHandler = {
    elementType: TypesEnumeration.ADD_COLUMN_TYPE,
    handleEvent: renderColumn
}
const removeColumnOnPointerClick: PointerClickEventHandler = {
    elementType: TypesEnumeration.REMOVE_COLUMN_TYPE,
    handleEvent: removeColumnFromTable
}


const PointerClickEventHandlers: readonly PointerClickEventHandler[] = [
    labelOnPointerClick,
    addColumnOnPointerClick,
    removeColumnOnPointerClick
]


function getPointerClickonElementHandler(elementType: string): PointerClickEventHandler {
    return PointerClickEventHandlers
        .find(handler=>handler.elementType === elementType) as PointerClickEventHandler
}

export default getPointerClickonElementHandler

