import { Card } from "reactstrap";
import ISkill from "../interfaces/ISkill";

interface IProps {
  skill: ISkill;
}

function SkillCard({ skill }: IProps) {
  const { icon, name } = skill;
  return (
    <Card className="">
      <span>{name}</span>
      <span>{icon}</span>
    </Card>
  );
}
export default SkillCard;
