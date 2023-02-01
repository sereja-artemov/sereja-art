import project1 from '@/images/projects/project1.png';
import prommaticwebp from '@/images/projects/prommatic.webp';

import {StaticImageData} from 'next/image';

export interface project {
  name: string,
  description: string,
  date: number | string | Date,
  cost: number,
  link: string,
  image: string | StaticImageData,
}

export const projectsData: project[] = [
  {
    name: 'Сайт производственной компании Промматик',
    description: 'Запустил с нуля сайт компании Промматик, наполнил контентом и подключил необходимые сервисы.',
    date: new Date("2017-01-26"),
    cost: 123,
    link: 'https://testlink',
    image: prommaticwebp,
  },
  {
    name: 'Тестовый текст проекта 1',
    description: 'Тестовое описание проекта тестовое описание проекта 1 тестовое описание проекта 1 тестовое описание проекта',
    date: new Date("2017-01-26"),
    cost: 123,
    link: 'https://testlink',
    image: prommaticwebp,
  },

  {
    name: 'Сайт мебельной компании',
    description: 'Сайт мебельной компании Сайт мебельной компании Сайт мебельной компании Сайт мебельной компании',
    date: new Date("2017-01-26"),
    cost: 123,
    link: 'https://testlink',
    image: prommaticwebp,
  },
  {
    name: 'Сайт мебельной компании',
    description: 'Сайт мебельной компании Сайт мебельной компании Сайт мебельной компании Сайт мебельной компании',
    date: new Date("2017-01-26"),
    cost: 123,
    link: 'https://testlink',
    image: project1,
  },
]
