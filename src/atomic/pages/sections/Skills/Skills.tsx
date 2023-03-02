import { ReactNode } from "react";
import { Col, Row } from "reactstrap";
import SkillCard from "./components/SkillsCard";
import useBackendSkills from "./hooks/useBackendSkills";
import useFrontendSkills from "./hooks/useFrontendSkills";
import useProgrammingLanguages from "./hooks/useProgrammingLanguages";

function Skills() {
  const programmingLanguages = useProgrammingLanguages();
  const frontendSkills = useFrontendSkills();
  const backendSkills = useBackendSkills();

  return (
    <Row className="">
      <Col xs={{ size: 12 }} md={{ size: 6 }} lg={{ size: 4 }}>
        <h4>Programming Languages</h4>

        <div>
          {programmingLanguages.map((skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </Col>

      <Col xs={{ size: 12 }} md={{ size: 6 }} lg={{ size: 4 }}>
        <h4>Front-End Skills</h4>

        <div>
          {frontendSkills.map((skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </Col>

      <Col xs={{ size: 12 }} md={{ size: 6 }} lg={{ size: 4 }}>
        <h4>Back-end Skills</h4>

        <div>
          {backendSkills.map((skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </Col>
    </Row>
  );
}
export default Skills;
