import { getProjects } from "../../../sanity/sanity-utils";
import styles from "./page.module.css";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>{projects.map((project: any) => {

      return (
      <div key={project._id}>
       <div>{project.content[0].children[0].text}</div>
      </div>
    )})}</div>
  );
}
