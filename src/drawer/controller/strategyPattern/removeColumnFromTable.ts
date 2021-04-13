import { dia } from "jointjs";

import TypesEnumeration from "../../view/ShapesTypes"

function redefineEmbedsPosition(embdedCells: dia.Cell[], columnY: number): void{
 
    /**
     * ommit Label as it is in top
     * ommit AddColumn => redefine its position after redefinig columns position
     */
    let addColumnCell = embdedCells.find(
        cell=>cell.get("type") === TypesEnumeration.ADD_COLUMN_TYPE
    ) as dia.Element
    
    embdedCells = embdedCells.filter(
        cell => cell.get("type") !== TypesEnumeration.ADD_COLUMN_TYPE 
                && 
                cell.get("type") !== TypesEnumeration.LABEL_TYPE
    )
    
    embdedCells.forEach(columnCell=>{
        let columnCellY = columnCell.get("position").y
        if(columnCellY > columnY){
            columnCell.set("position", {x: columnCell.get("position").x, y: columnY})
            columnCell.getEmbeddedCells().forEach(cell=>{
                cell.set("position", {x: cell.get("position").x, y: columnY})
            })
            columnY = columnCellY
        }
    })
    
    addColumnCell.position(addColumnCell.get("position").x, columnY)
}

function removeColumnFromTable(removeColumnCellView: dia.CellView) {
    let removeColumnCell = removeColumnCellView.model
    let ancestors = removeColumnCell.getAncestors()
    
    let column = ancestors[0] as dia.Element
    const columnPosition = column.get("position")
    column.remove()

    let table = ancestors[ancestors.length-1] as dia.Element

    redefineEmbedsPosition(table.getEmbeddedCells(), columnPosition.y)
    table.fitEmbeds()

}

export default removeColumnFromTable