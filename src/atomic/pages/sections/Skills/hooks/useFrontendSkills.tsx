import ISkill from "../interfaces/ISkill";
import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiReact,
  SiStyledcomponents,
} from "react-icons/si";
import useSvgDefaultSize from "./useSvgDefaultSIze";

export default function useFrontendSkills(): ISkill[] {
  const svgDefaultSize = useSvgDefaultSize();

  const reactIcon = <SiReact style={{ ...svgDefaultSize }} />;

  const htmlIcon = <SiHtml5 style={{ ...svgDefaultSize }} />;

  const cssIcon = <SiCss3 style={{ ...svgDefaultSize }} />;

  const bootstrapIcon = <SiBootstrap style={{ ...svgDefaultSize }} />;

  const styledComponentsIcon = (
    <SiStyledcomponents style={{ ...svgDefaultSize }} />
  );
  return [
    {
      name: "React.js",
      icon: reactIcon,
    },

    {
      name: "HTML",
      icon: htmlIcon,
    },

    {
      name: "CSS",
      icon: cssIcon,
    },

    {
      name: "Bootstrap",
      icon: bootstrapIcon,
    },

    {
      name: "Styled-Components",
      icon: styledComponentsIcon,
    },
  ];
}
