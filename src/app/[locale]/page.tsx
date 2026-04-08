import { getProjects } from "../../../sanity/sanity-utils";
import styles from "./page.module.css";

export default async function Home() {
  const projects = await getProjects();
  return <div></div>;
}
