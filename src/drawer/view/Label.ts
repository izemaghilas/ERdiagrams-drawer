import { dia } from 'jointjs'

import TypesEnumeration from "./ShapesTypes"

const Label = dia.Element.define(
    TypesEnumeration.LABEL_TYPE,
    {
        attrs: {
            body: {
                refWidth: '100%',
                refHeight: '100%',
                strokeWidth: 1,
                stroke: '#FFFFFF',
                fill: '#e9967a'
            },
            label: {
                ref: 'body',  
                textVerticalAnchor: 'middle',
                textAnchor: 'middle',
                refX: '50%',
                refY: '50%',
                fontSize: '14px',
                fontWeight: 'bold',
                fill: '#333333'
            }
        }
    },
    {
        markup: [
            {
                tagName: 'rect',
                selector: 'body'
            },
            {
                tagName: 'text',
                selector: 'label'
            }
        ]
    }
)

export default Label