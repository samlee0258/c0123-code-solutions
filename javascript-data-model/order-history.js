var orderHistory = [
  {
    orderPlaced: 'August 4, 2020',
    total: 34,
    shipTo: 'JS Masher',
    orderNumber: '114-3941689-8772232',
    items: [
      {
        delivered: 'Aug 8, 2020',
        title: 'JavaScript for Impatient programmers',
        author: 'Rauschmayer, Dr. Axel',
        returnWindow: 'Return window closed on Sep 7, 2020',
        cost: 31.55
      }
    ]
  },
  {
    orderPlaced: 'July 19, 2020',
    total: 44.53,
    shipTo: 'JS Masher',
    orderNumber: '113-9984268-1280257',
    items: [
      {
        delivered: 'Jul 20, 2020',
        title: 'The Timeless Way of Building',
        author: 'Alexander, Christopher',
        returnWindow: 'Return window closed on Aug 19, 2020',
        cost: 41.33
      }
    ]
  },
  {
    orderPlaced: 'July 4, 2020',
    total: 17.22,
    shipTo: 'JS Masher',
    orderNumber: '114-2875557-9059409',
    items: [
      {
        delivered: 'Jul 7, 2020',
        title: 'Gamecube controller Adapter. Super Smash Bros Switch Gamecube Adapter for Wii U, PC. Support Turbo and Vibration reatures. No Driver and NO Lag-Gamecube Adapter',
        author: null,
        returnWindow: 'Return window closed on Aug 5, 2020',
        cost: 15.98
      }
    ]
  },
  {
    orderPlaced: 'July 3, 2020',
    total: 138.93,
    shipTo: 'JS Masher',
    orderNumber: '113-2883177-2648248',
    items: [
      {
        delivered: 'Jul 5, 2020',
        title: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        author: null,
        returnWindow: 'Return window closed on Aug 4, 2020',
        cost: 94.95
      },
      {
        delivered: 'Jul 5, 2020',
        title: 'The Art of Sql',
        author: 'Faroult, Stephane',
        returnWindow: 'Return window closed on Aug 4, 2020',
        cost: 33.99
      }
    ]
  }
];

console.log('title of book for orderNumber 8772232:', orderHistory[0].items[0].title);
console.log('total for orderNumber 9059409:', orderHistory[3].total);
console.log('author of item 1 for orderNumber 2648248:', orderHistory[3].items[0].author);
