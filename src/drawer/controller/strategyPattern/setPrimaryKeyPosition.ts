import { dia } from "jointjs";
import TypesEnumeration from "../../view/ShapesTypes";

function setPrimaryKeyPosition(column: dia.Element, width: number):void {
    let pkElement = column.getEmbeddedCells().find(
        cell=>cell.get("type") === TypesEnumeration.PRIMARY_KEY
    )
    width-=25 // 25 PrimaryKey width
    let columnPosition = column.get("position") as {x: number; y: number}
    let pkElementPosition = pkElement?.get("position") as {x: number; y: number}
    pkElement?.set("position", {x: columnPosition.x+width, y:pkElementPosition.y})
}

export default setPrimaryKeyPosition