import { dia } from "jointjs"
import React from "react"

export default class UserGuide extends React.Component<{paper: dia.Paper}, {}> {

    state = {
        showDemo: this.showDemo.bind(this)
    }

    showDemo() {
        
    }

    render() {
        return(
            <div 
                className="user-guide-container"
                title="user guide"
                onClick={this.state.showDemo}
            >               
            </div>
        )
    }
}