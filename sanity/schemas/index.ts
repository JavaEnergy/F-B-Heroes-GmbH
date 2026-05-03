import home from "./home-schema";
import services from "./services-schema";
import robotic from "./robotic-schema";
import network from "./network-schema";
import about from "./about-schema";
import extraSchema from "./extra-schema";
import caseStudy from "./case-study-schema";
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
  about,
  extraSchema,
  caseStudy,
  localeText,
  localeString,
  localePortableText,
  infoCard,
  statItem,
];

export default schemas;
