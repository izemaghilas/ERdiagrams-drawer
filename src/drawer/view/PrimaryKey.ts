import { dia } from "jointjs"

import TypesEnumeration from "./ShapesTypes"

const fillColor = 'yellow'
const eyeFillColor = '#e9967a'

const PrimaryKey = dia.Element.define(
    TypesEnumeration.PRIMARY_KEY,
    {
        attrs: {
            body: {
                refWidth: '100%',
                refHeight: '100%',
                strokeWidth: 1,
                stroke: '#FFFFFF',
                fill: '#e9967a',
                cursor: 'pointer',
                title: "set as primary key"
            },
            pk: {
                ref: 'body',
                refX: 0,
                refY: 0
            },
            wheel: {
                cursor: 'pointer'
            },
            eye: {
                ref: 'wheel',
                refX: '50%',
                refY: '50%',
                cursor: 'pointer'
            },
            verticalLine: {
                cursor: 'pointer'
            },
            horizentalLine1: {
                cursor: 'pointer'
            },
            horizentalLine2: {
                cursor: 'pointer'
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
                tagName: 'g',
                selector: 'pk',
                style: {
                    visibility: 'hidden'
                },
                children: [
                    {
                        tagName: 'circle',
                        selector: 'wheel',
                        attributes: {
                            'cx': 12,
                            'cy': 8,
                            'r': 5,
                            'fill': fillColor
                        }
                    },
                    {
                        tagName: 'circle',
                        selector: 'eye',
                        attributes: {
                            'r': 3,
                            'fill': eyeFillColor
                        }
                    },
                    {
                        tagName: 'rect',
                        selector: 'verticalLine',
                        attributes: {
                            'x': 11,
                            'y': 12,
                            'width': 2,
                            'height': 10,
                            'fill': fillColor
                        }
                    },
                    {
                        tagName: 'rect',
                        selector: 'horizentalLine1',
                        attributes: {
                            'x': 11,
                            'y': 16,
                            'width': 6,
                            'height': 2,
                            'fill': fillColor
                        }
                    },
                    {
                        tagName: 'rect',
                        selector: 'horizentalLine2',
                        attributes: {
                            'x': 11,
                            'y': 19,
                            'width': 6,
                            'height': 2,
                            'fill': fillColor
                        }
                    }

                ]
            }
        ]
    }
)

export default PrimaryKey