import './ModalLogin.scss';

function ModalPassword({ modalPasswordClose }) {
  const onCloseModal = event => {
    if (event.target === event.currentTarget) {
      modalPasswordClose();
    }
  };

  return (
    <div className="modalLoginContainer" onClick={onCloseModal}>
      <div className="modal">
        <p className="text">비밀번호 (6자리 이상)</p>
        <button className="modalButton" onClick={modalPasswordClose}>
          확인
        </button>
      </div>
    </div>
  );
}

export default ModalPassword;
