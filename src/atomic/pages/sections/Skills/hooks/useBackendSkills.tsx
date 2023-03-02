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

  function getNodeStyle() {
    const nodeColor = "#3c873a";
    return {
      ...svgDefaultSize,
      fill: nodeColor,
    };
  }

  function getMySqlStyle() {
    const mySqlColor = "#00758F";
    return {
      ...svgDefaultSize,
      fill: mySqlColor,
    };
  }

  function getSequelizeStyle() {
    const sequelizeColor = "#00273f";
    return {
      ...svgDefaultSize,
      fill: sequelizeColor,
    };
  }

  function getDockerStyle() {
    const dockerColor = "#0db7ed";
    return {
      ...svgDefaultSize,
      fill: dockerColor,
    };
  }

  function mongoDbStyle() {
    const mongoDbColor = "#4DB33D";
    return {
      ...svgDefaultSize,
      fill: mongoDbColor,
    };
  }

  const nodeIcon = <SiNodedotjs style={{ ...getNodeStyle() }} />;
  const mySqlIcon = <SiMysql style={{ ...getMySqlStyle() }} />;
  const sequelizeIcon = <SiSequelize style={{ ...getSequelizeStyle() }} />;
  const dockerIcon = <SiDocker style={{ ...getDockerStyle() }} />;
  const mongoDbIcon = <SiMongodb style={{ ...mongoDbStyle() }} />;

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
