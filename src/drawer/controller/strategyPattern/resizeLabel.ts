import { dia } from "jointjs";

function resizeLabel(label: dia.Element, width: number): void{
    let labelSize = label.size()
    label.resize(width, labelSize.height)
}

export default resizeLabel