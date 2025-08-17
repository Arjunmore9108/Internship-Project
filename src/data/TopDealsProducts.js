const TopDealsProducts = [
  {
    id: "intel-core-i7-13700k",
    name: "Intel Core i7-13700K",
    brand: "Intel",
    description: "13th Gen Raptor Lake 16-Core Desktop Processor (8P+8E)",
    price: 38999,
    oldPrice: 42999,
    discountPercent: 9,
    image:
      "https://www.bhphotovideo.com/images/fb/intel_bx8071513700k_core_i7_13700k_3_4_ghz_1721739.jpg",
    specifications: {
      cores: "16 (8 Performance + 8 Efficiency)",
      threads: "24",
      baseClock: "3.4 GHz",
      boostClock: "5.4 GHz",
      socket: "LGA 1700",
      tdp: "125W",
    },
    features: [
      "Unlocked for overclocking",
      "Supports DDR4 and DDR5 memory",
      "PCIe 5.0 & 4.0 support",
      "Intel UHD Graphics 770 integrated",
    ],
  },
  {
    id: "amd-ryzen-7-5800x",
    name: "AMD Ryzen 7 5800X",
    brand: "AMD",
    description: "8-Core, 16-Thread Unlocked Desktop Processor (AM4 Socket)",
    price: 26999,
    oldPrice: 29999,
    discountPercent: 10,
    image:
      "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-7-5800x.jpg",
    specifications: {
      cores: "8",
      threads: "16",
      baseClock: "3.8 GHz",
      boostClock: "4.7 GHz",
      socket: "AM4",
      tdp: "105W",
    },
    features: [
      "Unlocked for overclocking",
      "PCIe 4.0 support",
      "AMD StoreMI Technology",
      "Precision Boost 2",
    ],
  },
  {
    id: "asrock-rx-550-4gb",
    name: "ASRock RX 550 Phantom Gaming 4GB",
    brand: "ASRock",
    description: "AMD Radeon RX 550 GPU, GDDR5, PCIe 3.0, DirectX 12",
    price: 6999,
    oldPrice: 8999,
    discountPercent: 22,
    image:
      "https://www.asrock.com/Graphics-Card/photo/Radeon%20RX550%20Low%20Profile%204GB(M1).png",
    specifications: {
      gpu: "AMD Radeon RX 550",
      memory: "4GB GDDR5",
      memoryInterface: "128-bit",
      coreClock: "1183 MHz",
      outputs: "HDMI, DisplayPort, DVI",
    },
    features: [
      "Low-profile design",
      "DirectX 12 & OpenGL 4.5 support",
      "AMD FreeSync technology",
      "Efficient cooling system",
    ],
  },
  {
    id: "corsair-vengeance-16gb-ddr4-3200",
    name: "Corsair Vengeance LPX 16GB DDR4 3200MHz",
    brand: "Corsair",
    description: "16GB (2x8GB) DDR4 DRAM Memory Kit for High Performance",
    price: 4599,
    oldPrice: 5299,
    discountPercent: 13,
    image:
      "https://assets.corsair.com/image/upload/c_pad,q_85,h_1100,w_1100,f_auto/products/Memory/CMK16GX4M2B3200C16/Gallery/VENG_LPX_BLK_00.webp",
    specifications: {
      capacity: "16GB (2x8GB)",
      type: "DDR4",
      speed: "3200MHz",
      latency: "CL16",
      voltage: "1.35V",
    },
    features: [
      "Optimized for high-performance overclocking",
      "Aluminum heat spreader for cooling",
      "XMP 2.0 support for easy setup",
      "Compatible with Intel & AMD platforms",
    ],
  },
  {
    id: "samsung-980-500gb-nvme",
    name: "Samsung 980 500GB NVMe SSD",
    brand: "Samsung",
    description:
      "500GB PCIe 3.0 M.2 NVMe Solid State Drive (Read up to 3500 MB/s)",
    price: 3899,
    oldPrice: 4499,
    discountPercent: 13,
    image:
      "https://image-us.samsung.com/SamsungUS/home/computing/memory-storage/solid-state-drives/06022025/MZ-V8V500BW_001_Front_Black.jpg?$product-details-jpg$",
    specifications: {
      capacity: "500GB",
      interface: "PCIe Gen 3.0 x4 NVMe",
      readSpeed: "Up to 3500 MB/s",
      writeSpeed: "Up to 3000 MB/s",
      formFactor: "M.2 2280",
    },
    features: [
      "High-performance NVMe SSD",
      "Intelligent TurboWrite technology",
      "Reliable thermal control",
      "Ideal for gaming & productivity",
    ],
  },
];

export default TopDealsProducts;
