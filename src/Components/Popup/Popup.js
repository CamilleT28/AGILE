function Popup() {
  return (
    <div className='popup--container' id='popupContainer'>
      <div className='individual__card--master' id='individual__card--master'>
        <div className='individual__card container shadow bg-light d-flex flex-column text-center align-items-center pt-4 rounded'>
          <i
            className='fas fa-times fa-lg pb-4 pr-2 align-self-end'
            id='pouppExit'
          ></i>
          <img
            src=''
            alt='LinePicture'
            height='100px'
            width='100px'
            id='popupImage'
          />
          <h3 className='p-0 m-0' id='popupTitle'>
            {' '}
          </h3>
          <small className='mb-3 text-secondary' id='popupDirection'></small>
          <p className='description px-5' id='popupDescription'></p>
        </div>
      </div>
    </div>
  );
}

export default Popup;
