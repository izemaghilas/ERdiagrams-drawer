import { dia } from 'jointjs'


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
            model: graph
        }
    )
}


export default renderPaper