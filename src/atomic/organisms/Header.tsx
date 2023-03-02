import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import HeaderLink from "./components/HeaderLink";

function Header() {
  return (
    <Row className="">
      <Col md={{ size: 1 }}>Svg</Col>

      <Col md={{ size: 11 }}>
        <HeaderLink text="Projects" href="#" />

        <HeaderLink text="Skills" href="#" />
      </Col>
    </Row>
  );
}
export default Header;
