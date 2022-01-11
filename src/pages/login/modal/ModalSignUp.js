import './ModalSignUp.scss';

function ModalSignUp({ onClickSignIn }) {
  const onCloseModal = async event => {
    if (event.target === event.currentTarget) {
      onClickSignIn();
    }
  };

  return (
    <div className="modalLoginContainer" onClick={onCloseModal}>
      <div className="modal">
        <p className="text">가입을 환영합니다. 로그인 해주세요.</p>
        <button className="modalButton" onClick={onClickSignIn}>
          확인
        </button>
      </div>
    </div>
  );
}

export default ModalSignUp;
