import BookingForm from "./BookingForm.jsx";
import Modal from "react-modal";
import { useState } from "react";

function TheHeader({ setBookings }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <header className="App-header">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Create booking form"
      >
        <BookingForm setBookings={setBookings} />
      </Modal>
      <button onClick={openModal}>Create new booking</button>
    </header>
  );
}

export default TheHeader;
