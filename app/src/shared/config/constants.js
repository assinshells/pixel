const BLOCK_SIZE = 10;
const GRID_SIZE = 1000;
const BLOCKS = GRID_SIZE / BLOCK_SIZE;
const BLOCK_PRICE = 100;

const ADS_CONFIG = [
  {
    blocks: [{ x: 5, y: 5 }],
    bannerUrl:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><rect width="10" height="10" fill="%234CAF50"/><text x="5" y="7" font-size="6" fill="white" text-anchor="middle">Ad</text></svg>',
    websiteUrl: "https://example.com",
    altText: "Example 1x1 Advertisement",
  },
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
];
