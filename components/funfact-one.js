import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FunfactData } from "@/data";

const FunfactOne = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };

  const valueDescriptions = {
    "All-in Data": "数字に対して徹底的に透明であること。",
    "Next Standard": "常に「次の当たり前」をつくり出す挑戦者であること。",
    "Deep Partnership": "目標の共有から始まる\"伴走\"であること。",
  };

  return (
    <section className="commonSection funfact">
      <Container>
        <Row>
          <Col lg={12} className="text-center" style={{ paddingTop: '113px' }}>
            <h2 className="sec_title white">VALUE │ 行動指針</h2>
            <p className="sec_desc color_aaa">
              私たちが大切にしている3つの価値観
            </p>
          </Col>
        </Row>
        <Row>
          {FunfactData.map(({ title, countNumber }, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <div className="singlefunfact text-center">
                <h1 className="timer">
                  <span className="countSpan"></span>
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? countNumber : 0} />
                  </VisibilitySensor>
                </h1>
                <h3>{title}</h3>
                <p style={{ color: '#aaaaaa', fontSize: '14px', marginTop: '10px' }}>
                  {valueDescriptions[title]}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunfactOne;
