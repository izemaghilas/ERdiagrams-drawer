
type ActionsType = {
    label: string,
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
            label: "create Table"
        },
        {
            label: "remove Table"
        },
        {
            label: "add Column"
        },
        {
            label: "remove Column"
        }
    ]
}
const frenchGuide: GuideType = {
    language: languages.french,
    actions: [
        {
            label: "créer une Table",
        },
        {
            label: "supprimer une Table"
        },
        {
            label: "ajouter une Colonne"
        },
        {
            label: "supprimer une Colonne"
        }
    ]
}

export { languages, englishGuide, frenchGuide }
export type { GuideType }