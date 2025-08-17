const GraphicsCards = [
  {
    id: "nvidia-rtx-5090-32gb",
    name: "NVIDIA RTX 5090 32 GB",
    brand: "NVIDIA",
    description: "Blackwell flagship, 32 GB GDDR7, PCIe 5.0, 4K/AI workloads",
    price: 214000,
    oldPrice: 240000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/414zIqI3fuL._SX300_SY300_QL70_FMwebp_.jpg",
    specifications: {
      architecture: "Blackwell",
      gpuModel: "GB102",
      cudaCores: "18,432",
      rayTracingCores: "144",
      tensorCores: "576",
      memory: "32GB GDDR7 (384-bit, 1.5 TB/s, 28 Gbps)",
      clockSpeeds: "Base: 2235 MHz, Boost: 2625 MHz",
      power: "450W TDP, 850W recommended PSU, 1×16-pin (12VHPWR)",
      ports: "3× DP 2.1, 1× HDMI 2.1, 1× VirtualLink",
      dimensions: "336 × 150 × 71 mm (3.5 slots)",
      cooling: "Triple axial-tech fans with vapor chamber",
      displaySupport: "7680×4320 @ 4 displays, DisplayHDR 1400"
    },
    features: [
      "DLSS 4",
      "Ray Reconstruction",
      "Frame Generation",
      "Reflex Low Latency",
      "AV1 Encoding"
    ],
    warranty: "3 years",
    releaseDate: "Q4 2024",
    includedItems: [
      "16-pin to 3×8-pin adapter",
      "Support bracket",
      "Quick start guide"
    ]
  },
  {
    id: "nvidia-rtx-5080-16gb",
    name: "NVIDIA RTX 5080 16 GB",
    brand: "NVIDIA",
    description: "Blackwell high‑end, 16 GB GDDR7, DLSS 4, PCIe 5.0",
    price: 107000,
    oldPrice: 120000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/41GnbMtV18L._SX300_SY300_QL70_FMwebp_.jpg",
    specifications: {
      architecture: "Blackwell",
      gpuModel: "GB103",
      cudaCores: "10,752",
      rayTracingCores: "84",
      tensorCores: "336",
      memory: "16GB GDDR7 (256-bit, 1.1 TB/s, 26 Gbps)",
      clockSpeeds: "Base: 2100 MHz, Boost: 2500 MHz",
      power: "320W TDP, 750W recommended PSU, 1×16-pin (12VHPWR)",
      ports: "3× DP 2.1, 1× HDMI 2.1",
      dimensions: "310 × 140 × 60 mm (3 slots)",
      cooling: "Dual 100mm fans with vapor chamber",
      displaySupport: "7680×4320 @ 4 displays, DisplayHDR 1000"
    },
    features: [
      "DLSS 4",
      "Ray Reconstruction",
      "Frame Generation",
      "Reflex Low Latency"
    ],
    warranty: "3 years",
    releaseDate: "Q4 2024",
    includedItems: [
      "16-pin to 2×8-pin adapter",
      "Quick start guide"
    ]
  },
  {
    id: "nvidia-rtx-5070-ti-16gb",
    name: "NVIDIA RTX 5070 Ti 16 GB",
    brand: "NVIDIA",
    description: "Blackwell mid‑flagship, 16 GB GDDR7, excellent 1440p",
    price: 80000,
    oldPrice: 90000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/41LK8D7pR7L._SX300_SY300_QL70_FMwebp_.jpg",
    specifications: {
      architecture: "Blackwell",
      gpuModel: "GB104",
      cudaCores: "7,680",
      rayTracingCores: "60",
      tensorCores: "240",
      memory: "16GB GDDR7 (192-bit, 768 GB/s, 24 Gbps)",
      clockSpeeds: "Base: 1950 MHz, Boost: 2400 MHz",
      power: "220W TDP, 650W recommended PSU, 1×16-pin (12VHPWR)",
      ports: "3× DP 2.1, 1× HDMI 2.1",
      dimensions: "295 × 130 × 50 mm (2.5 slots)",
      cooling: "Dual 90mm fans",
      displaySupport: "7680×4320 @ 4 displays, DisplayHDR 1000"
    },
    features: [
      "DLSS 4",
      "Ray Tracing",
      "Reflex Low Latency"
    ],
    warranty: "3 years",
    releaseDate: "Q1 2025",
    includedItems: [
      "16-pin to 8-pin adapter",
      "Quick start guide"
    ]
  },
  {
    id: "nvidia-rtx-5070-12gb",
    name: "NVIDIA RTX 5070 12 GB",
    brand: "NVIDIA",
    description: "Blackwell mid‑range, 12 GB GDDR7, solid value 1440p",
    price: 59000,
    oldPrice: 65000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/61qjpDlJ9qL._SL1000_.jpg",
    specifications: {
      architecture: "Blackwell",
      gpuModel: "GB106",
      cudaCores: "5,888",
      rayTracingCores: "46",
      tensorCores: "184",
      memory: "12GB GDDR7 (192-bit, 576 GB/s, 24 Gbps)",
      clockSpeeds: "Base: 1850 MHz, Boost: 2300 MHz",
      power: "180W TDP, 550W recommended PSU, 1×8-pin",
      ports: "3× DP 2.0, 1× HDMI 2.1",
      dimensions: "270 × 120 × 40 mm (2 slots)",
      cooling: "Dual 85mm fans",
      displaySupport: "7680×4320 @ 4 displays, DisplayHDR 600"
    },
    features: [
      "DLSS 4",
      "Ray Tracing",
      "NVIDIA Encoder (NVENC)"
    ],
    warranty: "3 years",
    releaseDate: "Q1 2025",
    includedItems: ["Quick start guide"]
  },
  {
    id: "nvidia-rtx-5060-ti-8gb",
    name: "NVIDIA RTX 5060 Ti 8 GB",
    brand: "NVIDIA",
    description: "Entry‑level RTX50, 8 GB GDDR7, DLSS 4, 1080p/1440p",
    price: 45000,
    oldPrice: 55000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/41x1ndYNv8L._SY300_SX300_QL70_FMwebp_.jpg",
    specifications: {
      architecture: "Blackwell",
      gpuModel: "GB107",
      cudaCores: "4,352",
      rayTracingCores: "34",
      tensorCores: "136",
      memory: "8GB GDDR7 (128-bit, 448 GB/s, 22 Gbps)",
      clockSpeeds: "Base: 1700 MHz, Boost: 2100 MHz",
      power: "160W TDP, 500W recommended PSU, 1×8-pin",
      ports: "2× DP 2.0, 1× HDMI 2.1",
      dimensions: "240 × 110 × 40 mm (2 slots)",
      cooling: "Dual 80mm fans",
      displaySupport: "7680×4320 @ 4 displays, DisplayHDR 400"
    },
    features: [
      "DLSS 4",
      "Ray Tracing",
      "NVIDIA Broadcast"
    ],
    warranty: "3 years",
    releaseDate: "Q2 2025",
    includedItems: ["Quick start guide"]
  },
  {
    id: "nvidia-rtx-5060-8gb",
    name: "NVIDIA RTX 5060 8 GB",
    brand: "NVIDIA",
    description: "Mainstream RTX50, 8 GB GDDR7, good for esports titles",
    price: 37000,
    oldPrice: 45000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/81-KEx-lGSL._SL1500_.jpg",
    specifications: {
      architecture: "Blackwell",
      gpuModel: "GB107",
      cudaCores: "3,840",
      rayTracingCores: "30",
      tensorCores: "120",
      memory: "8GB GDDR7 (128-bit, 384 GB/s, 21 Gbps)",
      clockSpeeds: "Base: 1600 MHz, Boost: 2000 MHz",
      power: "130W TDP, 450W recommended PSU, 1×6-pin",
      ports: "2× DP 2.0, 1× HDMI 2.1",
      dimensions: "220 × 100 × 35 mm (2 slots)",
      cooling: "Single 100mm fan",
      displaySupport: "7680×4320 @ 3 displays, DisplayHDR 400"
    },
    features: [
      "DLSS 4",
      "Ray Tracing",
      "NVIDIA Reflex"
    ],
    warranty: "3 years",
    releaseDate: "Q2 2025",
    includedItems: ["Quick start guide"]
  },
  {
    id: "amd-radeon-rx-9070-xt-16gb",
    name: "AMD Radeon RX 9070 XT 16 GB",
    brand: "AMD",
    description: "RDNA 4 premium, 16 GB GDDR6, strong 4K performance",
    price: 82000,
    oldPrice: 95000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/41BPCqMm42L._SY300_SX300_QL70_FMwebp_.jpg",
    specifications: {
      architecture: "RDNA 4",
      gpuModel: "Navi 44",
      streamProcessors: "5,120",
      rayAccelerators: "80",
      aiAccelerators: "160",
      memory: "16GB GDDR6 (256-bit, 768 GB/s, 19.5 Gbps)",
      clockSpeeds: "Game: 2300 MHz, Boost: 2600 MHz",
      power: "300W TDP, 750W recommended PSU, 2×8-pin",
      ports: "3× DP 2.1, 1× HDMI 2.1, 1× VirtualLink",
      dimensions: "320 × 135 × 60 mm (2.7 slots)",
      cooling: "Triple axial fan design",
      displaySupport: "7680×4320 @ 4 displays, DisplayHDR 1400"
    },
    features: [
      "FSR 3.5",
      "Hybrid Ray Tracing",
      "Anti-Lag+",
      "AV1 Encoding"
    ],
    warranty: "2 years",
    releaseDate: "Q4 2024",
    includedItems: [
      "Support bracket",
      "Quick start guide"
    ]
  },
  {
    id: "amd-radeon-rx-9070-16gb",
    name: "AMD Radeon RX 9070 16 GB",
    brand: "AMD",
    description: "RDNA 4 upper‑mid, 16 GB GDDR6, great 1440p value",
    price: 73000,
    oldPrice: 85000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/41BPCqMm42L._SY300_SX300_QL70_FMwebp_.jpg",
    specifications: {
      architecture: "RDNA 4",
      gpuModel: "Navi 44",
      streamProcessors: "4,608",
      rayAccelerators: "72",
      aiAccelerators: "144",
      memory: "16GB GDDR6 (256-bit, 672 GB/s, 18 Gbps)",
      clockSpeeds: "Game: 2200 MHz, Boost: 2500 MHz",
      power: "260W TDP, 650W recommended PSU, 2×8-pin",
      ports: "3× DP 2.1, 1× HDMI 2.1",
      dimensions: "300 × 130 × 50 mm (2.5 slots)",
      cooling: "Dual 100mm fans",
      displaySupport: "7680×4320 @ 4 displays, DisplayHDR 1000"
    },
    features: [
      "FSR 3.5",
      "Hybrid Ray Tracing",
      "Anti-Lag+"
    ],
    warranty: "2 years",
    releaseDate: "Q4 2024",
    includedItems: ["Quick start guide"]
  },
  {
    id: "amd-radeon-rx-7900-xtx-24gb",
    name: "AMD Radeon RX 7900 XTX 24 GB",
    brand: "AMD",
    description: "RDNA 3 flagship, 24 GB GDDR6, high‑end 4K workhorse",
    price: 95000,
    oldPrice: 110000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/51Uu+-jFVIL._SY300_SX300_.jpg",
    specifications: {
      architecture: "RDNA 3",
      gpuModel: "Navi 31",
      streamProcessors: "6,144",
      rayAccelerators: "96",
      aiAccelerators: "192",
      memory: "24GB GDDR6 (384-bit, 960 GB/s, 20 Gbps)",
      clockSpeeds: "Game: 2000 MHz, Boost: 2500 MHz",
      power: "355W TDP, 800W recommended PSU, 2×8-pin",
      ports: "2× DP 2.1, 2× HDMI 2.1, 1× VirtualLink",
      dimensions: "340 × 135 × 72 mm (3 slots)",
      cooling: "Triple fan vapor chamber",
      displaySupport: "7680×4320 @ 4 displays, DisplayHDR 1400"
    },
    features: [
      "FSR 3",
      "Ray Acceleration",
      "Smart Access Memory",
      "Infinity Cache"
    ],
    warranty: "3 years",
    releaseDate: "December 2022",
    includedItems: [
      "Support bracket",
      "Quick start guide"
    ]
  },
  {
    id: "amd-radeon-rx-7900-xt-20gb",
    name: "AMD Radeon RX 7900 XT 20 GB",
    brand: "AMD",
    description: "RDNA 3 premium, 20 GB GDDR6, high‑end gaming",
    price: 62500,
    oldPrice: 70000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/51+7R+8ShrL._SY300_SX300_.jpg",
    specifications: {
      architecture: "RDNA 3",
      gpuModel: "Navi 31",
      streamProcessors: "5,376",
      rayAccelerators: "84",
      aiAccelerators: "168",
      memory: "20GB GDDR6 (320-bit, 800 GB/s, 20 Gbps)",
      clockSpeeds: "Game: 1900 MHz, Boost: 2400 MHz",
      power: "315W TDP, 750W recommended PSU, 2×8-pin",
      ports: "2× DP 2.1, 2× HDMI 2.1",
      dimensions: "330 × 130 × 60 mm (2.7 slots)",
      cooling: "Triple fan design",
      displaySupport: "7680×4320 @ 4 displays, DisplayHDR 1000"
    },
    features: [
      "FSR 3",
      "Ray Acceleration",
      "Smart Access Memory"
    ],
    warranty: "3 years",
    releaseDate: "December 2022",
    includedItems: ["Quick start guide"]
  },
  {
    id: "amd-radeon-rx-7800-xt-16gb",
    name: "AMD Radeon RX 7800 XT 16 GB",
    brand: "AMD",
    description: "RDNA 3 strong 1440p, 16 GB GDDR6",
    price: 44250,
    oldPrice: 50000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/71WxRgfmlrL._SL1500_.jpg",
    specifications: {
      architecture: "RDNA 3",
      gpuModel: "Navi 32",
      streamProcessors: "3,840",
      rayAccelerators: "60",
      aiAccelerators: "120",
      memory: "16GB GDDR6 (256-bit, 624 GB/s, 19.5 Gbps)",
      clockSpeeds: "Game: 1800 MHz, Boost: 2300 MHz",
      power: "263W TDP, 650W recommended PSU, 2×8-pin",
      ports: "3× DP 2.1, 1× HDMI 2.1",
      dimensions: "310 × 125 × 50 mm (2.5 slots)",
      cooling: "Dual 100mm fans",
      displaySupport: "7680×4320 @ 4 displays, DisplayHDR 1000"
    },
    features: [
      "FSR 3",
      "Ray Acceleration",
      "Anti-Lag"
    ],
    warranty: "2 years",
    releaseDate: "September 2023",
    includedItems: ["Quick start guide"]
  },
  {
    id: "amd-radeon-rx-7700-xt-12gb",
    name: "AMD Radeon RX 7700 XT 12 GB",
    brand: "AMD",
    description: "RDNA 3 solid value 1440p, 12 GB GDDR6",
    price: 38300,
    oldPrice: 43000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/81+YjuyLX6L._SL1500_.jpg",
    specifications: {
      architecture: "RDNA 3",
      gpuModel: "Navi 32",
      streamProcessors: "3,456",
      rayAccelerators: "54",
      aiAccelerators: "108",
      memory: "12GB GDDR6 (192-bit, 432 GB/s, 18 Gbps)",
      clockSpeeds: "Game: 1700 MHz, Boost: 2200 MHz",
      power: "245W TDP, 600W recommended PSU, 1×8-pin + 1×6-pin",
      ports: "3× DP 2.1, 1× HDMI 2.1",
      dimensions: "280 × 120 × 45 mm (2 slots)",
      cooling: "Dual 90mm fans",
      displaySupport: "7680×4320 @ 4 displays, DisplayHDR 600"
    },
    features: [
      "FSR 3",
      "Ray Acceleration",
      "Anti-Lag"
    ],
    warranty: "2 years",
    releaseDate: "September 2023",
    includedItems: ["Quick start guide"]
  },
  {
    id: "amd-radeon-rx-9060-xt-16gb",
    name: "AMD Radeon RX 9060 XT 16 GB",
    brand: "AMD",
    description: "RDNA 4 mid‑range, 16 GB GDDR6, great for 1080p/1440p",
    price: 35000,
    oldPrice: 42000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/41lJfb7UloL._SX300_SY300_QL70_FMwebp_.jpg",
    specifications: {
      architecture: "RDNA 4",
      gpuModel: "Navi 48",
      streamProcessors: "3,072",
      rayAccelerators: "48",
      aiAccelerators: "96",
      memory: "16GB GDDR6 (128-bit, 512 GB/s, 20 Gbps)",
      clockSpeeds: "Game: 1800 MHz, Boost: 2300 MHz",
      power: "180W TDP, 500W recommended PSU, 1×8-pin",
      ports: "2× DP 2.1, 1× HDMI 2.1",
      dimensions: "260 × 115 × 40 mm (2 slots)",
      cooling: "Dual 85mm fans",
      displaySupport: "7680×4320 @ 4 displays, DisplayHDR 600"
    },
    features: [
      "FSR 3.5",
      "Hybrid Ray Tracing",
      "Anti-Lag+"
    ],
    warranty: "2 years",
    releaseDate: "Q1 2025",
    includedItems: ["Quick start guide"]
  },
  {
    id: "intel-arc-b580-16gb",
    name: "Intel Arc B580 16 GB",
    brand: "Intel",
    description: "Xe‑HPG mid‑range, 16 GB GDDR6, solid 1440p budget choice",
    price: 29000,
    oldPrice: 34000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/61bZMb7+EXL._AC_SX679_.jpg",
    specifications: {
      architecture: "Xe-HPG",
      gpuModel: "ACM-G12",
      xeCores: "32",
      rayTracingUnits: "32",
      aiAccelerators: "256",
      memory: "16GB GDDR6 (256-bit, 512 GB/s, 16 Gbps)",
      clockSpeeds: "Base: 1800 MHz, Boost: 2400 MHz",
      power: "225W TDP, 550W recommended PSU, 1×8-pin + 1×6-pin",
      ports: "3× DP 2.0, 1× HDMI 2.1",
      dimensions: "280 × 120 × 40 mm (2.5 slots)",
      cooling: "Dual 90mm fans",
      displaySupport: "7680×4320 @ 4 displays, DisplayHDR 1000"
    },
    features: [
      "XeSS",
      "Deep Link",
      "AV1 Encoding",
      "Intel XMX AI Acceleration"
    ],
    warranty: "3 years",
    releaseDate: "Q3 2024",
    includedItems: ["Quick start guide"]
  },
  {
    id: "intel-arc-b570-10gb",
    name: "Intel Arc B570 10 GB",
    brand: "Intel",
    description: "Xe‑HPG budget, 10 GB GDDR6, efficient 1080p performance",
    price: 26000,
    oldPrice: 30000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/61AqKwSmJlL._AC_SY300_SX300_QL70_FMwebp.jpg",
    specifications: {
      architecture: "Xe-HPG",
      gpuModel: "ACM-G11",
      xeCores: "24",
      rayTracingUnits: "24",
      aiAccelerators: "192",
      memory: "10GB GDDR6 (160-bit, 360 GB/s, 18 Gbps)",
      clockSpeeds: "Base: 1600 MHz, Boost: 2100 MHz",
      power: "150W TDP, 450W recommended PSU, 1×8-pin",
      ports: "2× DP 2.0, 1× HDMI 2.1",
      dimensions: "240 × 110 × 35 mm (2 slots)",
      cooling: "Single 100mm fan",
      displaySupport: "7680×4320 @ 4 displays, DisplayHDR 600"
    },
    features: [
      "XeSS",
      "Deep Link",
      "AV1 Encoding"
    ],
    warranty: "3 years",
    releaseDate: "Q3 2024",
    includedItems: ["Quick start guide"]
  },
  {
    id: "nvidia-rtx-4070-super-16gb",
    name: "NVIDIA RTX 4070 Super 16 GB",
    brand: "NVIDIA",
    description: "Ada Lovelace mid‑range, strong 1440p, DLSS 3+, 16 GB GDDR6X",
    price: 56800,
    oldPrice: 62000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/71jjBcnQqyL._AC_SX300_SY300_QL70_FMwebp.jpg",
    specifications: {
      architecture: "Ada Lovelace",
      gpuModel: "AD104",
      cudaCores: "7,168",
      rayTracingCores: "56",
      tensorCores: "224",
      memory: "16GB GDDR6X (256-bit, 672 GB/s, 21 Gbps)",
      clockSpeeds: "Base: 1920 MHz, Boost: 2475 MHz",
      power: "220W TDP, 650W recommended PSU, 1×16-pin (12VHPWR)",
      ports: "3× DP 1.4a, 1× HDMI 2.1",
      dimensions: "300 × 125 × 50 mm (2.5 slots)",
      cooling: "Dual 90mm fans",
      displaySupport: "7680×4320 @ 4 displays, DisplayHDR 1000"
    },
    features: [
      "DLSS 3.5",
      "Frame Generation",
      "Reflex Low Latency",
      "AV1 Encoding"
    ],
    warranty: "3 years",
    releaseDate: "January 2024",
    includedItems: [
      "16-pin to 8-pin adapter",
      "Quick start guide"
    ]
  },
  {
    id: "nvidia-rtx-4070-ti-super-16gb",
    name: "NVIDIA RTX 4070 Ti Super 16 GB",
    brand: "NVIDIA",
    description: "Ada Lovelace upper mid, DLSS 3.5, high‑refresh 1440p",
    price: 67000,
    oldPrice: 70000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/71jjBcnQqyL._AC_SX300_SY300_QL70_FMwebp.jpg",
    specifications: {
      architecture: "Ada Lovelace",
      gpuModel: "AD103",
      cudaCores: "8,448",
      rayTracingCores: "66",
      tensorCores: "264",
      memory: "16GB GDDR6X (256-bit, 736 GB/s, 21 Gbps)",
      clockSpeeds: "Base: 2340 MHz, Boost: 2610 MHz",
      power: "285W TDP, 700W recommended PSU, 1×16-pin (12VHPWR)",
      ports: "3× DP 1.4a, 1× HDMI 2.1",
      dimensions: "310 × 130 × 55 mm (2.7 slots)",
      cooling: "Triple 90mm fans",
      displaySupport: "7680×4320 @ 4 displays, DisplayHDR 1000"
    },
    features: [
      "DLSS 3.5",
      "Frame Generation",
      "Reflex Low Latency"
    ],
    warranty: "3 years",
    releaseDate: "January 2024",
    includedItems: [
      "16-pin to 2×8-pin adapter",
      "Quick start guide"
    ]
  },
  {
    id: "nvidia-rtx-4080-super-16gb",
    name: "NVIDIA RTX 4080 Super 16 GB",
    brand: "NVIDIA",
    description: "Ada Lovelace high‑end, very capable 4K gaming",
    price: 100600,
    oldPrice: 110000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/71m9FJCubXL._AC_SY300_SX300_QL70_FMwebp.jpg",
    specifications: {
      architecture: "Ada Lovelace",
      gpuModel: "AD103",
      cudaCores: "10,240",
      rayTracingCores: "80",
      tensorCores: "320",
      memory: "16GB GDDR6X (256-bit, 736 GB/s, 23 Gbps)",
      clockSpeeds: "Base: 2295 MHz, Boost: 2550 MHz",
      power: "320W TDP, 750W recommended PSU, 1×16-pin (12VHPWR)",
      ports: "3× DP 1.4a, 1× HDMI 2.1",
      dimensions: "340 × 150 × 70 mm (3.5 slots)",
      cooling: "Triple axial-tech fans",
      displaySupport: "7680×4320 @ 4 displays, DisplayHDR 1400"
    },
    features: [
      "DLSS 3.5",
      "Frame Generation",
      "Reflex Low Latency"
    ],
    warranty: "3 years",
    releaseDate: "January 2024",
    includedItems: [
      "16-pin to 3×8-pin adapter",
      "Support bracket",
      "Quick start guide"
    ]
  },
  {
    id: "nvidia-rtx-4090-24gb",
    name: "NVIDIA RTX 4090 24 GB",
    brand: "NVIDIA",
    description: "Ada Lovelace previous‑gen flagship, 24 GB GDDR6X, still top‑tier",
    price: 150000,
    oldPrice: 165000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/711vU2IrEuL.AC_SX466.jpg",
    specifications: {
      architecture: "Ada Lovelace",
      gpuModel: "AD102",
      cudaCores: "16,384",
      rayTracingCores: "128",
      tensorCores: "512",
      memory: "24GB GDDR6X (384-bit, 1.0 TB/s, 21 Gbps)",
      clockSpeeds: "Base: 2230 MHz, Boost: 2520 MHz",
      power: "450W TDP, 850W recommended PSU, 1×16-pin (12VHPWR)",
      ports: "3× DP 1.4a, 1× HDMI 2.1",
      dimensions: "340 × 150 × 75 mm (3.5 slots)",
      cooling: "Triple axial-tech fans with vapor chamber",
      displaySupport: "7680×4320 @ 4 displays, DisplayHDR 1400"
    },
    features: [
      "DLSS 3.5",
      "Frame Generation",
      "Reflex Low Latency"
    ],
    warranty: "3 years",
    releaseDate: "October 2022",
    includedItems: [
      "16-pin to 4×8-pin adapter",
      "Support bracket",
      "Quick start guide"
    ]
  },
  {
    id: "amd-radeon-rx-7900-gre-16gb",
    name: "AMD Radeon RX 7900 GRE 16 GB",
    brand: "AMD",
    description: "Budget‑friendly 7900 series variant, 16 GB GDDR6",
    price: 53000,
    oldPrice: 58000,
    discountPercent: null,
    image: "https://www.amd.com/content/dam/amd/en/images/products/graphics/2648997-amd-radeon-7900gre.jpg",
    specifications: {
      architecture: "RDNA 3",
      gpuModel: "Navi 31",
      streamProcessors: "5,120",
      rayAccelerators: "80",
      aiAccelerators: "160",
      memory: "16GB GDDR6 (256-bit, 576 GB/s, 18 Gbps)",
      clockSpeeds: "Game: 1750 MHz, Boost: 2250 MHz",
      power: "260W TDP, 650W recommended PSU, 2×8-pin",
      ports: "2× DP 2.1, 2× HDMI 2.1",
      dimensions: "320 × 130 × 55 mm (2.7 slots)",
      cooling: "Dual 100mm fans",
      displaySupport: "7680×4320 @ 4 displays, DisplayHDR 1000"
    },
    features: [
      "FSR 3",
      "Ray Acceleration",
      "Smart Access Memory"
    ],
    warranty: "2 years",
    releaseDate: "July 2023",
    includedItems: ["Quick start guide"]
  }
];

GraphicsCards.forEach(card => {
  if (card.oldPrice && card.price && card.oldPrice > card.price) {
    card.discountPercent = Math.round(((card.oldPrice - card.price) / card.oldPrice) * 100);
  } else {
    card.discountPercent = 0;
  }
});

export default GraphicsCards;