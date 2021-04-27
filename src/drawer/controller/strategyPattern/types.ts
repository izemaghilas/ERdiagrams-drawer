import { dia } from "jointjs";

type ElementEventsHandler = {
    elementType: string; // event target name
    handleEvent: (
        target: dia.CellView
    )=>void
}

type ElementResizeHandler = {
    elementType: string,
    resizeElement : (
        target: dia.Element,
        width: number
    )=>void
}

type LabelValueChangeHandler = {
    parentType: string;
    handleEvent: (
        target: dia.Element,
        width: number
    )=>void
}


export type { ElementEventsHandler, ElementResizeHandler, LabelValueChangeHandler }