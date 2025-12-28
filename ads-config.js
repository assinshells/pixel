// Конфигурация рекламных баннеров
// Продавец редактирует этот файл для добавления новых баннеров

const ADS_CONFIG = [
  // Пример 1: Одиночный блок (1x1)
  {
    blocks: [{ x: 5, y: 5 }],
    bannerUrl:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><rect width="10" height="10" fill="%234CAF50"/><text x="5" y="7" font-size="6" fill="white" text-anchor="middle">Ad</text></svg>',
    websiteUrl: "https://example.com",
    altText: "Example 1x1 Advertisement",
  },

  // Пример 2: Блок 5x5 (25 блоков)
  {
    blocks: [
      { x: 10, y: 10 },
      { x: 11, y: 10 },
      { x: 12, y: 10 },
      { x: 13, y: 10 },
      { x: 14, y: 10 },
      { x: 10, y: 11 },
      { x: 11, y: 11 },
      { x: 12, y: 11 },
      { x: 13, y: 11 },
      { x: 14, y: 11 },
      { x: 10, y: 12 },
      { x: 11, y: 12 },
      { x: 12, y: 12 },
      { x: 13, y: 12 },
      { x: 14, y: 12 },
      { x: 10, y: 13 },
      { x: 11, y: 13 },
      { x: 12, y: 13 },
      { x: 13, y: 13 },
      { x: 14, y: 13 },
      { x: 10, y: 14 },
      { x: 11, y: 14 },
      { x: 12, y: 14 },
      { x: 13, y: 14 },
      { x: 14, y: 14 },
    ],
    bannerUrl:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><rect width="50" height="50" fill="%232196F3"/><text x="25" y="28" font-size="12" fill="white" text-anchor="middle" font-weight="bold">5x5 Ad</text></svg>',
    websiteUrl: "https://bigcompany.com",
    altText: "Premium 5x5 Advertisement Space",
  },

  // ========================================
  // ИНСТРУКЦИЯ ДЛЯ ДОБАВЛЕНИЯ НОВЫХ БАННЕРОВ:
  // ========================================
  //
  // 1. Получите от покупателя:
  //    - Координаты блоков (выводятся в console.log)
  //    - Файл баннера
  //    - URL сайта
  //    - Описание
  //
  // 2. Загрузите баннер на сервер (в папку banners/)
  //
  // 3. Добавьте новый объект в массив выше:
  //
  // ,{
  //   blocks: [
  //     {x: 0, y: 0}, {x: 1, y: 0}  // координаты из console.log
  //   ],
  //   bannerUrl: 'banners/client-banner.jpg',  // путь к загруженному баннеру
  //   websiteUrl: 'https://client-website.com',
  //   altText: 'Client Advertisement Description'
  // }
  //
  // 4. Сохраните файл и загрузите на сервер
  //
];
