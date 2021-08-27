
type ActionsType = {
    label: string,
    instructions: string[]
}
type GuideType = {
    language: string,
    actions: ActionsType[],
}

const languages: {english: string, french: string} = {
    english: "en",
    french: "fr"
}

const englishGuide: GuideType = {
    language: languages.english,
    actions: [
        {
            label: "create Table",
            instructions: ["Double click on canevas"]
        },
        {
            label: "remove Table",
            instructions: [
                "Mouse on desired table to render the tools",
                "Click on remove tool"
            ]
        },
        {
            label: "add Column",
            instructions: [
                "Mouse on desired table",
                "Click on + area"
            ]
        },
        {
            label: "remove Column",
            instructions: [
                "Mouse on desired table",
                "Click on - area"
            ]
        }
    ]
}
const frenchGuide: GuideType = {
    language: languages.french,
    actions: [
        {
            label: "créer une Table",
            instructions: ["Double click sur le canevas"]
        },
        {
            label: "supprimer une Table",
            instructions: [
                "Déplacez la souris sur la table souhaitée pour afficher les outils",
                "Cliquez sur l'outil de suppression"
            ]
        },
        {
            label: "ajouter une Colonne",
            instructions: [
                "Déplacez la souris sur la table souhaitée",
                "Cliquez sur la zone +"
            ]
        },
        {
            label: "supprimer une Colonne",
            instructions: [
                "Déplacez la souris sur la table souhaitée",
                "Cliquez sur la zone -"
            ]
        }
    ]
}

export { languages, englishGuide, frenchGuide }
export type { GuideType }