import { dia } from "jointjs";

import DrawerShapesEnumeration from '../view/DrawerShapesEnumeration'

const table_width: number = 100
const children_height: number = 25

const renderTable = (graph: dia.Graph, position: {x: number; y: number}): void=>{
    
    let table = DrawerShapesEnumeration.TABLE.getView()
    table.position(position.x, position.y)
    

    let tableName = DrawerShapesEnumeration.LABEL.getView()
    tableName.resize(table_width, children_height)
    tableName.position(position.x, position.y)
    tableName.attr("label/text", "Table")

    let addColumn =  DrawerShapesEnumeration.ADD_COLUMN.getView()
    addColumn.resize(table_width, children_height)
    addColumn.position(position.x, position.y+children_height)

    graph.addCells([table, tableName, addColumn])
    
    table.embed(tableName)
    table.embed(addColumn)
}

export default renderTable