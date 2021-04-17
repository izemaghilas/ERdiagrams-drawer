import { dia } from 'jointjs'

import DrawerShapesEnumeration from '../view/DrawerShapesEnumeration'

const handleBlurEvent = (inputValue: string, inputElement: dia.Element, graph: dia.Graph): void=>{
    // define custom property to inputElement (custom event)  
    const valueLength: number = inputValue.length * 10 + 1
    inputElement.prop("LabelValue", inputValue, {length: valueLength})
}


const renderInputElement = (labelCell: dia.Cell, graph: dia.Graph, paper: dia.Paper)=>{
    
    const labelCellPosition: {x: number, y: number} = labelCell.get('position')
    const labelCellSize: {width: number, height: number} = labelCell.get('size')

    const inputElement = DrawerShapesEnumeration.INPUT_ELEMENT.getView() as dia.Element
    inputElement.position(labelCellPosition.x, labelCellPosition.y)
    inputElement.set("size", labelCellSize)
    inputElement.addTo(graph)
    
    labelCell.getParentCell()?.embed(inputElement)
    labelCell.remove()

    const inputElementView = inputElement.findView(paper)
    const htmlInputElement = inputElementView.$el.find("input")
    
    htmlInputElement.on('mousedown click', (event)=>{
        event.stopPropagation()
    })

    htmlInputElement.trigger('focus')
    htmlInputElement.val(labelCell.attr("label/text"))
    htmlInputElement.trigger('select')

    htmlInputElement.on('blur', (event)=>{
        handleBlurEvent(event.target.value, inputElement, graph)
    })

    paper.on('blank:pointerclick element:pointerclick link:pointerclick cell:pointerclick', ()=>{
        htmlInputElement.trigger('blur')
    })
}

export default renderInputElement