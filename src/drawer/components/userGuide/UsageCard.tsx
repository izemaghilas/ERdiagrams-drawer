/**
 * React component for usage card
 * help users understand how to use the app
 */

import React from 'react'

import UsageCardHeader from './UsageCardHeader'
import UsageCardBody from './UsageCardBody'

import './styles/usageCard.css'
import { englishGuide, frenchGuide, GuideType, languages } from './guides'

export default class UsageCard extends React.Component<{closeUserGuide():void},{userGuide: GuideType}> {

    state = {
        userGuide: englishGuide,
    }

    setUserGuideLanguage(language: string){        
        if(language === languages.french){
            this.setState({userGuide: frenchGuide})
        }
        else{
            this.setState({userGuide: englishGuide})
        }
    }

    render(){
        return(
            <div className="usage-card-container">
                <UsageCardHeader 
                    closeUsageCard={this.props.closeUserGuide} 
                    setUserGuideLanguage={this.setUserGuideLanguage.bind(this)}
                />
                <UsageCardBody userGuide={this.state.userGuide}/>
            </div>
        )
    }
}