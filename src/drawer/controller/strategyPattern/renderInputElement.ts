import { dia } from 'jointjs'

import DrawerShapesFactory from '../../view/DrawerShapesFactory'

const handleBlurEvent = (inputValue: string, inputElement: dia.Element): void=>{
    // define custom property to inputElement (custom event)  
    inputElement.prop("LabelValue", inputValue)
}

const renderInputElement = (labelCellView: dia.CellView): void=>{
    let paper = labelCellView.paper as dia.Paper
    let graph: dia.Graph = labelCellView.model.graph

    const labelPosition: {x: number, y: number} = labelCellView.model.get("position")
    const labelSize: {width: number, height: number} = labelCellView.model.get('size')
    
    const inputElement = DrawerShapesFactory.INPUT_ELEMENT.getShape() as dia.Element
    inputElement.position(labelPosition.x, labelPosition.y)
    inputElement.set("size", labelSize)
    inputElement.addTo(graph)

    labelCellView.model.getParentCell()?.embed(inputElement)
    labelCellView.model.remove()

    const inputElementView = inputElement.findView(paper)
    const htmlInputElement = inputElementView.$el.find("input")
    htmlInputElement.on('mousedown click', (event)=>{
        event.stopPropagation()
    })

    htmlInputElement.trigger('focus')
    htmlInputElement.val(labelCellView.model.attr("label/text"))
    htmlInputElement.trigger('select')

    htmlInputElement.on('blur', (event)=>{
        handleBlurEvent(event.target.value, inputElement)
    })

    paper.on('blank:pointerclick element:pointerclick link:pointerclick cell:pointerclick', ()=>{
        htmlInputElement.trigger('blur')
    })
}

export default renderInputElement