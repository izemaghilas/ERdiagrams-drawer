
import TypesEnumeration from '../../view/ShapesTypes'
import resizeColumnAsParent from './resizeColumnAsParent'
import resizeTable from './resizeTable'
import { LabelValueChangeHandler } from './types'

const TableHandler: LabelValueChangeHandler = {
    parentType: TypesEnumeration.TABLE_TYPE,
    handleEvent: resizeTable
}
const ColumnHandler: LabelValueChangeHandler = {
    parentType: TypesEnumeration.COLUMN_TYPE,
    handleEvent: resizeColumnAsParent
}

const handlers: readonly LabelValueChangeHandler[] = [
    TableHandler,
    ColumnHandler
]

function getLabelChangeEventHandler(parentType: string): LabelValueChangeHandler {
    
    return handlers.find(handler=>handler.parentType === parentType) as LabelValueChangeHandler
}

export default getLabelChangeEventHandler