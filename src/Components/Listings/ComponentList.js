import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import HomeData from '../../Data/HomeData';
import MetroCard from './MetroCard';

const ComponentList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(HomeData);

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Launch demo modal
      </Button>
      {HomeData.map((data) => (
        <MetroCard key={data.id} data={data} />
      ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ComponentList;

/* 
class ComponentsList extends React.Component {
  componentDidMount() {
    for (let i = 1; i < HomeData.length + 1; i++) {
      let rollOut = document.getElementById(i);
      rollOut.setAttribute('onclick', 'popupFunction(this.id)');
    }
  }
  render() {
    const component = HomeData.map((data) => (
      <Component
        key={data.id}
        id={data.id}
        imgUrl={data.imgUrl}
        title={data.title}
        direction={data.direction}
        description={data.description}
      />
    ));
    return <div>{component}</div>;
  }
}

export default ComponentsList; */
