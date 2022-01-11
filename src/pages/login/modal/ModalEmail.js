import './ModalLogin.scss';

function ModalEmail({ modalEmailClose }) {
  const onCloseModal = event => {
    if (event.target === event.currentTarget) {
      modalEmailClose();
    }
  };

  return (
    <div className="modalLoginContainer" onClick={onCloseModal}>
      <div className="modal">
        <p className="text">이메일 형식을 확인해 주세요.</p>
        <button className="modalButton" onClick={modalEmailClose}>
          확인
        </button>
      </div>
    </div>
  );
}

export default ModalEmail;
