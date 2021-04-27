import { dia } from 'jointjs'

import TypesEnumeration from "./ShapesTypes"

const state: number[] = [110]

const Table = dia.Element.define(
    TypesEnumeration.TABLE_TYPE,
    {
        attrs: {
            body: {
                refWidth: '100%',
                refHeight: '100%',
                strokeWidth: 1,
                stroke: '#FFFFFF',
                fill: 'transparent'
            }
        },
        widthState: state // track the table width => ability to reset
    },
    {
        markup: [
            {
                tagName: 'rect',
                selector: 'body'
            }
        ]
    }
)

export default Table