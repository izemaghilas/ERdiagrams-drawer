import { dia } from "jointjs"

import AddColumn from "./AddColumn"
import Column from "./Column"
import InputElement from "./InputElement"
import RemoveColumn from "./RemoveColumn"
import Table from "./Table"
import Label from "./Label"

type DrawerShapes = {
    getView: ()=>dia.Element
}

const TABLE: DrawerShapes = {
    getView: ()=>{
        return new Table()
    }
}
const LABEL: DrawerShapes = {
    getView: ()=>{
        return new Label()
    }
}

const INPUT_ELEMENT: DrawerShapes = {
    getView: ()=>{
        return new InputElement()
    }
}
const COLUMN: DrawerShapes = {
    getView: ()=>{
        return new Column()
    }
}
const ADD_COLUMN: DrawerShapes = {
    getView: ()=>{
        return new AddColumn()
    }
}
const REMOVE_COLUMN: DrawerShapes = {
    getView: ()=>{
        return new RemoveColumn()
    }
}

const DrawerShapesEnumeration = {
   TABLE,
   LABEL,
   COLUMN,
   ADD_COLUMN,
   REMOVE_COLUMN,
   INPUT_ELEMENT
} as const

export default DrawerShapesEnumeration
