import './ModalLogin.scss';

function ModalName({ modalNameClose }) {
  const onCloseModal = event => {
    if (event.target === event.currentTarget) {
      modalNameClose();
    }
  };

  return (
    <div className="modalLoginContainer" onClick={onCloseModal}>
      <div className="modal">
        <p className="text">이름을 써주세요.</p>
        <button className="modalButton" onClick={modalNameClose}>
          확인
        </button>
      </div>
    </div>
  );
}

export default ModalName;
