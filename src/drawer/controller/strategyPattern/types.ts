import { dia } from "jointjs";

type ElementEventsHandler = {
    elementType: string; // event target
    handleEvent: (
        target: dia.CellView
    )=>void
}

export default ElementEventsHandler