import React, { ReactElement, useState } from "react"
import { GuideType } from "./guides"

import './styles/usageCardBody.css'


const ActionLabel: React.FC<{
    label: string, 
    instructions: string[], 
    setInstructions(instructions: string[]): void,
    setEmptyInstructions(value: boolean): void
}> 
= ({label, instructions, setInstructions, setEmptyInstructions}): ReactElement=>{
    return (
        <div 
            className="usage-card-body-action-label-container"
            onClick={()=>{
                setInstructions(instructions)
                setEmptyInstructions(false)
            }}
        >
            {label}
        </div>
    )
}

const ActionInstruction: React.FC<{instruction: string}> = ({instruction}): ReactElement=>{
    return (
        <li className="usage-card-body-action-instruction-container">{instruction}</li>
    )
}

const UsageCardBody: React.FC<{
    userGuide: GuideType, 
    emptyInstructions: boolean, 
    setEmptyInstructions(value: boolean):void,
}> 
= ({userGuide, emptyInstructions, setEmptyInstructions}): ReactElement=>{
    const [instructions, setInstructions] = useState<string[]>([])
    
    function showInstructions(instructions: string[]){
        setInstructions(instructions)
    }

    return (
        <div className="usage-card-body">
            <div className="usage-card-body-action-labels-container">
                {
                    userGuide.actions.map(action=>(
                        <ActionLabel 
                            label={action.label} 
                            instructions={action.instructions}
                            setInstructions={showInstructions}
                            setEmptyInstructions={setEmptyInstructions}
                            key={action.label}
                        />
                    ))
                }
            </div>
            <div className="usage-card-body-action-instructions-container">
                {
                    !emptyInstructions && instructions.map(instruction=>(<ActionInstruction instruction={instruction} key={instruction} />))
                }
            </div>
        </div>
    )
}

export default UsageCardBody