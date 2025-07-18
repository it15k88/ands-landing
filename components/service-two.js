import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ServicePostTwoData } from "@/data";
import ServiceCardTwo from "@/components/service-card-two";

const ServiceTwo = () => {
  const { sectionContent, posts1, posts2 } = ServicePostTwoData;
  const { title, subTitle, text } = sectionContent;
  return (
    <section className="service_section commonSection">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h4 className="sub_title red_color">{subTitle}</h4>
            <h2 className="sec_title white">{title}</h2>
            <p className="sec_desc color_aaa">{text[0]}</p>
            {/* <p className="sec_desc color_aaa" style={{ marginTop: '50px' }}>{text[1]}</p> */}
          </Col>
        </Row>
        <Row className="custom_column">
          {posts1.map((data, index) => (
            <Col key={index} lg={4} md={6} sm={12}>
              <ServiceCardTwo data={data} />
            </Col>
          ))}
        </Row>
        <Row style={{ marginTop: '100px' }}>
          <Col lg={12} className="text-center">
            {/* <h4 className="sub_title red_color">{subTitle}</h4> */}
            {/* <h2 className="sec_title white">{title}</h2> */}
            {/* <p className="sec_desc color_aaa">{text[0]}</p> */}
            <p className="sec_desc color_aaa">{text[1]}</p>
          </Col>
        </Row>
        <Row className="custom_column">
          {posts2.map((data, index) => (
            <Col key={index} lg={4} md={6} sm={12}>
              <ServiceCardTwo data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceTwo;
