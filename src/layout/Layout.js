import React from "react";
import TopNavigation from "./TopNavigation";
import Person from "../components/Person/Person";
import { Container, Row, Col } from "react-bootstrap";

function Layout() {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12} md={10} sm={12}>
            <>
              <TopNavigation />
              <Person />
            </>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Layout;
