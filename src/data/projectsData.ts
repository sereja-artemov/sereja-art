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
  year?: number,
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
    image: 'https://sereja-art.ru/upload/projects/family-budget-calculator-960x540.jpg',
    previewImage: 'https://sereja-art.ru/upload/projects/family-budget-calculator-960x540.jpg',
    tools: ["HTML", "CSS", "JS", "React", "Дизайн"],
    year: 2023,
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
    tools: ["1C-Bitrix", "Aspro","SEO", "Битрикс24", "Bicall"],
    year: 2023,
    active: true,
  },

  {
    name: 'CakeDreams - сайт кондитерской',
    description: 'Разработал с нуля сайт кондитерской. Прототипирование, дизайн-макет, верстка, программирование.',
    date: new Date("2017-01-26"),
    cost: 123,
    links: {
      detailLink: '#',
      githubLink: 'https://github.com/sereja-artemov',
      buildLink: '#'
    },
    image: 'https://sereja-art.ru/upload/projects/cakedreams_1280x720.png',
    previewImage: 'https://sereja-art.ru/upload/projects/cakedreams_1280x720.png',
    tools: ["HTML", "CSS", "JS", "Photoshop"],
    year: 2023,
    active: true,
  },

  {
    name: 'AntFarm - домашняя муравьиная ферма',
    description: 'Провел маркетинговое исследование, разработал прототип и дизайн-макет сайта, сверстал и запустил в работу.',
    date: new Date("2017-01-26"),
    cost: 123,
    links: {
      detailLink: '#',
      githubLink: 'https://github.com/sereja-artemov',
      buildLink: '#'
    },
    image: 'https://sereja-art.ru/upload/projects/ant-farm_1280x720.png',
    previewImage: 'https://sereja-art.ru/upload/projects/ant-farm_1280x720.png',
    tools: ["HTML", "CSS", "JS", "Photoshop", "Bicall"],
    year: 2023,
    active: true,
  },

  {
    name: 'Глория - клуб любителей кошек',
    description: 'Разработал прототип и дизайн-макет сайта, выполнил адаптивную верстку.',
    date: new Date("2017-01-26"),
    cost: 123,
    links: {
      detailLink: '#',
      githubLink: 'https://github.com/sereja-artemov',
      buildLink: '#'
    },
    image: 'https://sereja-art.ru/upload/projects/gloria_1280x720.png',
    previewImage: 'https://sereja-art.ru/upload/projects/gloria_1280x720.png',
    tools: ["HTML", "CSS", "JS", "Photoshop"],
    year: 2023,
    active: true,
  },

  {
    name: 'Сайт-портфолио фотографа',
    description: 'Разработал прототип и дизайн-макет сайта, выполнил адаптивную верстку.',
    date: new Date("2018-01-26"),
    cost: 123,
    links: {
      detailLink: '',
      githubLink: '',
      buildLink: ''
    },
    image: 'https://sereja-art.ru/upload/projects/photographer-site_1024.webp',
    previewImage: 'https://sereja-art.ru/upload/projects/photographer-site_1024.webp',
    tools: ["HTML", "CSS", "JS", "Photoshop"],
    year: 2020,
    active: true,
  },
]
