import Desktops from "./DesktopsList";
import FansAndCoolings from "./FansAndCoolingsList";
import GamingChairs from "./GamingChairList";
import GraphicsCards from "./GraphicsCardsList";
import InputDevices from "./InputDevicesList";
import Laptops from "./LaptopsList";
import Motherboards from "./MotherboardsList";
import OutputDevices from "./OutputDevicesList";
import PCCabinetAndChasis from "./PCCabinetAndChasisList";
import PowerSupplies from "./PowerSuppliesList";
import RAMS from "./RAMList";
import Storages from "./StoragesList";
import Processors from "./ProcessorsList";
import TopDealsProducts from "./TopDealsProducts";

const products = [
  ...Desktops,
  ...FansAndCoolings,
  ...GamingChairs,
  ...GraphicsCards,
  ...InputDevices,
  ...Laptops,
  ...Motherboards,
  ...OutputDevices,
  ...PCCabinetAndChasis,
  ...PowerSupplies,
  ...RAMS,
  ...Storages,
  ...Processors,
  ...TopDealsProducts
];

const normalizedProducts = products.map((p) => ({
  ...p,
  id: String(p.id),
}));

export default normalizedProducts;
