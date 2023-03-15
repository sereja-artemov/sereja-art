// Добавляем \u00A0 вместо пробелов, чтобы корректно работала заливка текста

export const navigationRoutes = [
  {
    route: '/',
    name: 'Главная',
  },
  {
    route: '/about',
    name: `Обо\u00A0мне`,
  },
  {
    route: '#',
    name: 'Портфолио',
  },
  {
    route: '#',
    name: 'Услуги',
  },
  {
    route: '/blogs',
    name: 'Блог',
  },
  {
    route: '/projects',
    name: 'Проекты',
  },
  {
    route: '#',
    name: 'Контакты',
  },
];
