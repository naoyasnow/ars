export type Work = {
    id: string
    number: string
    title: string
    description: string
    image: string
    href: string
    year: string
    role: string
    category: string
    thought: string
}

export const works: Work[] = [
    {
        id: "advertising",
        number: "01",
        title: "Advertising",
        description: "Ideas, campaigns, and communication.",
        image: "/ars/test.png",
        href: "#advertising",
        year: "2026",
        role: "Planning / Direction",
        category: "Advertising",
        thought:
            "Good communication is not only about what we say. It is also about creating the space in which people can understand, feel, and connect with an idea.",
    },
    {
        id: "hr",
        number: "02",
        title: "Human Resources",
        description: "People, organizations, and culture.",
        image: "/ars/test.png",
        href: "#hr",
        year: "2026",
        role: "Planning / Direction",
        category: "Human Resources",
        thought:
            "Organizations are made of people. Creating a better workplace means understanding the relationships, experiences, and environments that shape how people work.",
    },
    {
    id: "ideas",
    number: "03",
    title: "Ideas",
    description: "Thoughts, experiments, and things worth exploring.",
    image: "/ars/test.png",
    href: "#ideas",
    year: "2026",
    role: "Research / Experiment",
    category: "Ideas",
    thought:
        "Some ideas begin as questions. Others begin as observations, conversations, or moments that stay in the mind. This space is for exploring them.",
    },
]