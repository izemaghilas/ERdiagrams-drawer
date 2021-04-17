import { dia } from 'jointjs'


import handleGraphEvents from './handleGraphEvents'

import TypesEnumeration from '../view/ShapesTypes'
import handlePaperEvents from './handlePaperEvents'

const paper_width = '100%'
const paper_height = '100%'

function renderPaper(domElement: HTMLElement):void{
    const graph = new dia.Graph()
    const paper = new dia.Paper(
        {
            el: domElement,
            width: paper_width,
            height: paper_height,
            gridSize: 10,
            drawGrid: {
                name: 'dot',
                args: {
                    color: 'black',
                    thickness: 1.5
                }
            },
            model: graph,
            interactive: (cellView)=>{
                if (cellView.model.get("type") === TypesEnumeration.TABLE_TYPE){
                    return true
                }

                return { 
                    stopDelegation: false,
                    labelMove: false,
                    linkMove: false,
                }
            }
        }
    )

    handleGraphEvents(graph)
    handlePaperEvents(paper, graph)
}


export default renderPaper