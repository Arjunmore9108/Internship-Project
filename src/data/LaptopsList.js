const Laptops = [
  // 1. HP Pavilion 15
  { 
    id: "hp-pavilion-15",
    name: "HP Pavilion 15",
    brand: "HP",
    category: "Budget",
    description: "15.6-inch FHD, Intel Core i5-1235U, 8GB RAM",
    price: 54990,
    oldPrice: 59990,
    discountPercent: 8,
    image: "https://m.media-amazon.com/images/I/61X4ea4j0pL._AC_UY218_.jpg",
    specifications: {
      processor: "Intel Core i5-1235U (10 cores, 12 threads)",
      graphics: "Intel Iris Xe Graphics",
      display: "15.6-inch FHD (1920x1080) IPS",
      memory: "8GB DDR4",
      storage: "512GB NVMe SSD",
      operatingSystem: "Windows 11 Home",
      battery: "41Wh",
      ports: "1x USB-C, 2x USB-A, HDMI, SD card reader",
      weight: "1.75 kg",
      dimensions: "35.85 x 23.5 x 1.79 cm"
    },
    features: [
      "Backlit keyboard",
      "HP Audio Boost",
      "Fast charging"
    ],
    warranty: "1-year limited warranty"
  },

  // 2. Dell Inspiron 14 5000
  {
    id: "dell-inspiron-14-5000",
    name: "Dell Inspiron 14 5000",
    brand: "Dell",
    category: "Budget",
    description: "14-inch FHD, Intel Core i5-1235U, 16GB RAM",
    price: 62990,
    oldPrice: 67990,
    discountPercent: 7,
    image: "https://m.media-amazon.com/images/I/71Xuv0mq3LL._AC_UY218_.jpg",
    specifications: {
      processor: "Intel Core i5-1235U (10 cores, 12 threads)",
      graphics: "Intel Iris Xe Graphics",
      display: "14-inch FHD (1920x1080) IPS",
      memory: "16GB DDR4",
      storage: "512GB NVMe SSD",
      operatingSystem: "Windows 11 Home",
      battery: "42Wh",
      ports: "1x USB-C, 2x USB-A, HDMI, SD card reader",
      weight: "1.5 kg",
      dimensions: "32.2 x 21.3 x 1.79 cm"
    },
    features: [
      "Fingerprint reader",
      "Backlit keyboard",
      "Waves MaxxAudio Pro"
    ],
    warranty: "1-year limited warranty"
  },

  // 3. Acer Swift 3
  {
    id: "acer-swift-3",
    name: "Acer Swift 3",
    brand: "Acer",
    category: "Ultrabook",
    description: "14-inch FHD, AMD Ryzen 7 5700U, 8GB RAM",
    price: 67990,
    oldPrice: 72990,
    discountPercent: 7,
    image: "https://m.media-amazon.com/images/I/81RAueA5gyL._AC_UY218_.jpg",
    specifications: {
      processor: "AMD Ryzen 7 5700U (8 cores, 16 threads)",
      graphics: "Integrated AMD Radeon Graphics",
      display: "14-inch FHD (1920x1080) IPS",
      memory: "8GB LPDDR4X",
      storage: "512GB NVMe SSD",
      operatingSystem: "Windows 11 Home",
      battery: "48Wh",
      ports: "1x USB-C, 2x USB-A, HDMI",
      weight: "1.2 kg",
      dimensions: "31.2 x 22.7 x 1.59 cm"
    },
    features: [
      "Backlit keyboard",
      "Fingerprint reader",
      "Wi-Fi 6"
    ],
    warranty: "1-year international warranty"
  },

  // 4. ASUS ZenBook 14
  {
    id: "asus-zenbook-14",
    name: "ASUS ZenBook 14",
    brand: "ASUS",
    category: "Ultrabook",
    description: "14-inch FHD, Intel Core i7-1260P, 16GB RAM",
    price: 89990,
    oldPrice: 94990,
    discountPercent: 5,
    image: "https://m.media-amazon.com/images/I/71PHl2RQHBL._AC_UY218_.jpg",
    specifications: {
      processor: "Intel Core i7-1260P (12 cores, 16 threads)",
      graphics: "Intel Iris Xe Graphics",
      display: "14-inch FHD (1920x1080) IPS",
      memory: "16GB LPDDR5",
      storage: "1TB NVMe SSD",
      operatingSystem: "Windows 11 Home",
      battery: "63Wh",
      ports: "2x Thunderbolt 4, 1x USB-A, HDMI",
      weight: "1.22 kg",
      dimensions: "31.9 x 19.9 x 1.59 cm"
    },
    features: [
      "NanoEdge display",
      "Backlit keyboard",
      "Harman Kardon audio"
    ],
    warranty: "2-year global warranty"
  },

  // 5. Apple MacBook Pro 14-inch M2 Pro
  {
    id: "apple-macbook-pro-14-inch-m2-pro",
    name: "Apple MacBook Pro 14-inch M2 Pro",
    brand: "Apple",
    category: "Ultrabook",
    description: "14.2-inch Liquid Retina XDR, Apple M2 Pro, 16GB RAM",
    price: 199900,
    oldPrice: null,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/511CLoNcwUL._AC_UY218_.jpg",
    specifications: {
      processor: "Apple M2 Pro (10-core CPU, 16-core GPU)",
      graphics: "Integrated 16-core GPU",
      display: "14.2-inch Liquid Retina XDR (3024x1964)",
      memory: "16GB unified memory",
      storage: "512GB SSD",
      operatingSystem: "macOS",
      battery: "70Wh, up to 17 hours",
      ports: "3x Thunderbolt 4, HDMI, SDXC card slot, MagSafe 3",
      weight: "1.6 kg",
      dimensions: "31.26 x 22.12 x 1.55 cm"
    },
    features: [
      "ProMotion technology",
      "1080p FaceTime HD camera",
      "Six-speaker sound system",
      "Touch Bar",
      "Touch ID"
    ],
    warranty: "1-year limited warranty"
  },

  // 6. Lenovo ThinkPad X1 Carbon Gen 10
  {
    id: "lenovo-thinkpad-x1-carbon-gen-10",
    name: "Lenovo ThinkPad X1 Carbon Gen 10",
    brand: "Lenovo",
    category: "Ultrabook",
    description: "14-inch UHD, Intel Core i7-1260P, 16GB RAM",
    price: 159990,
    oldPrice: 169990,
    discountPercent: 6,
    image: "https://m.media-amazon.com/images/I/617Af4lsBNL.AC_UY218.jpg",
    specifications: {
      processor: "Intel Core i7-1260P (12 cores, 16 threads)",
      graphics: "Intel Iris Xe Graphics",
      display: "14-inch UHD (3840x2400) IPS",
      memory: "16GB LPDDR5",
      storage: "1TB NVMe SSD",
      operatingSystem: "Windows 11 Pro",
      battery: "57Wh",
      ports: "2x Thunderbolt 4, 2x USB-A, HDMI 2.0",
      weight: "1.13 kg",
      dimensions: "31.2 x 22.2 x 1.55 cm"
    },
    features: [
      "MIL-STD-810H tested",
      "Backlit keyboard",
      "Dolby Atmos Speaker System"
    ],
    warranty: "3-year onsite warranty"
  },

  // 7. HP Omen 16
  {
    id: "hp-omen-16",
    name: "HP Omen 16",
    brand: "HP",
    category: "Gaming",
    description: "16.1-inch FHD 144Hz, Intel Core i7-12700H, RTX 3060",
    price: 124990,
    oldPrice: 134990,
    discountPercent: 7,
    image: "https://m.media-amazon.com/images/I/51ul010CLsL.AC_UY218.jpg",
    specifications: {
      processor: "Intel Core i7-12700H (14 cores, 20 threads)",
      graphics: "NVIDIA GeForce RTX 3060 (6GB GDDR6)",
      display: "16.1-inch FHD (1920x1080) 144Hz IPS",
      memory: "16GB DDR4",
      storage: "1TB NVMe SSD",
      operatingSystem: "Windows 11 Home",
      battery: "70Wh",
      ports: "1x USB-C, 3x USB-A, HDMI 2.1, Mini DisplayPort",
      weight: "2.46 kg",
      dimensions: "36.1 x 26.6 x 2.49 cm"
    },
    features: [
      "OMEN Tempest Cooling Technology",
      "Per-key RGB keyboard",
      "Killer Wi-Fi 6"
    ],
    warranty: "1-year limited warranty"
  },

  // 8. Dell G15 5511
  {
    id: "dell-g15-5511",
    name: "Dell G15 5511",
    brand: "Dell",
    category: "Gaming",
    description: "15.6-inch FHD 120Hz, Intel Core i7-11800H, RTX 3050 Ti",
    price: 89990,
    oldPrice: 94990,
    discountPercent: 5,
    image: "https://m.media-amazon.com/images/I/61LOOMpEgxL.AC_UY218.jpg",
    specifications: {
      processor: "Intel Core i7-11800H (8 cores, 16 threads)",
      graphics: "NVIDIA GeForce RTX 3050 Ti (4GB GDDR6)",
      display: "15.6-inch FHD (1920x1080) 120Hz IPS",
      memory: "16GB DDR4",
      storage: "512GB NVMe SSD",
      operatingSystem: "Windows 11 Home",
      battery: "56Wh",
      ports: "1x USB-C, 3x USB-A, HDMI 2.1, RJ45",
      weight: "2.66 kg",
      dimensions: "36.3 x 27.1 x 2.54 cm"
    },
    features: [
      "Alienware-inspired cooling",
      "RGB backlit keyboard",
      "Waves MaxxAudio Pro"
    ],
    warranty: "1-year limited warranty"
  },

  // 9. Acer Nitro 5
  {
    id: "acer-nitro-5",
    name: "Acer Nitro 5",
    brand: "Acer",
    category: "Gaming",
    description: "15.6-inch FHD 144Hz, Intel Core i5-12500H, RTX 3050",
    price: 74990,
    oldPrice: 79990,
    discountPercent: 6,
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/a/u/0/-original-imahcyzvyerzhzrv.jpeg?q=70",
    specifications: {
      processor: "Intel Core i5-12500H (12 cores, 16 threads)",
      graphics: "NVIDIA GeForce RTX 3050 (4GB GDDR6)",
      display: "15.6-inch FHD (1920x1080) 144Hz IPS",
      memory: "8GB DDR4",
      storage: "512GB NVMe SSD",
      operatingSystem: "Windows 11 Home",
      battery: "57.5Wh",
      ports: "1x USB-C, 3x USB-A, HDMI 2.1, RJ45",
      weight: "2.3 kg",
      dimensions: "36.3 x 25.5 x 2.39 cm"
    },
    features: [
      "CoolBoost technology",
      "RGB backlit keyboard",
      "Killer Ethernet E2600"
    ],
    warranty: "1-year international warranty"
  },

  // 10. ASUS TUF Gaming F15
  {
    id: "asus-tuf-gaming-f15",
    name: "ASUS TUF Gaming F15",
    brand: "ASUS",
    category: "Gaming",
    description: "15.6-inch FHD 144Hz, Intel Core i7-12700H, RTX 4050",
    price: 114990,
    oldPrice: 119990,
    discountPercent: 4,
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/7/o/m/-original-imahcd9mmfjacw2m.jpeg?q=70",
    specifications: {
      processor: "Intel Core i7-12700H (14 cores, 20 threads)",
      graphics: "NVIDIA GeForce RTX 3060 (6GB GDDR6)",
      display: "15.6-inch FHD (1920x1080) 144Hz IPS",
      memory: "16GB DDR5",
      storage: "1TB NVMe SSD",
      operatingSystem: "Windows 11 Home",
      battery: "48Wh",
      ports: "1x USB-C, 3x USB-A, HDMI 2.0b, RJ45",
      weight: "2.3 kg",
      dimensions: "35.9 x 25.5 x 2.39 cm"
    },
    features: [
      "TUF Gaming cooling system",
      "RGB backlit keyboard",
      "Military-grade durability"
    ],
    warranty: "2-year global warranty"
  },

  // 11. Apple MacBook Air 13-inch M2
  {
    id: "apple-macbook-air-13-inch-m2",
    name: "Apple MacBook Air 13-inch M2",
    brand: "Apple",
    category: "Ultrabook",
    description: "13.6-inch Liquid Retina, Apple M2, 8GB RAM",
    price: 119900,
    oldPrice: null,
    discountPercent: null,
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/2/v/v/-original-imagfdeqter4sj2j.jpeg?q=70",
    specifications: {
      processor: "Apple M2 (8-core CPU, 10-core GPU)",
      graphics: "Integrated 10-core GPU",
      display: "13.6-inch Liquid Retina (2560x1664)",
      memory: "8GB unified memory",
      storage: "256GB SSD",
      operatingSystem: "macOS",
      battery: "52.6Wh, up to 18 hours",
      ports: "2x Thunderbolt / USB 4, MagSafe 3",
      weight: "1.24 kg",
      dimensions: "30.41 x 21.5 x 1.13 cm"
    },
    features: [
      "Fanless design",
      "1080p FaceTime HD camera",
      "Touch ID",
      "Backlit Magic Keyboard"
    ],
    warranty: "1-year limited warranty"
  },

  // 12. Lenovo IdeaPad Slim 5
  {
    id: "lenovo-ideapad-slim-5",
    name: "Lenovo IdeaPad Slim 5",
    brand: "Lenovo",
    category: "Ultrabook",
    description: "15.6-inch FHD, AMD Ryzen 5 5500U, 8GB RAM",
    price: 45990,
    oldPrice: 49990,
    discountPercent: 8,
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/i/i/v/-original-imahex3thhe9bhhd.jpeg?q=70",
    specifications: {
      processor: "AMD Ryzen 5 5500U (6 cores, 12 threads)",
      graphics: "Integrated AMD Radeon Graphics",
      display: "15.6-inch FHD (1920x1080) IPS",
      memory: "8GB DDR4",
      storage: "512GB NVMe SSD",
      operatingSystem: "Windows 11 Home",
      battery: "52.5Wh",
      ports: "1x USB-C, 2x USB-A, HDMI",
      weight: "1.66 kg",
      dimensions: "35.7 x 23.2 x 1.79 cm"
    },
    features: [
      "Backlit keyboard",
      "Dolby Audio",
      "Fingerprint reader"
    ],
    warranty: "1-year onsite warranty"
  },

  // 13. HP Envy x360 13
  {
    id: "hp-envy-x360-13",
    name: "HP Envy x360 13",
    brand: "HP",
    category: "Ultrabook",
    description: "13.3-inch FHD Touch, AMD Ryzen 7 5825U, 16GB RAM",
    price: 84990,
    oldPrice: 89990,
    discountPercent: 6,
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/j/d/g/-original-imahcd9cmuhpfywd.jpeg?q=70",
    specifications: {
      processor: "AMD Ryzen 7 5700U (8 cores, 16 threads)",
      graphics: "Integrated AMD Radeon Graphics",
      display: "13.3-inch FHD (1920x1080) Touch IPS",
      memory: "16GB DDR4",
      storage: "512GB NVMe SSD",
      operatingSystem: "Windows 11 Home",
      battery: "51Wh",
      ports: "1x USB-C, 2x USB-A, HDMI",
      weight: "1.3 kg",
      dimensions: "30.6 x 21.6 x 1.69 cm"
    },
    features: [
      "360-degree hinge",
      "Backlit keyboard",
      "Fingerprint reader"
    ],
    warranty: "1-year limited warranty"
  }
];
export default Laptops;