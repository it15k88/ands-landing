import React from "react";
import { LogoImage } from "@/data";

const Footer = () => {
  const { light } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              <a href="/">
                <img src={light} alt="" />
              </a>
              <p>
                ands株式会社は、AIと人間の知見を掛け合わせ、企業とユーザー双方にとって価値ある体験を創出します。Web広告の"いま"と"つぎ"を and で結び、ads を伸ばすパートナーとして、クライアントの成長を加速させます。
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">COMPANY INFO │ 会社概要</h3>
              <p>
                〒107-0061 東京都港区北青山１丁目３－３<br />
                三橋ビル３階
              </p>
              <p>設立: 2025年6月</p>
              <p>
                E: <a href="#">info@ands.co.jp</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">VALUE │ 行動指針</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-database"></i>All-in Data
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-rocket"></i>Next Standard
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-handshake-o"></i>Deep Partnership
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright {new Date().getFullYear()} by{" "}
              <a href="#">ands株式会社</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
