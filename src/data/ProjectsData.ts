interface project {
    name: string,
    description: string,
    date: number | string | Date,
    cost: number,
    link: string,
    video: string,
}

export const projectsData: project[] = [
    {
        name: 'Сайт мебельной компании',
        description: 'Сайт мебельной компании Сайт мебельной компании Сайт мебельной компании Сайт мебельной компании',
        date: new Date("2017-01-26"),
        cost: 123,
        link: 'https://testlink',
        video: 'https://testvid',
    }
]
