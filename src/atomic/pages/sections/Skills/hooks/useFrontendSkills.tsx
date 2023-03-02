import ISkill from "../interfaces/ISkill";
import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiReact,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";
import useSvgDefaultSize from "./useSvgDefaultSIze";

export default function useFrontendSkills(): ISkill[] {
  const svgDefaultSize = useSvgDefaultSize();

  function getReactStyle() {
    const reactColor = "#61DBFB";
    return {
      ...svgDefaultSize,
      fill: reactColor,
    };
  }

  function getHtmlStyle() {
    const htmlColor = "#f06529";
    return {
      ...svgDefaultSize,
      fill: htmlColor,
    };
  }

  function getCssStyle() {
    const cssColor = "#2965f1";
    return {
      ...svgDefaultSize,
      fill: cssColor,
    };
  }

  function getBootstrapStyle() {
    const bootstrapColor = "#563d7c";
    return {
      ...svgDefaultSize,
      fill: bootstrapColor,
    };
  }

  function getStyledComponentsStyle() {
    const styledComponentsColor = "palevioletred";
    return {
      ...svgDefaultSize,
      fill: styledComponentsColor,
    };
  }

  function getTailwindStyle() {
    const tailwindColor = "#4169e1";
    return {
      ...svgDefaultSize,
      fill: tailwindColor,
    };
  }

  const reactIcon = <SiReact style={{ ...getReactStyle() }} />;
  const htmlIcon = <SiHtml5 style={{ ...getHtmlStyle() }} />;
  const cssIcon = <SiCss3 style={{ ...getCssStyle() }} />;
  const bootstrapIcon = <SiBootstrap style={{ ...getBootstrapStyle() }} />;
  const styledComponentsIcon = (
    <SiStyledcomponents style={{ ...getStyledComponentsStyle() }} />
  );

  const tailwindIcon = <SiTailwindcss style={{ ...getTailwindStyle() }} />;
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
      name: "Tailwind",
      icon: tailwindIcon,
    },

    {
      name: "Styled-Components",
      icon: styledComponentsIcon,
    },
  ];
}
