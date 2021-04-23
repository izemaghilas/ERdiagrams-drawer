import { dia } from "jointjs";

import renderTableTools from './renderTableTools'
import DrawerShapesFactory from '../view/DrawerShapesFactory'

const table_width: number = 100
const children_height: number = 25

const renderTable = (paper: dia.Paper, graph: dia.Graph, position: {x: number; y: number}): void=>{
    
    let table = DrawerShapesFactory.TABLE.getShape() as dia.Element
    table.position(position.x, position.y)
    

    let tableName = DrawerShapesFactory.LABEL.getShape() as dia.Element
    tableName.resize(table_width, children_height)
    tableName.position(position.x, position.y)
    tableName.attr("label/text", "Table")

    let addColumn =  DrawerShapesFactory.ADD_COLUMN.getShape() as dia.Element
    addColumn.resize(table_width, children_height)
    addColumn.position(position.x, position.y+children_height)

    graph.addCells([table, tableName, addColumn])
    
    table.embed(tableName)
    table.embed(addColumn)

    //add table tools
    let tableView = table.findView(paper)
    renderTableTools(tableView)
    tableView.hideTools()
}

export default renderTable