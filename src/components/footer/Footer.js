import './Footer.scss';

function Footer() {
  return (
    <div className="footerContainer">
      <footer className="footerWrapper">
        <div className="footerContents">
          <div className="footerLanguage">
            <ul className="languageList">
              <li>
                <a href="/" id="korean">
                  한국어
                </a>
              </li>
              <li>
                <a href="/">English</a>
              </li>
              <li>
                <a href="/">日本語</a>
              </li>
            </ul>
          </div>
          <div className="footerCompanyInfo">
            <span className="infoTitle">(주)위플코퍼레이션</span>
            <div className="infoContents">
              <dl className="infoContentsDl">
                <dt className="infoContentsDt">대표</dt>
                <dd className="infoContentsDd">이진웅</dd>
              </dl>
              <dl className="infoContentsDl">
                <dt className="infoContentsDt">고객센터</dt>
                <dd className="infoContentsDd" id="importantInfo">
                  1788-2929(평일 08:00 ~ 20:00)
                </dd>
              </dl>
              <dl className="infoContentsDl">
                <dt className="infoContentsDt">사업장등록번호</dt>
                <dd className="infoContentsDd">105-77-12233</dd>
              </dl>
              <dl className="infoContentsDl">
                <dt className="infoContentsDt">통신판매업신고번호</dt>
                <dd className="infoContentsDd">2022-서울중구-1990</dd>
              </dl>
              <dl className="infoContentsDl">
                <dt className="infoContentsDt">주소</dt>
                <dd className="infoContentsDd">
                  서울 중구 한강대로 416 서울스퀘어 13층{' '}
                </dd>
              </dl>
              <dl className="infoContentsDl">
                <dt className="infoContentsDt">이메일</dt>
                <dd className="infoContentsDd">developWhat@wepleshop.com</dd>
              </dl>
              <dl className="infoContentsDl">
                <dt className="infoContentsDt">개인정보보호책임자</dt>
                <dd className="infoContentsDd">장종현</dd>
              </dl>
            </div>
          </div>
          <div className="footerContact">
            <div className="footerContactTop">
              <div className="contactTopContents">
                <ul className="contactTopList">
                  <li>
                    <a href="#">고객센터</a>
                  </li>
                  <li>
                    <a href="#">신고센터</a>
                  </li>
                  <li>
                    <a href="#">셀러신청</a>
                  </li>
                  <li>
                    <a href="#">기업셀러신청</a>
                  </li>
                  <li>
                    <a href="#">개인정보처리방침</a>
                  </li>
                  <li>
                    <a href="#">이용약관</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footerContactBottom">
              <div className="contactBottomContents">
                <ul className="contactBottomList">
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      className="fa fa-instagram"
                    />
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/"
                      className="fa fa-youtube"
                    />
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/i/flow/login"
                      className="fa fa-twitter"
                    />
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="fa fa-facebook"
                    />
                  </li>
                </ul>
              </div>
              <span class="contactBottomCorp">© 2022 WEPLE CORP.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
