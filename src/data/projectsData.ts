import project1 from '@/images/projects/project1.png';
import prommaticwebp from '@/images/projects/prommatic.webp';

import {StaticImageData} from 'next/image';

export interface project {
  name: string,
  description: string,
  date: number | string | Date,
  cost: number,
  links: { detailLink: string, githubLink: string, buildLink?: string },
  image: string | StaticImageData,
  previewImage:  string | StaticImageData,
  tools: string[],
  active: boolean,
}

export const projectsData: project[] = [
  {
    name: 'Сайт производственной компании Промматик',
    description: 'Запустил с нуля сайт компании Промматик, наполнил контентом и подключил необходимые сервисы.',
    date: new Date("2017-01-26"),
    cost: 123,
    links: {
      detailLink: '#',
      githubLink: '#',
      buildLink: '#'
    },
    image: prommaticwebp,
    previewImage: prommaticwebp,
    tools: ["1C-Bitrix", "Aspro", "Битрикс24"],
    active: true,
  },
  {
    name: 'Сайт производственной компании Промматик',
    description: 'Запустил с нуля сайт компании Промматик, наполнил контентом и подключил необходимые сервисы.',
    date: new Date("2017-01-26"),
    cost: 123,
    links: {
      detailLink: '#',
      githubLink: '#',
    },
    image: prommaticwebp,
    previewImage: prommaticwebp,
    tools: ["1C-Bitrix", "Aspro", "Битрикс24"],
    active: true,
  },
  {
    name: 'Сайт производственной компании Промматик',
    description: 'Запустил с нуля сайт компании Промматик, наполнил контентом и подключил необходимые сервисы.',
    date: new Date("2017-01-26"),
    cost: 123,
    links: {
      detailLink: '#',
      githubLink: '#',
    },
    image: prommaticwebp,
    previewImage: prommaticwebp,
    tools: ["1C-Bitrix", "Aspro", "Битрикс24"],
    active: true,
  },
  {
    name: 'Сайт производственной компании Промматик',
    description: 'Запустил с нуля сайт компании Промматик, наполнил контентом и подключил необходимые сервисы.',
    date: new Date("2017-01-26"),
    cost: 123,
    links: {
      detailLink: '#',
      githubLink: '#',
    },
    image: prommaticwebp,
    previewImage: prommaticwebp,
    tools: ["1C-Bitrix", "Aspro", "Битрикс24"],
    active: true,
  },
  {
    name: 'Сайт производственной компании Промматик',
    description: 'Запустил с нуля сайт компании Промматик, наполнил контентом и подключил необходимые сервисы.',
    date: new Date("2017-01-26"),
    cost: 123,
    links: {
      detailLink: '#',
      githubLink: '#',
    },
    image: prommaticwebp,
    previewImage: prommaticwebp,
    tools: ["1C-Bitrix", "Aspro", "Битрикс24"],
    active: true,
  },

]
