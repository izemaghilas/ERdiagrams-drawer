import { dia } from "jointjs"

import DrawerShapesEnumeration from '../view/DrawerShapesEnumeration'

const removeColumnSize = {width: 25, height: 25}

const renderColumn = (addColumnCell: dia.Cell, graph: dia.Graph) => {

    const addColumnCellPosition: {x: number, y: number} = addColumnCell.get("position")
    const addColumnCellSize: {width: number, height: number} = addColumnCell.get("size")

    let column = DrawerShapesEnumeration.COLUMN.getView()
    column.position(addColumnCellPosition.x, addColumnCellPosition.y)

    let removeColumn = DrawerShapesEnumeration.REMOVE_COLUMN.getView()
    removeColumn.position(addColumnCellPosition.x, addColumnCellPosition.y)
    removeColumn.set("size", removeColumnSize)
    
    let columnName = DrawerShapesEnumeration.LABEL.getView()
    columnName.position(addColumnCellPosition.x+removeColumnSize.width, addColumnCellPosition.y)
    columnName.resize(addColumnCellSize.width-removeColumnSize.width, addColumnCellSize.height)
    columnName.attr("label/text", "column")

    
    graph.addCells([column, columnName, removeColumn])

    column.embed(removeColumn)
    column.embed(columnName)
    
    addColumnCell.set(
        "position", 
        {
            x: addColumnCellPosition.x, 
            y: addColumnCellPosition.y + addColumnCellSize.height
        }
    )

    addColumnCell.getParentCell()?.embed(column)
    
}

export default renderColumn