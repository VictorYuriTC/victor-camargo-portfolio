import { SiJavascript, SiPython, SiTypescript } from "react-icons/si";
import ISkill from "../interfaces/ISkill";
import useSvgDefaultSize from "./useSvgDefaultSIze";

export default function useProgrammingLanguages(): ISkill[] {
  const svgDefaultSize = useSvgDefaultSize();

  function getTypeScriptStyle() {
    const typeScriptColor = "#3178c6";
    return {
      ...svgDefaultSize,
      fill: typeScriptColor,
    };
  }

  function getJavaScriptStyle() {
    const javaScriptColor = "#F0DB4F";
    return {
      ...svgDefaultSize,
      fill: javaScriptColor,
    };
  }

  function getPythonStyle() {
    const pythonColor = "#4584b6";
    return {
      ...svgDefaultSize,
      fill: pythonColor,
    };
  }
  const typeScriptIcon = <SiTypescript style={{ ...getTypeScriptStyle() }} />;

  const javaScriptIcon = <SiJavascript style={{ ...getJavaScriptStyle() }} />;

  const pythonIcon = <SiPython style={{ ...getPythonStyle() }} />;
  return [
    {
      name: "TypeScript",
      icon: typeScriptIcon,
    },

    {
      name: "JavaScript",
      icon: javaScriptIcon,
    },

    {
      name: "Python",
      icon: pythonIcon,
    },
  ];
}
