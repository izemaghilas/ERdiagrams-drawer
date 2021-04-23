import { dia } from "jointjs"

import AddColumn from "./AddColumn"
import Column from "./Column"
import InputElement from "./InputElement"
import RemoveColumn from "./RemoveColumn"
import Table from "./Table"
import Label from "./Label"
import Relation from "./Relation"

type DrawerShapes = {
    getShape: ()=>dia.Element | dia.Link
}

const TABLE: DrawerShapes = {
    getShape: ()=>{
        return new Table()
    }
}
const LABEL: DrawerShapes = {
    getShape: ()=>{
        return new Label()
    }
}

const INPUT_ELEMENT: DrawerShapes = {
    getShape: ()=>{
        return new InputElement()
    }
}
const COLUMN: DrawerShapes = {
    getShape: ()=>{
        return new Column()
    }
}
const ADD_COLUMN: DrawerShapes = {
    getShape: ()=>{
        return new AddColumn()
    }
}
const REMOVE_COLUMN: DrawerShapes = {
    getShape: ()=>{
        return new RemoveColumn()
    }
}
const RELATION: DrawerShapes= {
    getShape: ()=>{
        let relation = new Relation()
        relation.appendLabel({
            attrs: {
                label: {
                    text: relation.get("relationTypes")[0]
                }
            }
        })
        
        return relation
    }
}

const DrawerShapesFactory = {
   TABLE,
   LABEL,
   COLUMN,
   ADD_COLUMN,
   REMOVE_COLUMN,
   INPUT_ELEMENT,
   RELATION
} as const

export default DrawerShapesFactory
