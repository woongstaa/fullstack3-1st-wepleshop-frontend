import './ModalTerms.scss';

function TermsModal({ termsModalClose }) {
  const onCloseModal = event => {
    if (event.target === event.currentTarget) {
      termsModalClose();
    }
  };

  return (
    <div className="modalTermsContainer" onClick={onCloseModal}>
      <div className="modal">
        <div className="modalContents">
          <p>회원가입 전 반드시 이용약관을 읽어보시기 바랍니다.</p>
          <br />
          <h3 className="modalTitle">제1조(목적)</h3>
          <br />
          <p>
            이 약관은 (주)위플코퍼레이션이 운영하는 [위플, 위플샵 (이하 "몰"이라
            한다)]에서 제공하는 개발 및 주문인쇄제작(PRINT ON DEMAND)을 통한
            전자상거래 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 사이버
            몰과 이용자의 권리․의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
          <br />
          <p>
            ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지
            않는 한 이 약관을 준용합니다.」
          </p>
          <br />
          <br />
          <br />
          <h3 className="modalTitle">제2조(정의)</h3>
          <br />
          <p>기타등등</p>
        </div>

        <button className="modalButton" onClick={termsModalClose}>
          확인
        </button>
      </div>
    </div>
  );
}

export default TermsModal;
