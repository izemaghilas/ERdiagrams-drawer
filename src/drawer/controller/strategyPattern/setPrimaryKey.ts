import { dia } from "jointjs"

const setPrimaryKey = (primaryKeyCellView: dia.CellView): void => {

    let column = primaryKeyCellView.model.getParentCell() as dia.Element
    let pk = column.get("primaryKey") as boolean

    let pkElement = primaryKeyCellView.findBySelector("pk")[0]

    if(pk){
        pkElement.style.visibility='hidden'
        column.set("primaryKey", false)
    }
    else{
        pkElement.style.visibility='visible'
        column.set("primaryKey", true)
    }
    
}

export default setPrimaryKey