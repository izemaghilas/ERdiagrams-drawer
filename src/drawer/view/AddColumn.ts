import { dia } from "jointjs";

import TypesEnumeration from "./ShapesTypes"

const AddColumn = dia.Element.define(
    TypesEnumeration.ADD_COLUMN_TYPE,
    {
        attrs: {
            body: {
                refWidth: '100%',
                refHeight: '100%',
                strokeWidth: 1,
                stroke: '#FFFFFF',
                fill: '#ffdec2',
            },
            container: {
                ref: 'body',
                refX: 5,
                refY: '25%',
                width: 15,
                height: 15,
                fill: '#FFFFFF',
                opacity: 0,
            },
            horizentalLine: {
                ref: 'container',
                refX:0,
                refY: '33%',
                width: 15,
                height: 5,
                fill: '#967559',
                cursor: 'pointer',
            },
            verticalLine: {
                ref: 'container',
                refX: '33%',
                refY: 0,
                width: 5,
                height: 15,
                fill: '#967559',
                cursor: 'pointer',
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
                tagName: 'rect',
                selector: 'container'
            },
            {
                tagName: 'rect',
                selector: 'horizentalLine'
            },
            {
                tagName: 'rect',
                selector: 'verticalLine'
            },
        ]
    }
)

export default AddColumn