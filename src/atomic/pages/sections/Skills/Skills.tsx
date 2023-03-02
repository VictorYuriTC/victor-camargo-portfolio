import { Col, Row } from "reactstrap";
import SkillCard from "./components/SkillsCard";
import useBackendSkills from "./hooks/useBackendSkills";
import useFrontendSkills from "./hooks/useFrontendSkills";
import useOtherTools from "./hooks/useOtherTools";
import useProgrammingLanguages from "./hooks/useProgrammingLanguages";

function Skills() {
  const programmingLanguages = useProgrammingLanguages();
  const frontendSkills = useFrontendSkills();
  const backendSkills = useBackendSkills();
  const otherTools = useOtherTools();

  return (
    <Row className="">
      <Col xs={{ size: 12 }} md={{ size: 6 }} lg={{ size: 3 }}>
        <h4>Programming Languages</h4>

        <div>
          {programmingLanguages.map((skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </Col>

      <Col xs={{ size: 12 }} md={{ size: 6 }} lg={{ size: 3 }}>
        <h4>Front-end Skills</h4>

        <div>
          {frontendSkills.map((skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </Col>

      <Col xs={{ size: 12 }} md={{ size: 6 }} lg={{ size: 3 }}>
        <h4>Back-end Skills</h4>

        <div>
          {backendSkills.map((skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </Col>

      <Col xs={{ size: 12 }} md={{ size: 6 }} lg={{ size: 3 }}>
        <h4>Other Tools</h4>

        <div>
          {otherTools.map((skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </Col>
    </Row>
  );
}
export default Skills;
