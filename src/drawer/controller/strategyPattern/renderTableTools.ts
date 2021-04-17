import { dia, elementTools } from "jointjs";
import DrawerShapesEnumeration from "../../view/DrawerShapesEnumeration";

const drawRelationTool = new elementTools.Button({
    focusOpacity: 0.5,
    x: '110%',
    y: '50%',
    markup: [
        {
            tagName: 'circle',
            selector: 'button',
            attributes: {
                'r': 10,
                'fill': '#ffdec2',
                'cursor': 'pointer'    
            }
        },
        {
            tagName: 'path',
            selector: 'icon',
            attributes: {
                'd': 'M -5 0 L 0 0 M 0 0  L0 -5 L 0 5 L 5 0 L 0 -5 Z',
                'fill': '#967559',
                'stroke': '#967559',
                'stroke-width': 2,
                'pointer-events': 'none',
            }
        }
    ],
    action: function(event, elementView){
        event.stopPropagation()
        elementView.hideTools()

        let paper = elementView.paper as dia.Paper
        let graph = elementView.model.graph
        let position: {x: number; y: number} = elementView.model.get("position")
        let relation = DrawerShapesEnumeration.RELATION.getView() as dia.Link

        relation.source(elementView.model)
        relation.target({
            x: position.x+elementView.model.size().width+8, // draw relation svgElement width=8
            y: position.y+elementView.model.size().height/2
        })

        relation.addTo(graph)

        let relationView = relation.findView(paper) as dia.LinkView
        let relationRemoveButton = relationView.findLabelNode(0, "remove") as SVGElement
        let relationLabel = relationView.findLabelNode(0, "label") as SVGElement

        // custom events for relation
        relationRemoveButton.addEventListener("click", ()=>{
            paper.trigger("relation:remove", relation)
        })
        relationLabel.addEventListener("click", ()=>{
            paper.trigger("relation:changeType", relation)
        })
        
        paper.trigger("relation:draw", relation)

    }
})


function renderTableTools(labelCellView: dia.CellView): void {
    let paper = labelCellView.paper as dia.Paper
    
    let labelCell: dia.Cell = labelCellView.model
    let labelCellAncestors: dia.Cell[] = labelCell.getAncestors()
    
    let tableCell = labelCellAncestors[labelCellAncestors.length-1] // last cell is the table
    let tableCellView = tableCell.findView(paper)
    
    let removeButtonTool = new elementTools.Remove()

    let tableToolsView = new dia.ToolsView({
        name: "table-tools",
        tools: [
            removeButtonTool,
            drawRelationTool
        ]
    })
    tableCellView.addTools(tableToolsView)
}

export default renderTableTools