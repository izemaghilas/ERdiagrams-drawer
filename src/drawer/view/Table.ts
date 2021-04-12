import { dia } from 'jointjs'

import TypesEnumeration from "./ShapesTypes"

const Table = dia.Element.define(
    TypesEnumeration.TABLE_TYPE,
    {
        attrs: {
            body: {
                refWidth: '100%',
                refHeight: '100%',
                strokeWidth: 1,
                stroke: '#FFFFFF',
                fill: 'lightblue'
            }
        },
        widthState: [] // track the table width => reset width when removing columns
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