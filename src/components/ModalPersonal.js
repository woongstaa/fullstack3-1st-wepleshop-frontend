import './ModalPersonal.scss';

function PersonalModal({ personalModalClose }) {
  const onCloseModal = event => {
    if (event.target === event.currentTarget) {
      personalModalClose();
    }
  };

  return (
    <div className="modalPersonalContainer" onClick={onCloseModal}>
      <div className="modal">
        <div className="modalContents">
          <p>
            (주)위플코퍼레이션(이하 "회사"라고 함)은 통신비밀보호법,
            전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등
            정보통신서비스제공자가 준수하여야 할 관련 법령상의 개인정보보호
            규정을 준수하며, 관련 법령에 의거한 개인정보취급방침을 정하여 이용자
            권익 보호에 최선을 다하고 있습니다. 마플코퍼레이션의
            개인정보취급방침은 다음과 같은 내용을 담고 있습니다.
          </p>
          <br />
          <br />
          <h3 className="modalTitle">제1조 총칙</h3>
          <br />
          <p>
            ① 개인정보란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는
            성명, 주민등록번호 등의 사항에 의하여 당해 개인을 알아볼 수 있는
            부호,문자,음성,음향 및 영상 등의 정보(당해 정보만으로는 특정 개인을
            식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을
            포함합니다)를 말합니다.
          </p>
          <br />
          <br />
          <h3 className="modalTitle">
            제2조 수집하는 개인정보의 항목 및 수집방법
          </h3>
          <br />
          <p>기타등등</p>
        </div>

        <button className="modalButton" onClick={personalModalClose}>
          확인
        </button>
      </div>
    </div>
  );
}

export default PersonalModal;
