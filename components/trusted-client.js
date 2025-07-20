import React from "react";
import Link from "next/link";
import { TrustClientData } from "@/data";

const TrustedClient = ({ extraClassName }) => {
  const { image, title, text, url } = TrustClientData;
  return (
    <section className={`commonSection trustClient ${extraClassName}`} style={{ paddingBottom: '120px' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="CL_content">
              <img src={image} alt="" style={{ maxWidth: '770px', maxHeight: '687px' }} />
              <div className="abc_inner">
                <div className="row">
                  <div className="col-lg-5 col-sm-12 col-md-5"></div>
                  <div className="col-lg-7 col-sm-12 col-md-7">
                    <div className="abci_content">
                      <h2>{title}</h2>
                      <p style={{ fontSize: '18px', lineHeight: '1.8', fontStyle: 'italic' }}>{text}</p>
                      {/* <Link href={url}>
                        <a className="common_btn red_bg">
                          <span>詳しく見る</span>
                        </a>
                      </Link> */}
                      <div style={{ paddingTop: '100px' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClient;
