const InputDevices = [
  // Keyboards
  {
    id: "razer-blackwidow-v4-pro",
    name: "Razer BlackWidow V4 Pro",
    brand: "Razer",
    description: "Mechanical Gaming Keyboard with Razer Yellow Switches",
    price: 15990,
    oldPrice: 17990,
    discountPercent: 11,
    image: "https://m.media-amazon.com/images/I/61b+3QeNq-L._AC_UY327_FMwebp_QL65_.jpg",
    specifications: {
      type: "Mechanical",
      switchType: "Razer Yellow (Linear)",
      backlight: "RGB Chroma",
      connectivity: "USB, Bluetooth 5.0",
      keyCount: 104,
      actuationForce: "45g",
      travelDistance: "3.5mm",
      pollingRate: "8000Hz",
      construction: "Aluminum frame"
    },
    features: ["Doubleshot PBT keycaps", "Multi-function digital dial", "Under-glow lighting"],
    warranty: "2 years"
  },
  {
    id: "logitech-mx-keys-advanced",
    name: "Logitech MX Keys Advanced",
    brand: "Logitech",
    description: "Wireless Illuminated Keyboard for Mac",
    price: 8990,
    oldPrice: 9990,
    discountPercent: 10,
    image: "https://m.media-amazon.com/images/I/61+D5C0h3fL._SX679_.jpg",
    specifications: {
      type: "Scissor-switch",
      backlight: "Yes (auto-adjusting)",
      connectivity: "Bluetooth, USB receiver",
      keyCount: 104,
      batteryLife: "10 days (backlit), 5 months (unlit)",
      compatibleSystems: ["Mac", "Windows", "iOS", "Android"]
    },
    features: ["Smart illumination", "Multi-device pairing", "Perfect stroke keys"],
    warranty: "1 year"
  },

  // Mic
  {
    id: "logitech-g502-x-plus",
    name: "Logitech G502 X Plus",
    brand: "Logitech",
    description: "LIGHTSPEED Wireless Gaming Mouse with RGB",
    price: 12990,
    oldPrice: 14990,
    discountPercent: 13,
    image: "https://m.media-amazon.com/images/I/61HhaVKAR6L._SX679_.jpg",
    specifications: {
      sensor: "HERO 25K",
      resolution: "100-25,600 DPI",
      buttons: 13,
      connectivity: "LIGHTSPEED wireless, Bluetooth",
      batteryLife: "120 hours (no lighting)",
      weight: "106g (with battery)"
    },
    features: ["LIGHTFORCE hybrid switches", "Adjustable weight system", "On-the-fly DPI shifting"],
    warranty: "2 years"
  },
  {
    id: "razer-deathadder-v2-pro",
    name: "Razer DeathAdder V2 Pro",
    brand: "Razer",
    description: "Wireless Gaming Mouse with Focus+ 20K DPI Optical Sensor",
    price: 10990,
    oldPrice: 12990,
    discountPercent: 15,
    image: "https://m.media-amazon.com/images/I/61HhaVKAR6L._AC_UY327_FMwebp_QL65_.jpg",
    specifications: {
      sensor: "Focus+ 20K DPI",
      resolution: "20,000 DPI",
      buttons: 8,
      connectivity: "HyperSpeed wireless, Bluetooth",
      batteryLife: "70 hours",
      weight: "88g"
    },
    features: ["Optical mouse switches", "100% PTFE mouse feet", "On-board memory profiles"],
    warranty: "2 years"
  },

  // Headsets
  {
    id: "steelseries-arctis-nova-pro-wireless",
    name: "SteelSeries Arctis Nova Pro Wireless",
    brand: "SteelSeries",
    description: "Multi-System Gaming Headset with Active Noise Cancellation",
    price: 29990,
    oldPrice: 32990,
    discountPercent: 9,
    image: "https://m.media-amazon.com/images/I/61q-YZLK5cL._AC_UY327_FMwebp_QL65_.jpg",
    specifications: {
      type: "Over-ear",
      connectivity: "2.4GHz wireless, Bluetooth 5.0",
      drivers: "40mm Neodymium",
      frequencyResponse: "10-22,000 Hz",
      microphone: "Retractable boom mic",
      batteryLife: "22 hours (ANC on)"
    },
    features: ["Dual-wireless technology", "GameDAC Gen 2", "360° spatial audio"],
    warranty: "1 year"
  },
  {
    id: "hyperx-cloud-alpha-wireless",
    name: "HyperX Cloud Alpha Wireless",
    brand: "HyperX",
    description: "Wireless Gaming Headset with 300 Hour Battery Life",
    price: 14990,
    oldPrice: 16990,
    discountPercent: 12,
    image: "https://m.media-amazon.com/images/I/51A-WtZZl4L._AC_UY327_FMwebp_QL65_.jpg",
    specifications: {
      type: "Over-ear",
      connectivity: "2.4GHz wireless",
      drivers: "50mm Dual Chamber",
      frequencyResponse: "13-27,000 Hz",
      microphone: "Detachable noise-cancelling",
      batteryLife: "300 hours"
    },
    features: ["DTS Headphone:X Spatial Audio", "Aluminum frame", "Memory foam ear cushions"],
    warranty: "2 years"
  },

  // Controllers
  {
    id: "xbox-elite-wireless-controller-series-2",
    name: "Xbox Elite Wireless Controller Series 2",
    brand: "Microsoft",
    description: "Customizable Pro Gaming Controller",
    price: 15990,
    oldPrice: 17990,
    discountPercent: 11,
    image: "https://m.media-amazon.com/images/I/71k-1plH95L.AC_UY327_FMwebp_QL65.jpg",
    specifications: {
      compatibility: ["Xbox Series X/S", "Xbox One", "Windows 10/11"],
      connectivity: "Bluetooth, USB-C",
      batteryLife: "40 hours"
    },
    features: ["Interchangeable thumbsticks", "Paddle shifters", "Hair trigger locks", "Adjustable-tension thumbsticks", "Wrap-around rubberized grip", "Xbox Accessories app support"],
    warranty: "1 year"
  },
  {
    id: "dualsense-edge-wireless-controller",
    name: "DualSense Edge Wireless Controller",
    brand: "Sony",
    description: "Premium Customizable PS5 Controller",
    price: 17990,
    oldPrice: 19990,
    discountPercent: 10,
    image: "https://m.media-amazon.com/images/I/51qcJKGmDXL.AC_UY327_FMwebp_QL65.jpg",
    specifications: {
      compatibility: "PS5, PC",
      connectivity: "USB-C, Bluetooth",
      batteryLife: "5-10 hours"
    },
    features: ["Interchangeable stick caps", "Back buttons", "Trigger stops", "Adaptive triggers", "Haptic feedback", "Built-in speaker"],
    warranty: "1 year"
  },

  // Webcams
  {
    id: "logitech-brio-4k",
    name: "Logitech Brio 4K",
    brand: "Logitech",
    description: "Ultra HD Pro Webcam with HDR",
    price: 18990,
    oldPrice: 21990,
    discountPercent: 14,
    image: "https://m.media-amazon.com/images/I/311d5FDJ7oL.SX300_SY300_QL70_FMwebp.jpg",
    specifications: {
      resolution: "4K Ultra HD (30fps), 1080p (60fps)",
      fieldOfView: "65°, 78°, 90° (adjustable)",
      autofocus: "Yes",
      microphone: "Dual omnidirectional mics"
    },
    features: ["HDR", "RightLight 3 with HDR", "Windows Hello facial recognition"],
    warranty: "2 years"
  },
  {
    id: "razer-kiyo-pro-ultra",
    name: "Razer Kiyo Pro Ultra",
    brand: "Razer",
    description: "4K Webcam with Adaptive Light Sensor",
    price: 24990,
    oldPrice: 27990,
    discountPercent: 11,
    image: "https://m.media-amazon.com/images/I/51LMsZKbyeL.AC_UY327_FMwebp_QL65.jpg",
    specifications: {
      resolution: "4K Ultra HD (30fps), 1080p (60fps)",
      sensor: "Sony STARVIS 2.9µm",
      aperture: "f/1.7",
      fieldOfView: "80° (adjustable)"
    },
    features: ["Adaptive Light Sensor", "HDR", "AI-powered background removal"],
    warranty: "1 year"
  }
];

export default InputDevices;