const products = [
  {
    id: 'intel-i9-14900K',
    name: "Intel Core i9‑14900K",
    brand: "Intel",
    description: "24-Core (8P+16E), Turbo up to ~6.0 GHz",
    price: 43000,
    oldPrice: 47000,
    discountPercent: null,
    image: "https://m.media-amazon.com/images/I/619ytLAytAL._AC_UY327_FMwebp_QL65_.jpg",
    specifications: {
      cores: 24,
      performanceCores: 8,
      efficiencyCores: 16,
      threads: 32,
      baseFrequency: "3.2 GHz (P-core), 2.4 GHz (E-core)",
      maxTurboFrequency: "6.0 GHz",
      cache: "36MB Intel Smart Cache",
      TDP: "125W",
      maxTurboPower: "253W",
      socket: "LGA 1700",
      memorySupport: "DDR5-5600, DDR4-3200",
      maxMemory: 128,
      integratedGraphics: "Intel UHD Graphics 770",
      PCIeVersion: "PCIe 5.0 & 4.0",
      PCIeLanes: 20,
      architecture: "Raptor Lake Refresh",
      lithography: "Intel 7 (10nm)",
      launchDate: "Q4 2023"
    },
    features: [
      "Intel Thermal Velocity Boost",
      "Intel Adaptive Boost Technology",
      "Intel Deep Learning Boost",
      "Support for Intel Optane Memory",
      "Unlocked for overclocking",
      "Intel Thread Director for optimized workload scheduling"
    ],
    includedCooler: false,
    warranty: "3-year limited warranty"
  }
]
  export default products;