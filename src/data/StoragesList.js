const Storages = [
  {
    name: "WD Blue SN580 NVMe Gen4 1TB",
    brand: "Western Digital",
    description: "NVMe Gen4 M.2 SSD, ~4150 MB/s read",
    price: 5999,
    oldPrice: 7500,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/61tANhen+JL._SY355_.jpg"
  },
  {
    name: "Kingston NV2 NVMe Gen4 1TB",
    brand: "Kingston",
    description: "Gen4 NVMe SSD, ~3500 MB/s read",
    price: 5799,
    oldPrice: 7000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/41EQn4KxSZL._SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    name: "Crucial P3 Plus NVMe Gen4 500GB",
    brand: "Crucial",
    description: "Gen4 NVMe SSD, ~4700 MB/s read",
    price: 4299,
    oldPrice: 5500,
    discountPercent: null,
    image: "https://s7d1.scene7.com/is/image/Microntechnologycrucialprod/crucial-p3-plus-ssd-flat-front-image?$responsive.jpg$"
  },
  {
    name: "Samsung 980 NVMe Gen3 500GB",
    brand: "Samsung",
    description: "Gen3 NVMe SSD, ~3500 MB/s read",
    price: 4899,
    oldPrice: 6000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/31Bu5Rkn6gL._SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    name: "WD Green SATA 480GB",
    brand: "Western Digital",
    description: "SATA III SSD, ~545 MB/s read",
    price: 3199,
    oldPrice: 4000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/61MMxdpiUEL._SY355_.jpg"
  },
  {
    name: "Crucial BX500 SATA 500GB",
    brand: "Crucial",
    description: "SATA III 2.5″ SSD, ~550 MB/s sequential",
    price: 3300,
    oldPrice: 4200,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/41t2uPN1ayL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    name: "Samsung 990 Pro NVMe Gen4 1TB",
    brand: "Samsung",
    description: "High‑end Gen4 NVMe SSD, ~7000 MB/s read",
    price: 10700,
    oldPrice: 12500,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/71XHEQZZW+L._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    name: "XPG GAMMIX S70 Blade 2TB",
    brand: "XPG",
    description: "Gen4 NVMe SSD, ~7400 MB/s read",
    price: 11000,
    oldPrice: 14000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/61qeRmGZgtL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    name: "Crucial T500 Gen4 1TB (with Heatsink)",
    brand: "Crucial",
    description: "PCIe Gen4 NVMe with heatsink, ~7300 MB/s",
    price: 14500,
    oldPrice: 18000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/51cl+g8zHpL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    name: "WD Black SN850X NVMe Gen4 1TB",
    brand: "Western Digital",
    description: "High‑performance Gen4 SSD, ~7000 MB/s",
    price: 12500,
    oldPrice: 15000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/61KeSQhDm4L._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    name: "Seagate Barracuda HDD 1TB",
    brand: "Seagate",
    description: "7200 RPM SATA internal HDD",
    price: 11000,
    oldPrice: 13800,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/71OhMJwP9xL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    name: "Seagate Barracuda HDD 2TB",
    brand: "Seagate",
    description: "7200 RPM SATA internal HDD",
    price: 14500,
    oldPrice: 15500,
    discountPercent: null,
    image: "https://th.bing.com/th/id/OPAC.w4ZGgDyHeKQkTQ474C474?w=130&h=78&c=17&o=6&cb=thwsc4&dpr=1.3&pid=21.1"
  },
  {
    name: "Seagate FireCuda 510 SSD 1TB",
    brand: "Seagate",
    description: "NVMe SSD optimized for gaming",
    price: 23500,
    oldPrice: 27000,
    discountPercent: null,
    image: "https://th.bing.com/th?id=OPAC.%2fUes4zxay1XoFg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
  },
  {
    name: "WD Red NAS HDD 4TB",
    brand: "Western Digital",
    description: "NAS‑rated 5400 RPM HDD, reliable long‑term",
    price: 9500,
    oldPrice: 11000,
    discountPercent: null,
    image: "https://th.bing.com/th/id/OPAC.gSkeAtxNNSHwTA474C474?w=592&h=550&o=5&dpr=1.3&pid=21.1"
  },
  {
    name: "WD Blue SN570 NVMe 1TB",
    brand: "Western Digital",
    description: "Gen3 NVMe SSD, ~3000 MB/s read",
    price: 7000,
    oldPrice: 8000,
    discountPercent: null,
    image: "https://th.bing.com/th/id/OPAC.OMnzeJIeGg9EaQ474C474?w=592&h=550&o=5&dpr=1.3&pid=21.1"
  },
  {
    name: "Crucial P3 1TB NVMe Gen3",
    brand: "Crucial",
    description: "PCIe Gen3 NVMe SSD, ~3500 MB/s",
    price: 4600,
    oldPrice: 5800,
    discountPercent: null,
    image: "https://th.bing.com/th/id/OPAC.JJfLlwq0ahryuA474C474?w=200&h=150&c=17&dpr=1.3&pid=21.1"
  },
  {
    name: "Crucial MX500 SATA 1TB",
    brand: "Crucial",
    description: "2.5″ SATA SSD, solid reliability",
    price: 15000,
    oldPrice: 17500,
    discountPercent: null,
    image: "https://th.bing.com/th?id=OPAC.5%2fDJ9WvZHvkfrw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
  },
  {
    name: "Samsung 870 EVO SATA 1TB",
    brand: "Samsung",
    description: "Reliable SATA SSD, ~560 MB/s",
    price: 12000,
    oldPrice: 13000,
    discountPercent: null,
    image: "https://th.bing.com/th?id=OPAC.zcf7FQQHtJ8%2fMw474C474&w=592&h=550&o=5&pid=21.1"
  },
  {
    name: "Adata SD810 External SSD 1TB",
    brand: "Adata",
    description: "Fast external SSD (~2000 MB/s) portable",
    price: 12000,
    oldPrice: 15000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/31-x3yN8OLL._SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    name: "LaCie Rugged Mini HDD 2TB",
    brand: "LaCie",
    description: "Rugged external HDD for backup",
    price: 10000,
    oldPrice: 13000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/81h+P-kLOnL._AC_UY327_FMwebp_QL65_.jpg"
  }
];

// calculate discountPercent
Storages.forEach(item => {
  if (item.oldPrice && item.price && item.oldPrice > item.price) {
    item.discountPercent = Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100);
  } else {
    item.discountPercent = 0;
  }
});
export default Storages;
