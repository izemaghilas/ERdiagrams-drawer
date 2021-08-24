import React from 'react'
import { SiGithub } from 'react-icons/si'

const url = "https://github.com/izemaghilas/ERdiagrams-drawer"

export default class GitHubRepoTool extends React.Component<{}, {}> {
    
    state = {
        goToGitHubRepo: this.goToGitHubRepo.bind(this)
    }

    goToGitHubRepo() {
        window.open(url)
    }

    render() {
        return (
            <div className="github-repo-container">
                <SiGithub size={20} className="github-repo" title="github repository" onClick={this.state.goToGitHubRepo} />
            </div>
        )
    }
}