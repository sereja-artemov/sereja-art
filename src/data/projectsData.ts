import project1 from '@/images/projects/project1.jpg';
import { StaticImageData } from 'next/image';

export interface project {
    name: string,
    description: string,
    date: number | string | Date,
    cost: number,
    link: string,
    video: string,
    image: string | StaticImageData,
}

export const projectsData: project[] = [
    {
        name: 'Тестовый текст проекта 1',
        description: 'Тестовое описание проекта тестовое описание проекта 1 тестовое описание проекта 1 тестовое описание проекта',
        date: new Date("2017-01-26"),
        cost: 123,
        link: 'https://testlink',
        video: '/video/banner-video.mp4',
        image: project1,
    },
    {
        name: 'Сайт мебельной компании',
        description: 'Сайт мебельной компании Сайт мебельной компании Сайт мебельной компании Сайт мебельной компании',
        date: new Date("2017-01-26"),
        cost: 123,
        link: 'https://testlink',
        video: 'https://testvid',
        image: project1,
    },
    {
        name: 'Сайт мебельной компании',
        description: 'Сайт мебельной компании Сайт мебельной компании Сайт мебельной компании Сайт мебельной компании',
        date: new Date("2017-01-26"),
        cost: 123,
        link: 'https://testlink',
        video: 'https://testvid',
        image: project1,
    },
    {
        name: 'Сайт мебельной компании',
        description: 'Сайт мебельной компании Сайт мебельной компании Сайт мебельной компании Сайт мебельной компании',
        date: new Date("2017-01-26"),
        cost: 123,
        link: 'https://testlink',
        video: 'https://testvid',
        image: project1,
    },
]
