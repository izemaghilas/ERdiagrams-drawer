import React from "react"
import { ReactElement } from "react"

import './styles/languageComponent.css'

const LanguageComponent: React.FC<{languageName: string, setLanguage(language: string):void}> 
= ({languageName, setLanguage}): ReactElement=>{
        
    return(
        <div className="card-usage-header-language-container" onClick={()=>{setLanguage(languageName)}}>
            {languageName}
        </div>
    )
}

export default LanguageComponent