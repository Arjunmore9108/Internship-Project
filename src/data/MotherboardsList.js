const Motherboards = [
  {
    id: "asus-tuf-b650-plus-wifi",
    name: "ASUS TUF Gaming B650‑PLUS WiFi",
    brand: "ASUS",
    description: "AMD AM5 B650, DDR5‑6400+, Wi‑Fi 6, 3×M.2, solid VRMs",
    price: 18000,
    oldPrice: 20000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/41scqVucSuL._SX300_SY300_QL70_FMwebp_.jpg",
    specifications: {
      socket: "AM5",
      chipset: "AMD B650",
      formFactor: "ATX",
      memorySlots: 4,
      maxMemory: 128,
      memoryType: "DDR5",
      memorySpeed: "6400+ MHz (OC)",
      pcieSlots: "1x PCIe 5.0 x16, 1x PCIe 4.0 x16 (x4 mode), 2x PCIe 3.0 x1",
      storage: "3x M.2, 4x SATA 6Gb/s",
      usb: "1x USB 3.2 Gen 2x2 Type-C, 5x USB 3.2 Gen 2, 4x USB 2.0",
      networking: "Wi-Fi 6, 2.5Gb Ethernet",
      audio: "Realtek ALC897 7.1 Channel"
    },
    features: [
      "Military-grade TUF components for durability",
      "Comprehensive cooling with VRM heatsinks and hybrid fan headers",
      "BIOS FlashBack for easy updates",
      "AI Noise Cancellation for clear communication",
      "Aura Sync RGB lighting support"
    ],
    warranty: "3 years"
  },
  {
    id: "msi-mag-b650-tomahawk-wifi",
    name: "MSI MAG B650 Tomahawk WiFi",
    brand: "MSI",
    description: "AMD AM5 B650 ATX, DDR5, PCIe 5.0 GPU, strong VRMs",
    price: 22000,
    oldPrice: 25000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/41XpW2Sp79L._SX300_SY300_QL70_FMwebp_.jpg",
    specifications: {
      socket: "AM5",
      chipset: "AMD B650",
      formFactor: "ATX",
      memorySlots: 4,
      maxMemory: 128,
      memoryType: "DDR5",
      memorySpeed: "6400+ MHz (OC)",
      pcieSlots: "1x PCIe 5.0 x16, 1x PCIe 3.0 x16 (x4 mode), 2x PCIe 3.0 x1",
      storage: "2x M.2, 6x SATA 6Gb/s",
      usb: "1x USB 3.2 Gen 2x2 Type-C, 3x USB 3.2 Gen 2, 4x USB 2.0",
      networking: "Wi-Fi 6E, 2.5Gb Ethernet",
      audio: "Realtek ALC897 7.1 Channel"
    },
    features: [
      "Extended heatsink design for better thermal performance",
      "Core Boost technology with premium power solution",
      "DDR5 memory boost with optimized traces",
      "M.2 Shield Frozr for SSD thermal throttling protection",
      "Mystic Light RGB customization"
    ],
    warranty: "3 years"
  },
  {
    id: "asrock-b650m-hm2-plus",
    name: "ASRock B650M‑H/M.2+",
    brand: "ASRock",
    description: "AMD AM5 B650 mATX, DDR5, M.2 support, ultra‑budget",
    price: 8399,
    oldPrice: 10000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/71FQxzJSG6L._SX679_.jpg",
    specifications: {
      socket: "AM5",
      chipset: "AMD B650",
      formFactor: "Micro-ATX",
      memorySlots: 2,
      maxMemory: 64,
      memoryType: "DDR5",
      memorySpeed: "5600 MHz",
      pcieSlots: "1x PCIe 4.0 x16, 1x PCIe 3.0 x1",
      storage: "1x M.2, 4x SATA 6Gb/s",
      usb: "1x USB 3.2 Gen 1 Type-C, 4x USB 3.2 Gen 1, 4x USB 2.0",
      networking: "1Gb Ethernet",
      audio: "Realtek ALC897 5.1 Channel"
    },
    features: [
      "Compact mATX form factor",
      "Dr. MOS power design for efficiency",
      "PCIe Steel Slot for heavier GPUs",
      "ASRock Polychrome RGB sync",
      "Ultra M.2 (PCIe Gen4 x4)"
    ],
    warranty: "2 years"
  },
  {
    id: "gigabyte-b650m-aorus-pro-ax-wifi",
    name: "Gigabyte B650M AORUS Pro AX WiFi",
    brand: "Gigabyte",
    description: "AMD AM5 B650 mATX, DDR5, Wi‑Fi 6E, 128 GB RAM, 3‑slot M.2",
    price: 21499,
    oldPrice: 24000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/41+Z7-wvIpL._SX300_SY300_.jpg",
    specifications: {
      socket: "AM5",
      chipset: "AMD B650",
      formFactor: "Micro-ATX",
      memorySlots: 4,
      maxMemory: 128,
      memoryType: "DDR5",
      memorySpeed: "6600+ MHz (OC)",
      pcieSlots: "1x PCIe 4.0 x16, 1x PCIe 3.0 x16 (x4 mode)",
      storage: "3x M.2, 4x SATA 6Gb/s",
      usb: "1x USB 3.2 Gen 2x2 Type-C, 6x USB 3.2 Gen 2, 4x USB 2.0",
      networking: "Wi-Fi 6E, 2.5Gb Ethernet",
      audio: "Realtek ALC1220 7.1 Channel"
    },
    features: [
      "12+2+1 phase digital VRM solution",
      "Advanced thermal design with enlarged heatsinks",
      "Dual PCIe 4.0 M.2 with thermal guards",
      "AORUS RGB Fusion 2.0 with addressable LED",
      "Q-Flash Plus for BIOS update without CPU"
    ],
    warranty: "3 years"
  },
  {
    id: "asrock-x670e-steel-legend-wifi",
    name: "ASRock X670E Steel Legend WiFi",
    brand: "ASRock",
    description: "AMD AM5 X670E ATX, PCIe 5.0, Wi‑Fi 7, sturdy VRMs",
    price: 27399,
    oldPrice: 30000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/81qEo6vC01L._SX522_.jpg",
    specifications: {
      socket: "AM5",
      chipset: "AMD X670E",
      formFactor: "ATX",
      memorySlots: 4,
      maxMemory: 128,
      memoryType: "DDR5",
      memorySpeed: "6600+ MHz (OC)",
      pcieSlots: "1x PCIe 5.0 x16, 1x PCIe 4.0 x16 (x4 mode), 1x PCIe 3.0 x1",
      storage: "4x M.2 (2x PCIe 5.0), 8x SATA 6Gb/s",
      usb: "1x USB4 Type-C, 8x USB 3.2 Gen 2, 4x USB 2.0",
      networking: "Wi-Fi 7, 10Gb Ethernet",
      audio: "Realtek ALC1220 7.1 Channel"
    },
    features: [
      "20+2+1 phase power design",
      "PCIe 5.0 ready for next-gen GPUs and SSDs",
      "Premium 60A power chokes",
      "Steel Slot PCIe 5.0 reinforcement",
      "Polychrome RGB with addressable headers"
    ],
    warranty: "3 years"
  },
  {
    id: "asrock-x670e-taichi",
    name: "ASRock X670E Taichi",
    brand: "ASRock",
    description: "AMD AM5 X670E E‑ATX, USB4, PCIe 5.0 ×2, Thunderbolt‑ready",
    price: 53339,
    oldPrice: 60000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/51uPvmPLaZL._SY300_SX300_QL70_FMwebp_.jpg",
    specifications: {
      socket: "AM5",
      chipset: "AMD X670E",
      formFactor: "E-ATX",
      memorySlots: 4,
      maxMemory: 128,
      memoryType: "DDR5",
      memorySpeed: "6600+ MHz (OC)",
      pcieSlots: "2x PCIe 5.0 x16, 1x PCIe 4.0 x1",
      storage: "5x M.2 (3x PCIe 5.0), 8x SATA 6Gb/s",
      usb: "2x USB4 Type-C, 10x USB 3.2 Gen 2, 4x USB 2.0",
      networking: "Wi-Fi 6E, 10Gb Ethernet",
      audio: "Realtek ALC4082 7.1 Channel"
    },
    features: [
      "24+2+1 phase 105A SPS power design",
      "Dual Thunderbolt 4/USB4 Type-C ports",
      "Killer DoubleShot Pro networking",
      "Taichi gear-inspired aesthetic",
      "10-layer PCB for superior signal integrity"
    ],
    warranty: "3 years"
  },
  {
    id: "asus-rog-strix-b650e-f-gaming-wifi",
    name: "ASUS ROG Strix B650E‑F Gaming WiFi",
    brand: "ASUS",
    description: "AMD AM5 B650E ATX, PCIe 5.0 ×1, Wi‑Fi 6E, robust feature‑set",
    price: 34699,
    oldPrice: 38000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/814z1MeUZyL._SX679_.jpg",
    specifications: {
      socket: "AM5",
      chipset: "AMD B650E",
      formFactor: "ATX",
      memorySlots: 4,
      maxMemory: 128,
      memoryType: "DDR5",
      memorySpeed: "6400+ MHz (OC)",
      pcieSlots: "1x PCIe 5.0 x16, 1x PCIe 4.0 x16 (x4 mode), 2x PCIe 3.0 x1",
      storage: "3x M.2 (1x PCIe 5.0), 4x SATA 6Gb/s",
      usb: "1x USB 3.2 Gen 2x2 Type-C, 8x USB 3.2 Gen 2, 4x USB 2.0",
      networking: "Wi-Fi 6E, 2.5Gb Ethernet",
      audio: "Realtek ALC4080 7.1 Channel"
    },
    features: [
      "12+2 phase power stages with 60A rating",
      "ROG Hyper Frequency PWM for precise power",
      "AI Cooling II automatically manages fans",
      "Aura Sync RGB with addressable headers",
      "Pre-mounted I/O shield for easy installation"
    ],
    warranty: "3 years"
  },
  {
    id: "gigabyte-x670-aorus-elite-ax",
    name: "Gigabyte X670 AORUS Elite AX",
    brand: "Gigabyte",
    description: "AMD AM5 X670 ATX, PCIe 5.0 NVMe, Wi‑Fi 6E, strong value",
    price: 26500,
    oldPrice: 29000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/51-QjthVbOL._SX300_SY300_QL70_FMwebp_.jpg",
    specifications: {
      socket: "AM5",
      chipset: "AMD X670",
      formFactor: "ATX",
      memorySlots: 4,
      maxMemory: 128,
      memoryType: "DDR5",
      memorySpeed: "6600+ MHz (OC)",
      pcieSlots: "1x PCIe 4.0 x16, 1x PCIe 3.0 x16 (x4 mode), 2x PCIe 3.0 x1",
      storage: "4x M.2 (1x PCIe 5.0), 6x SATA 6Gb/s",
      usb: "1x USB 3.2 Gen 2x2 Type-C, 7x USB 3.2 Gen 2, 4x USB 2.0",
      networking: "Wi-Fi 6E, 2.5Gb Ethernet",
      audio: "Realtek ALC1220 7.1 Channel"
    },
    features: [
      "16+2+2 phase VRM design",
      "PCIe 5.0 M.2 slot for next-gen SSDs",
      "Direct 8+8 pin CPU power connectors",
      "AORUS Fins-Array heatsink design",
      "RGB Fusion 2.0 with multiple zones"
    ],
    warranty: "3 years"
  },
  {
    id: "gigabyte-x670e-aorus-master-wifi",
    name: "Gigabyte X670E AORUS Master WiFi",
    brand: "Gigabyte",
    description: "AMD AM5 X670E, top VRMs, dual PCIe 5.0 M.2, Wi‑Fi 6E",
    price: 49480,
    oldPrice: 54000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/41AmRV28qyL._SY300_SX300_QL70_FMwebp_.jpg",
    specifications: {
      socket: "AM5",
      chipset: "AMD X670E",
      formFactor: "ATX",
      memorySlots: 4,
      maxMemory: 128,
      memoryType: "DDR5",
      memorySpeed: "6600+ MHz (OC)",
      pcieSlots: "1x PCIe 5.0 x16, 1x PCIe 4.0 x16 (x4 mode), 1x PCIe 3.0 x4",
      storage: "5x M.2 (2x PCIe 5.0), 6x SATA 6Gb/s",
      usb: "2x USB 3.2 Gen 2x2 Type-C, 10x USB 3.2 Gen 2, 4x USB 2.0",
      networking: "Wi-Fi 6E, 10Gb Ethernet",
      audio: "Realtek ALC1220-VB 7.1 Channel"
    },
    features: [
      "18+2+2 phase 105A SPS VRM",
      "Dual PCIe 5.0 M.2 with thermal armor",
      "Server-grade 8-layer PCB",
      "ESSential ES9118 DAC for superior audio",
      "AORUS LCD display for system monitoring"
    ],
    warranty: "3 years"
  },
  {
    id: "asus-rog-strix-x870e-e-gaming-wifi",
    name: "ASUS ROG Strix X870E‑E Gaming WiFi",
    brand: "ASUS",
    description: "AMD AM5 X870E flagship, PCIe 5.0 triple M.2, Wi‑Fi 7",
    price: 58899,
    oldPrice: 64000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/81qTBHNXtkL._SX679_.jpg",
    specifications: {
      socket: "AM5",
      chipset: "AMD X870E",
      formFactor: "ATX",
      memorySlots: 4,
      maxMemory: 128,
      memoryType: "DDR5",
      memorySpeed: "8000+ MHz (OC)",
      pcieSlots: "1x PCIe 5.0 x16, 1x PCIe 4.0 x16 (x4 mode), 1x PCIe 4.0 x1",
      storage: "5x M.2 (3x PCIe 5.0), 6x SATA 6Gb/s",
      usb: "2x USB4 Type-C, 12x USB 3.2 Gen 2, 4x USB 2.0",
      networking: "Wi-Fi 7, 10Gb Ethernet",
      audio: "ROG SupremeFX 7.1 Channel"
    },
    features: [
      "20+2 phase 110A power stages",
      "ROG Hyper Frequency Design for extreme OC",
      "Active VRM cooling with heatpipe",
      "ROG DIMM.2 for additional M.2 slots",
      "LiveDash OLED display for system stats"
    ],
    warranty: "3 years"
  },
  {
    id: "msi-mag-z790-tomahawk-wifi",
    name: "MSI MAG Z790 Tomahawk WiFi",
    brand: "MSI",
    description: "Intel LGA 1700 Z790, DDR5, PCIe 5.0, Wi‑Fi 6E",
    price: 36265,
    oldPrice: 39000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/51pV4dMUTnL._SX300_SY300_QL70_FMwebp_.jpg",
    specifications: {
      socket: "LGA 1700",
      chipset: "Intel Z790",
      formFactor: "ATX",
      memorySlots: 4,
      maxMemory: 128,
      memoryType: "DDR5",
      memorySpeed: "7200+ MHz (OC)",
      pcieSlots: "1x PCIe 5.0 x16, 1x PCIe 3.0 x16 (x4 mode), 2x PCIe 3.0 x1",
      storage: "4x M.2 (1x PCIe 5.0), 6x SATA 6Gb/s",
      usb: "1x USB 3.2 Gen 2x2 Type-C, 7x USB 3.2 Gen 2, 4x USB 2.0",
      networking: "Wi-Fi 6E, 2.5Gb Ethernet",
      audio: "Realtek ALC897 7.1 Channel"
    },
    features: [
      "16+1+1 phase VRM with 80A power stages",
      "Extended heatsink with 7W/mK thermal pad",
      "Lightning Gen 5 PCIe x16 slot",
      "M.2 Shield Frozr for thermal throttling prevention",
      "DDR5 Memory Boost technology"
    ],
    warranty: "3 years"
  },
  {
    id: "asus-rog-maximus-z790-hero",
    name: "ASUS ROG Maximus Z790 Hero",
    brand: "ASUS",
    description: "Intel Z790 ATX, USB4, PCIe 5.0, robust overclocking",
    price: 69999,
    oldPrice: 75000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/51NfCXNMCHL._SX300_SY300_QL70_FMwebp_.jpg",
    specifications: {
      socket: "LGA 1700",
      chipset: "Intel Z790",
      formFactor: "ATX",
      memorySlots: 4,
      maxMemory: 128,
      memoryType: "DDR5",
      memorySpeed: "7800+ MHz (OC)",
      pcieSlots: "1x PCIe 5.0 x16, 1x PCIe 5.0 x8, 1x PCIe 4.0 x4",
      storage: "5x M.2 (2x PCIe 5.0), 6x SATA 6Gb/s",
      usb: "2x USB4 Type-C, 10x USB 3.2 Gen 2, 4x USB 2.0",
      networking: "Wi-Fi 6E, 10Gb Ethernet",
      audio: "ROG SupremeFX 7.1 Channel"
    },
    features: [
      "20+1 phase 105A power stages",
      "ROG Hyper Frequency PWM for extreme OC",
      "PCIe Slot Q-Release for easy GPU removal",
      "ROG Water Cooling Zone with flow rate monitoring",
      "Polymo lighting with customizable animations"
    ],
    warranty: "3 years"
  },
  {
    id: "asrock-b860-steel-legend-wifi",
    name: "ASRock B860 Steel Legend WiFi",
    brand: "ASRock",
    description: "Intel LGA 1851 B860, Wi‑Fi, DDR5, value Intel Ultra‑200S",
    price: 23499,
    oldPrice: 26000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/41gEHViBsjL._SX300_SY300_QL70_FMwebp_.jpg",
    specifications: {
      socket: "LGA 1851",
      chipset: "Intel B860",
      formFactor: "ATX",
      memorySlots: 4,
      maxMemory: 128,
      memoryType: "DDR5",
      memorySpeed: "6400 MHz",
      pcieSlots: "1x PCIe 5.0 x16, 1x PCIe 4.0 x4, 2x PCIe 3.0 x1",
      storage: "3x M.2, 6x SATA 6Gb/s",
      usb: "1x USB 3.2 Gen 2x2 Type-C, 6x USB 3.2 Gen 2, 4x USB 2.0",
      networking: "Wi-Fi 6, 2.5Gb Ethernet",
      audio: "Realtek ALC897 7.1 Channel"
    },
    features: [
      "12+1+1 phase power design",
      "Steel Slot PCIe 5.0 reinforcement",
      "Polychrome RGB with addressable headers",
      "M.2 heatsink for thermal management",
      "Dr. MOS for efficient power delivery"
    ],
    warranty: "3 years"
  },
  {
    id: "gigabyte-z890-aorus-elite-wifi7",
    name: "Gigabyte Z890 AORUS Elite WiFi7",
    brand: "Gigabyte",
    description: "Intel LGA 1851 Z890, PCIe 5.0, Wi‑Fi 7, modern Intel Ultra‑200S",
    price: 30890,
    oldPrice: 34000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/41hJoxumGeL.SX300_SY300_QL70_FMwebp.jpg",
    specifications: {
      socket: "LGA 1851",
      chipset: "Intel Z890",
      formFactor: "ATX",
      memorySlots: 4,
      maxMemory: 128,
      memoryType: "DDR5",
      memorySpeed: "8000+ MHz (OC)",
      pcieSlots: "1x PCIe 5.0 x16, 1x PCIe 5.0 x8, 1x PCIe 4.0 x4",
      storage: "5x M.2 (2x PCIe 5.0), 6x SATA 6Gb/s",
      usb: "2x USB4 Type-C, 8x USB 3.2 Gen 2, 4x USB 2.0",
      networking: "Wi-Fi 7, 10Gb Ethernet",
      audio: "Realtek ALC1220 7.1 Channel"
    },
    features: [
      "16+1+2 phase 105A VRM design",
      "Dual PCIe 5.0 M.2 slots with thermal guards",
      "AORUS Fins-Array III heatsink design",
      "Smart Fan 6 with multiple temperature sensors",
      "Q-Flash Plus for BIOS update without CPU"
    ],
    warranty: "3 years"
  },
  {
    id: "asrock-b650m-pg-riptide-wifi",
    name: "ASRock B650M PG Riptide WiFi",
    brand: "ASRock",
    description: "AMD AM5 B650mATX, DDR5, Wi‑Fi 6E, compact build",
    price: 16800,
    oldPrice: 19000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/61JHSjxTqDL.SX522.jpg",
    specifications: {
      socket: "AM5",
      chipset: "AMD B650",
      formFactor: "Micro-ATX",
      memorySlots: 4,
      maxMemory: 128,
      memoryType: "DDR5",
      memorySpeed: "6400+ MHz (OC)",
      pcieSlots: "1x PCIe 4.0 x16, 1x PCIe 3.0 x1",
      storage: "2x M.2, 4x SATA 6Gb/s",
      usb: "1x USB 3.2 Gen 2 Type-C, 5x USB 3.2 Gen 1, 4x USB 2.0",
      networking: "Wi-Fi 6E, 2.5Gb Ethernet",
      audio: "Realtek ALC897 7.1 Channel"
    },
    features: [
      "8+2+1 phase power design",
      "Dr. MOS for efficient power delivery",
      "PCIe Steel Slot for GPU support",
      "Polychrome RGB with addressable headers",
      "M.2 heatsink for thermal management"
    ],
    warranty: "3 years"
  },
  {
    id: "asus-prime-b650m-r-ddr5",
    name: "ASUS Prime B650M‑R DDR5",
    brand: "ASUS",
    description: "AMD AM5 B650 mATX, DDR5 up to 7600 MHz, basic but stable",
    price: 8299,
    oldPrice: 10000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/41GR3pbJT9L.SX300_SY300_QL70_FMwebp.jpg",
    specifications: {
      socket: "AM5",
      chipset: "AMD B650",
      formFactor: "Micro-ATX",
      memorySlots: 2,
      maxMemory: 64,
      memoryType: "DDR5",
      memorySpeed: "6400 MHz",
      pcieSlots: "1x PCIe 4.0 x16, 1x PCIe 3.0 x1",
      storage: "1x M.2, 4x SATA 6Gb/s",
      usb: "1x USB 3.2 Gen 1 Type-C, 4x USB 3.2 Gen 1, 2x USB 2.0",
      networking: "1Gb Ethernet",
      audio: "Realtek ALC897 5.1 Channel"
    },
    features: [
      "6+1+1 phase power design",
      "ASUS OptiMem for memory stability",
      "Fan Xpert basic fan control",
      "ESD protection on all critical components",
      "BIOS FlashBack for easy updates"
    ],
    warranty: "3 years"
  },
  {
    id: "msi-pro-b650-vc-wifi-ii",
    name: "MSI PRO B650‑VC WiFi II",
    brand: "MSI",
    description: "AMD AM5 B650 ATX, Wi‑Fi, value full‑size board",
    price: 12349,
    oldPrice: 14000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/51TTWQ-KsGL.SX300_SY300_QL70_FMwebp.jpg",
    specifications: {
      socket: "AM5",
      chipset: "AMD B650",
      formFactor: "ATX",
      memorySlots: 4,
      maxMemory: 128,
      memoryType: "DDR5",
      memorySpeed: "6400+ MHz (OC)",
      pcieSlots: "1x PCIe 4.0 x16, 1x PCIe 3.0 x16 (x4 mode), 2x PCIe 3.0 x1",
      storage: "2x M.2, 6x SATA 6Gb/s",
      usb: "1x USB 3.2 Gen 2 Type-C, 5x USB 3.2 Gen 2, 4x USB 2.0",
      networking: "Wi-Fi 6, 2.5Gb Ethernet",
      audio: "Realtek ALC897 7.1 Channel"
    },
    features: [
      "10+2+1 phase power design",
      "Extended heatsink for VRM cooling",
      "DDR5 Memory Boost technology",
      "M.2 Shield Frozr for thermal management",
      "Core Boost technology for stable power"
    ],
    warranty: "3 years"
  },
  {
    id: "msi-mag-b760m-mortar-wifi",
    name: "MSI MAG B760M Mortar WiFi",
    brand: "MSI",
    description: "Intel LGA 1700 B760 mATX, DDR5, Wi‑Fi 6E",
    price: 18449,
    oldPrice: 21000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/81GIa4lO+wL.SL1500.jpg",
    specifications: {
      socket: "LGA 1700",
      chipset: "Intel B760",
      formFactor: "Micro-ATX",
      memorySlots: 4,
      maxMemory: 128,
      memoryType: "DDR5",
      memorySpeed: "7000+ MHz (OC)",
      pcieSlots: "1x PCIe 4.0 x16, 1x PCIe 3.0 x16 (x4 mode)",
      storage: "2x M.2, 6x SATA 6Gb/s",
      usb: "1x USB 3.2 Gen 2x2 Type-C, 6x USB 3.2 Gen 2, 4x USB 2.0",
      networking: "Wi-Fi 6E, 2.5Gb Ethernet",
      audio: "Realtek ALC897 7.1 Channel"
    },
    features: [
      "12+1+1 phase VRM design",
      "Extended PWM heatsink and choke thermal pad",
      "DDR5 Memory Boost technology",
      "M.2 Shield Frozr for thermal throttling prevention",
      "Mystic Light RGB customization"
    ],
    warranty: "3 years"
  },
  {
    id: "gigabyte-b760-aorus-elite-ax-ddr4",
    name: "Gigabyte B760 AORUS Elite AX DDR4",
    brand: "Gigabyte",
    description: "Intel LGA 1700 B760 DDR4, PCIe 4.0, value DDR4 option",
    price: 18499,
    oldPrice: 21000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/51upuVfrtqL.SY300_SX300_QL70_FMwebp.jpg",
    specifications: {
      socket: "LGA 1700",
      chipset: "Intel B760",
      formFactor: "ATX",
      memorySlots: 4,
      maxMemory: 128,
      memoryType: "DDR4",
      memorySpeed: "5333 MHz",
      pcieSlots: "1x PCIe 4.0 x16, 1x PCIe 3.0 x16 (x4 mode), 2x PCIe 3.0 x1",
      storage: "3x M.2, 6x SATA 6Gb/s",
      usb: "1x USB 3.2 Gen 2x2 Type-C, 6x USB 3.2 Gen 2, 4x USB 2.0",
      networking: "Wi-Fi 6, 2.5Gb Ethernet",
      audio: "Realtek ALC897 7.1 Channel"
    },
    features: [
      "12+1+1 phase power design",
      "Dual PCIe 4.0 M.2 with thermal guards",
      "AORUS Fins-Array heatsink design",
      "Smart Fan 6 with multiple temperature sensors",
      "Q-Flash Plus for BIOS update without CPU"
    ],
    warranty: "3 years"
  },
  {
    id: "gigabyte-b850m-ds3h",
    name: "Gigabyte B850M DS3H",
    brand: "Gigabyte",
    description: "Intel LGA 1851 B850M micro‑ATX, DDR4, basic board under ₹16K",
    price: 15999,
    oldPrice: 18000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/41rfmFq4SnL.SX300_SY300_QL70_FMwebp.jpg",
    specifications: {
      socket: "LGA 1851",
      chipset: "Intel B850",
      formFactor: "Micro-ATX",
      memorySlots: 2,
      maxMemory: 64,
      memoryType: "DDR4",
      memorySpeed: "3200 MHz",
      pcieSlots: "1x PCIe 4.0 x16, 1x PCIe 3.0 x1",
      storage: "1x M.2, 4x SATA 6Gb/s",
      usb: "1x USB 3.2 Gen 1 Type-C, 4x USB 3.2 Gen 1, 4x USB 2.0",
      networking: "1Gb Ethernet",
      audio: "Realtek ALC897 5.1 Channel"
    },
    features: [
      "6+1+1 phase power design",
      "Ultra Durable PCIe 4.0 slot",
      "Smart Fan 5 with hybrid fan headers",
      "Anti-sulfur resistors for durability",
      "Q-Flash Plus for BIOS update without CPU"
    ],
    warranty: "3 years"
  }
];

Motherboards.forEach(board => {
  if (board.oldPrice && board.price && board.oldPrice > board.price) {
    board.discountPercent = Math.round(((board.oldPrice - board.price) / board.oldPrice) * 100);
  } else {
    board.discountPercent = 0;
  }
});

export default Motherboards;