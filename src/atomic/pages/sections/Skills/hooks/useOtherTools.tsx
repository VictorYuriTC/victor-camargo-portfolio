import { SiGit, SiGithub } from "react-icons/si";
import ISkill from "../interfaces/ISkill";
import useSvgDefaultSize from "./useSvgDefaultSIze";

export default function useOtherTools(): ISkill[] {
  const svgDefaultSize = useSvgDefaultSize();

  function getGitStyle() {
    const gitColor = "#F1502F";
    return {
      ...svgDefaultSize,
      fill: gitColor,
    };
  }

  function getGitHubStyle() {
    const gitHubColor = "#333";
    return {
      ...svgDefaultSize,
      fill: gitHubColor,
    };
  }

  const gitIcon = <SiGit style={{ ...getGitStyle() }} />;
  const gitHubIcon = <SiGithub style={{ ...getGitHubStyle() }} />;
  return [
    {
      name: "Git",
      icon: gitIcon,
    },

    {
      name: "GitHub",
      icon: gitHubIcon,
    },
  ];
}
