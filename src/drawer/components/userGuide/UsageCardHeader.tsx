import React, { ReactElement } from 'react'
import { FiXCircle } from 'react-icons/fi'

import LanguageComponent from './LanguageComponent'

import './styles/usageCardHeader.css'

import { languages } from './guides' 

const UsageCardHeader: React.FC<{closeUsageCard(): void, setUserGuideLanguage(language: string): void}> 
= ({closeUsageCard, setUserGuideLanguage}): ReactElement => {
    
    return(
        <div className="usage-card-header-container">
            <div className="usage-card-header-languages-container">
                <LanguageComponent 
                    languageName={languages.english}
                    setLanguage={setUserGuideLanguage}
                />
                <LanguageComponent 
                    languageName={languages.french}
                    setLanguage={setUserGuideLanguage}
                />
            </div>
            <FiXCircle 
                className="usage-card-header-close-icon" 
                size={30} 
                color="#967559"
                onClick={closeUsageCard}
            />
        </div>
    )
}

export default UsageCardHeader