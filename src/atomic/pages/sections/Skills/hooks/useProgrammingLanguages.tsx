import { SiJavascript, SiTypescript } from "react-icons/si";
import ISkill from "../interfaces/ISkill";
import useSvgDefaultSize from "./useSvgDefaultSIze";

export default function useProgrammingLanguages(): ISkill[] {
  const svgDefaultSize = useSvgDefaultSize();
  const typeScriptIcon = <SiTypescript style={{ ...svgDefaultSize }} />;

  const javaScriptIcon = <SiJavascript style={{ ...svgDefaultSize }} />;
  return [
    {
      name: "TypeScript",
      icon: typeScriptIcon,
    },

    {
      name: "JavaScript",
      icon: javaScriptIcon,
    },
  ];
}
