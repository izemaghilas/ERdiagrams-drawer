import React, { ReactElement } from "react"
import { GuideType } from "./guides"

import './styles/usageCardBody.css'


const ActionLabel: React.FC<{label: string}> = ({label}): ReactElement=>{
    return (
        <div className="usage-card-body-action-label-container">{label}</div>
    )
}

const UsageCardBody: React.FC<{userGuide: GuideType}> = ({userGuide}): ReactElement=>{
    return (
        <div className="usage-card-body">
            <div className="usage-card-body-action-labels-container">
                {
                    userGuide.actions.map(action=>(<ActionLabel label={action.label} key={action.label}/>))
                }
            </div>
            <div className="usage-card-body-actions-container"></div>
        </div>
    )
}

export default UsageCardBody