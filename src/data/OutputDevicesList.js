const OutputDevices = [
  // Monitors
  {
    id: "lg-ultrafine-32un880-b",
    name: "LG UltraFine 32UN880-B",
    brand: "LG",
    description: "32-inch 4K UHD HDR10 Monitor with Ergo Stand",
    price: 54990,
    oldPrice: 62990,
    discountPercent: 13,
    image: "https://m.media-amazon.com/images/I/71+LUnC2vjL._AC_UY327_FMwebp_QL65_.jpg",
    specifications: {
      type: "IPS",
      size: "32-inch",
      resolution: "3840 x 2160 (4K UHD)",
      refreshRate: "60Hz",
      responseTime: "5ms (GTG)",
      brightness: "350 nits",
      colorGamut: "95% DCI-P3",
      ports: ["USB-C (90W PD)", "2x HDMI", "DisplayPort"]
    },
    features: ["HDR10", "AMD FreeSync", "Ergonomic stand"],
    warranty: "3 years"
  },
  {
    id: "samsung-odyssey-g7",
    name: "Samsung Odyssey G7",
    brand: "Samsung",
    description: "27-inch QHD 240Hz Curved Gaming Monitor",
    price: 47990,
    oldPrice: 52990,
    discountPercent: 9,
    image: "https://m.media-amazon.com/images/I/81UUzgE+FIL._AC_UY327_FMwebp_QL65_.jpg",
    specifications: {
      type: "VA",
      size: "27-inch",
      resolution: "2560 x 1440 (QHD)",
      refreshRate: "240Hz",
      responseTime: "1ms (GTG)",
      curvature: "1000R",
      brightness: "350 nits",
      ports: ["2x HDMI 2.0", "DisplayPort 1.4", "USB Hub"]
    },
    features: ["NVIDIA G-Sync Compatible", "QLED", "HDR600"],
    warranty: "2 years"
  },

  // Speakers
  {
    id: "logitech-g560",
    name: "Logitech G560",
    brand: "Logitech",
    description: "LIGHTSYNC RGB PC Gaming Speakers",
    price: 15990,
    oldPrice: 18990,
    discountPercent: 16,
    image: "https://m.media-amazon.com/images/I/51eLUwaKDwL._AC_UY327_FMwebp_QL65_.jpg",
    specifications: {
      configuration: "2.1",
      totalPower: "240W peak",
      drivers: "2x 2.5-inch woofers, 1x 4-inch subwoofer",
      connectivity: ["USB", "3.5mm", "Bluetooth"],
      lighting: "RGB LIGHTSYNC"
    },
    features: ["DTS:X Ultra", "Game/audio visualizer", "Hardware EQ controls"],
    warranty: "2 years"
  },
  {
    id: "bose-companion-20",
    name: "Bose Companion 20",
    brand: "Bose",
    description: "Multimedia Speaker System",
    price: 22990,
    oldPrice: 25990,
    discountPercent: 12,
    image: "https://m.media-amazon.com/images/I/71yPU7oytJL._AC_UY327_FMwebp_QL65_.jpg",
    specifications: {
      configuration: "2.0",
      totalPower: "Not specified",
      drivers: "Proprietary Bose drivers",
      connectivity: ["3.5mm", "USB (for power)"]
    },
    features: ["TrueSpace stereo digital processing", "Volume control pod", "No subwoofer needed"],
    warranty: "1 year"
  },

  // Printers
  {
    id: "epson-ecotank-l3210",
    name: "Epson EcoTank L3210",
    brand: "Epson",
    description: "All-in-One Ink Tank Printer",
    price: 14990,
    oldPrice: 16990,
    discountPercent: 12,
    image: "https://m.media-amazon.com/images/I/514Z574sBBL._AC_UY327_FMwebp_QL65_.jpg",
    specifications: {
      type: "Ink Tank",
      functions: ["Print", "Scan", "Copy"],
      printSpeed: "10 ppm (black), 5 ppm (color)",
      resolution: "5760 x 1440 dpi",
      inkBottlesIncluded: ["Black", "Cyan", "Magenta", "Yellow"],
      connectivity: ["USB", "Wi-Fi"]
    },
    features: ["18,000 pages per ink set", "Refillable tanks", "Compact design"],
    warranty: "1 year"
  },
  {
    id: "hp-laserjet-pro-m29w",
    name: "HP LaserJet Pro M29w",
    brand: "HP",
    description: "Wireless Monochrome Laser Printer",
    price: 12990,
    oldPrice: 14990,
    discountPercent: 13,
    image: "https://m.media-amazon.com/images/I/61in5Gla8RL._AC_UY327_FMwebp_QL65_.jpg",
    specifications: {
      type: "Laser",
      functions: ["Print", "Scan", "Copy"],
      printSpeed: "19 ppm",
      resolution: "600 x 600 dpi",
      connectivity: ["Wi-Fi", "USB"]
    },
    features: ["Automatic duplex printing", "HP Smart App", "Energy Star certified"],
    warranty: "1 year"
  },

  // Projectors
  {
    id: "benq-tk700sti",
    name: "BenQ TK700STi",
    brand: "BenQ",
    description: "4K HDR Gaming Projector",
    price: 119990,
    oldPrice: 129990,
    discountPercent: 8,
    image: "https://m.media-amazon.com/images/I/51W6UYGJ0LL._AC_UY327_FMwebp_QL65_.jpg",
    specifications: {
      resolution: "3840 x 2160 (4K)",
      brightness: "3000 ANSI lumens",
      contrast: "10,000:1",
      throwRatio: "0.9-1.08",
      lampLife: "15,000 hours",
      ports: ["HDMI 2.0", "USB", "Audio Out"]
    },
    features: ["Android TV built-in", "Low input lag (16ms)", "HDR10/HLG"],
    warranty: "3 years"
  },
  {
    id: "xgimi-halo-plus",
    name: "XGIMI Halo+",
    brand: "XGIMI",
    description: "Portable 1080p Smart Projector",
    price: 89990,
    oldPrice: 99990,
    discountPercent: 10,
    image: "https://m.media-amazon.com/images/I/61pzfIkmQgL.AC_UY327_FMwebp_QL65.jpg",
    specifications: {
      resolution: "1920 x 1080 (FHD)",
      brightness: "900 ANSI lumens",
      contrast: "1000:1",
      throwRatio: "1.2:1",
      batteryLife: "2.5 hours"
    },
    features: ["Android TV 10.0", "Harmon Kardon speakers", "Auto keystone correction"],
    warranty: "2 years"
  }
];

export default OutputDevices;