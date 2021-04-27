import { dia } from "jointjs";

function resizeAddColumn(addColumn: dia.Element, width: number): void{
    let addColumnSize = addColumn.size()
    addColumn.resize(width, addColumnSize.height)
}

export default resizeAddColumn