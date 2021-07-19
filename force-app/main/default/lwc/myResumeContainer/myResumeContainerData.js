import SOCIAL from '@salesforce/resourceUrl/SOCIAL'
import maharshi from '@salesforce/resourceUrl/maharshi'

export const PROFILE_IMAGE = maharshi

export const SOCIAL_LINKS = [
    {
        type: "github",
        label: "github/Maharshi112020",
        link: "https://github.com/Maharshi112020",
        icon: SOCIAL + '/Icons/github.svg'
    },
    {
        type: "linkedin",
        label: "linkedin/maharshi-patel6897",
        link: "https://www.linkedin.com/in/maharshi-patel6897/",
        icon: SOCIAL + '/Icons/linkedin.svg'
    },
    {
        type: "trailhead",
        label: "trailhead/mpatel6897",
        link: "https://trailblazer.me/id/mpatel6897",
        icon: SOCIAL + '/Icons/trailhead.svg'
    }
]

export const USER_DETAILS = {
    NAME: 'Maharshi Patel',
    ROLE: 'Salesforce Developer',
    EMAIL: 'maharshi112020@gmail.com',
    PHONE: '+91 9925757701'
}

export const EDUCATION_DATA = {
    ICON: SOCIAL + '/Icons/education.svg',
    HEADING: "EDUCATION",
    LIST: [
        {
            NAME: "Bachelor of Computer Engineering",
            UNIVERSITY_NAME: "KSV",
            YEAR_OF_PASSING: "2020",
            GRADE: "7.16 CGPA"
        }
    ]
}

export const EXPERIENCE_DATA = {
    HEADING: "WORK EXPERIENCE",
    EXPERIENCES: [
        {
            ROLE: "Salesforce Developer",
            COMPANY_NAME: "Persistent Systems",
            DURATION: "JAN, 2021 - Present",
            DESCRIPTION: "Experience and hands on in Salesforce.com platform - CRM, Apex, Triggers, SOQL, SOSL, Visualforce, Lightning Framework, Aura Components, LWC, Workflows, Flows, Process Builders, Permission sets, etc."
        },
        {
            ROLE: "Intern",
            COMPANY_NAME: "Softvan",
            DURATION: "July, 2019 - Mar, 2020",
            DESCRIPTION: "Experience and hands on in Python, Pandas, NumPy, seaborn, scikit-learn, matplotlib"
        }
    ]
}

export const AWARDS_DATA = {
    ICON: SOCIAL + '/Icons/awards.svg',
    HEADING: "ACHIEVEMENTS",
    LIST: [
        "Qualified for Google Code Jam 2019",
        "Qualified for TCS Codevita Season 8",
        "I got full academic scholarship from the Gujarat Government as a TFW seat based on my H.S.C result"
    ]
}

export const LANGUAGES_DATA = {
    HEADING: "Languages",
    LIST: [
        "English",
        "Hindi",
        "Gujarati"
    ]
}

export const SKILLS_DATA = {
    HEADING: "SKILLS",
    LIST: [
        "Apex",
        "Triggers",
        "SOQL",
        "SOSL",
        "Visualforce",
        "Lightning Framework",
        "Aura Component",
        "LWC",
        "Process Builders",
        "Flows",
        "Python",
        "Pandas",
        "NumPy",
        "seaborn",
        "scikit-learn",
        "matplotlib"
    ]
}