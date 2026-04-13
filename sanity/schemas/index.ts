import home from "./home-schema";
import services from "./services-schema";
import robotic from "./robotic-schema";
import network from "./network-schema";
import { localeText } from "./objects/localeText";
import { localeString } from "./objects/localeString";
import { localePortableText } from "./objects/localePortableText";
import infoCard from "./objects/infoCard";
import statItem from "./objects/statItem";

const schemas = [
  home,
  services,
  robotic,
  network,
  localeText,
  localeString,
  localePortableText,
  infoCard,
  statItem,
];

export default schemas;
