/**
 * React component for usage card
 * help users understand how to use the app
 */

import React from 'react'

import UsageCardHeader from './UsageCardHeader'
import UsageCardBody from './UsageCardBody'

import './styles/usageCard.css'
import { englishGuide, frenchGuide, GuideType, languages } from './guides'

export default class UsageCard extends React.Component<{closeUserGuide():void},{userGuide: GuideType, emptyInstructions: boolean}> {

    state = {
        userGuide: englishGuide,
        emptyInstructions: false // used to remove current instructions on switching language
    }

    setEmptyInstructions(value: boolean){
        this.setState({emptyInstructions: value})
    }

    setUserGuideLanguage(language: string){
        this.state.userGuide.language !== language? this.setState({emptyInstructions: true}) : this.setState({emptyInstructions: false})
        
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
                <UsageCardBody 
                    userGuide={this.state.userGuide} 
                    emptyInstructions={this.state.emptyInstructions}
                    setEmptyInstructions={this.setEmptyInstructions.bind(this)}
                />
            </div>
        )
    }
}