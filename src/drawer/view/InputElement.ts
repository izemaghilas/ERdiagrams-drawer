import { dia } from 'jointjs'

import TypesEnumeration from "./ShapesTypes"

const InputElement = dia.Element.define(
    TypesEnumeration.INPUT_ELEMENT_TYPE,
    {
        attrs: {
            body: {
                refWidth: '100%',
                refHeight: '100%',
                strokeWidth: 1,
                stroke: '#FFFFFF',
                fill: '#e9967a'
            },
            name: {
                ref: 'body'
            }
        }
    },
    {
        markup: [
            {
                tagName: 'foreignObject',
                selector: 'body',
                children: [
                    {
                        tagName: 'input',
                        namespaceURI: 'http://www.w3.org/1999/xhtml',
                        attributes: {
                            type: "text"
                        },
                        selector: 'name',
                        style: {
                            backgroundColor: '#e9967a',
                            border: 'none',
                            width: '100%',
                            height: '100%',
                            outline: 'none',
                            fontSize: '14px',
                            fontWeight: 'bold'
                        }
                    }
                ]
            }
        ]
    }
)

export default InputElement