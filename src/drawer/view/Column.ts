import { dia } from 'jointjs'

import TypesEnumeration from "./ShapesTypes"

const Column = dia.Element.define(
    TypesEnumeration.COLUMN_TYPE,
    {
        attrs: {
            body: {
                refWidth: '100%',
                refHeight: '100%',
                strokeWidth: 1,
                fill: 'transparent',
            }
        },
        primaryKey : false
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

export default Column