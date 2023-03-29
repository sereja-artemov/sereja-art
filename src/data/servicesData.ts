import { StaticImageData } from 'next/image';

interface service {
  group: string,
  services: object[],
}

export const servicesData:  service[] = [
  {
    group: 'Разработка сайтов',
    services: [
      {
        name: 'Адаптивная верстка',
        cost: '400'
      },
      {
        name: 'Сайт на Tilda',
        cost: '5000'
      },
      {
        name: 'Сайт на готовом решении Bitrix',
        cost: '20000'
      },
    ],
  },
  {
    group: 'Сопровождение сайтов',
    services: [
      {
        name: 'Наполнение контентом',
        cost: '400'
      },
      {
        name: 'Администрирование',
        cost: '500'
      },
      {
        name: 'Ускорение сайта',
        cost: '2000'
      },
      {
        name: 'Очистка от мусора',
        cost: '4000'
      },
    ],
  },
]
