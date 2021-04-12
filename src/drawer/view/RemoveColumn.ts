import { dia } from "jointjs"

import TypesEnumeration from "./ShapesTypes"

const minusHeight = '5px'
const minusWidth = '15px'

const RemoveColumn = dia.Element.define(
    TypesEnumeration.REMOVE_COLUMN_TYPE,
    {
        attrs: {
            body: {
                refWidth: '100%',
                refHeight: '100%',
                strokeWidth: 1,
                stroke: '#FFFFFF',
                fill: '#ffdec2'
            },
            minus: {
                ref: 'body',
                refX: '20%',
                refY: '40%',
                fill: '#967559',
                cursor: 'pointer',
            }
        }
    },
    {  
        markup: [
            {
                tagName: 'rect',
                selector: 'body',
            },
            {
                tagName: 'rect',
                selector: 'minus',
                style: {
                    width: minusWidth,
                    height: minusHeight
                }
            }
        ]
    }
)

export default RemoveColumn