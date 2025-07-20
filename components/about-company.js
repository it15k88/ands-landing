import React from "react";
import { AboutCompanyData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";

const AboutCompany = () => {
  const { sectionContent, button, gallery } = AboutCompanyData;
  return (
    <section className="commonSection ab_agency featured ">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} className="PR_79">
            <h4 className="sub_title">{sectionContent.subTitle}</h4>
            <h2 className="sec_title MB_45">{sectionContent.title}</h2>
            <p className="sec_desc">{sectionContent.text}</p>
            <a className="common_btn red_bg" href={button.url}>
              <span>{button.label}</span>
            </a>
          </Col>
          <Col lg={6} md={6} sm={12}>
            {gallery.map((item, index) => (
              <div className={`ab_img${index + 1}`} key={index}>
                <img src={item} alt="" style={{ maxWidth: '470px', maxHeight: '378px' }} />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutCompany;
