
import TypesEnumeration from "../../view/ShapesTypes"
import removeColumnFromTable from "./removeColumnFromTable"
import renderColumn from "./renderColumn"
import renderInputElement from "./renderInputElement"
import setPrimaryKey from "./setPrimaryKey"

import { ElementEventsHandler } from "./types"


const labelOnPointerClick: ElementEventsHandler = {
    elementType: TypesEnumeration.LABEL_TYPE,
    handleEvent: renderInputElement
}
const addColumnOnPointerClick: ElementEventsHandler = {
    elementType: TypesEnumeration.ADD_COLUMN_TYPE,
    handleEvent: renderColumn
}
const removeColumnOnPointerClick: ElementEventsHandler = {
    elementType: TypesEnumeration.REMOVE_COLUMN_TYPE,
    handleEvent: removeColumnFromTable
}
const primaryKeyOnPointerClick: ElementEventsHandler = {
    elementType: TypesEnumeration.PRIMARY_KEY,
    handleEvent: setPrimaryKey
}

const PointerClickEventHandlers: readonly ElementEventsHandler[] = [
    labelOnPointerClick,
    addColumnOnPointerClick,
    removeColumnOnPointerClick,
    primaryKeyOnPointerClick
]


function getPointerClickonElementHandler(elementType: string): ElementEventsHandler {
    return PointerClickEventHandlers
        .find(handler=>handler.elementType === elementType) as ElementEventsHandler
}

export default getPointerClickonElementHandler

