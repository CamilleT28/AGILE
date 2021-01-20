import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import HomeData from '../../Data/HomeData';
import MetroCard from './MetroCard';

const MetroCardList = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const openModal = (data) => {
    setActive(data);
    handleShow();
  };

  return (
    <>
      {HomeData.map((data) => (
        <div onClick={() => openModal(data)} key={data.id}>
          <MetroCard data={data} />
        </div>
      ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{active?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{active?.description}</Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MetroCardList;
