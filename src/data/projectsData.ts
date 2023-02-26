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
    name: 'Калькулятор семейного бюджета',
    description: 'Финансовый вопрос – важный аспект семейной жизни. Многие пары расстаются из-за разногласий в формировании бюджета, а ведь коммуналку проще платить вдвоем. Иначе, зачем оно всё?',
    date: new Date("2017-01-26"),
    cost: 123,
    links: {
      detailLink: '#',
      githubLink: '#',
    },
    image: 'https://sereja-art.ru/upload/family-budget-calculator-960x540.jpg',
    previewImage: 'https://sereja-art.ru/upload/family-budget-calculator-960x540.jpg',
    tools: ["1C-Bitrix", "Aspro", "Битрикс24"],
    active: true,
  },
  {
    name: 'Сайт производственной компании Промматик',
    description: 'Запустил с нуля сайт компании Промматик, наполнил контентом, сделал базовую SEO-оптимизацию и подключил необходимые сервисы.',
    date: new Date("2017-01-26"),
    cost: 123,
    links: {
      detailLink: '#',
      githubLink: 'https://github.com/sereja-artemov',
      buildLink: '#'
    },
    image: prommaticwebp,
    previewImage: prommaticwebp,
    tools: ["1C-Bitrix", "Aspro", "Битрикс24", "SEO", "Bicall"],
    active: true,
  },
  {
    name: 'Калькулятор семейного бюджета',
    description: 'Запустил с нуля сайт компании Промматик, наполнил контентом и подключил необходимые сервисы.',
    date: new Date("2017-01-26"),
    cost: 123,
    links: {
      detailLink: '#',
      githubLink: '#',
    },
    image: 'https://sereja-art.ru/upload/family-budget-calculator-960x540.jpg',
    previewImage: 'https://sereja-art.ru/upload/family-budget-calculator-960x540.jpg',
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
      githubLink: 'https://github.com/sereja-artemov',
    },
    image: prommaticwebp,
    previewImage: prommaticwebp,
    tools: ["1C-Bitrix", "Aspro", "Битрикс24", "SEO", "Bicall"],
    active: true,
  },

]
