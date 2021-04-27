import React from "react";

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
                <div 
                    className="github-repo" 
                    title="github repository"
                    onClick={this.state.goToGitHubRepo}
                ></div>
            </div>
        )
    }
}