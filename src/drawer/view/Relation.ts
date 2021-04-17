import { dia } from "jointjs"

import TypesEnumeration from "./ShapesTypes"

const Relation = dia.Link.define(
    TypesEnumeration.RELATION_TYPE,
    {
        attrs: {
            line: {
                connection: true,
                stroke: '#e9967a',
                strokeWidth: 2,
                strokeLinejoin: 'round'
            },
            wrapper: {
                connection: true,
                strokeWidth: 10,
                strokeLinejoin: 'round'
            }
        },
        defaultLabel: {
            attrs: {
                label: {
                    fill: '#333333',
                    fontSize: 14,
                    fontWeight: 'bold',
                    textAnchor: 'middle',
                    yAlignment: 'middle',
                    cursor: 'pointer'
                },
                body: {
                    ref: 'label',
                    fill: 'white',
                    stroke: '#e9967a',
                    strokeWidth: 2,
                    refWidth: '150%',
                    refHeight: '150%',
                    refX: '-25%',
                    refY: '-25%',
                    rx: 10,
                    ry: 10,
                    cursor: 'pointer'
                },
                remove: {
                    ref: 'body',
                    refX: 0,
                    refY: 0
                },
                button: {},
                icon: {}
            },
            position: {
                distance: 0.5
            },
            markup: [
                {
                    tagName: 'rect',
                    selector: 'body'
                },
                {
                    tagName: 'text',
                    selector: 'label'
                },
                {
                    tagName: 'g',
                    selector: 'remove',
                    style: {
                        visibility: 'hidden'
                    },
                    children: [
                        {
                            tagName: 'circle',
                            selector: 'button',
                            attributes: {
                                'r': 7,
                                'fill': '#FF1D00',
                                'cursor': 'pointer'
                            }
                        },
                        {
                            tagName: 'path',
                            selector: 'icon',
                            attributes: {
                                'd': 'M -3 -3 3 3 M -3 3 3 -3',
                                'fill': 'none',
                                'stroke': '#FFFFFF',
                                'stroke-width': 2,
                                'pointer-events': 'none'
                            }
                        }
                    ]
                }
            ]
        },
        relationTypes: ["OneToOne", "OneToMany", "ManyToMany"]
    }, 
    {
        markup: [
            {
                tagName: 'path',
                selector: 'wrapper',
                attributes: {
                    'fill': 'none',
                    'cursor': 'pointer',
                    'stroke': 'transparent'
                }
            }, 
            {
                tagName: 'path',
                selector: 'line',
                attributes: {
                    'fill': 'none',
                    'pointer-events': 'none'
                }
            }
        ]
    }
);


export default Relation