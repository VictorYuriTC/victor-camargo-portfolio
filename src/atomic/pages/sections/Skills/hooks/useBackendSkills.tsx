import {
  SiDocker,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiSequelize,
} from "react-icons/si";
import ISkill from "../interfaces/ISkill";
import useSvgDefaultSize from "./useSvgDefaultSIze";

export default function useBackendSkills(): ISkill[] {
  const svgDefaultSize = useSvgDefaultSize();

  const nodeIcon = <SiNodedotjs style={{ ...svgDefaultSize }} />;
  const mySqlIcon = <SiMysql style={{ ...svgDefaultSize }} />;
  const dockerIcon = <SiDocker style={{ ...svgDefaultSize }} />;
  const mongoDbIcon = <SiMongodb style={{ ...svgDefaultSize }} />;
  const sequelizeIcon = <SiSequelize style={{ ...svgDefaultSize }} />;
  return [
    {
      name: "Node.js",
      icon: nodeIcon,
    },

    {
      name: "MySQL",
      icon: mySqlIcon,
    },

    {
      name: "Sequelize",
      icon: sequelizeIcon,
    },

    {
      name: "Docker",
      icon: dockerIcon,
    },

    {
      name: "MongoDB",
      icon: mongoDbIcon,
    },
  ];
}
