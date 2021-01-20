const MetroCard = ({ data: { imgUrl, id, title, description, direction } }) => {
  return (
    <div className='component d-flex' id={id}>
      <div className='p-2 my-1 shadow-sm'>
        <img
          className='component__image'
          alt={'lineImage' + title}
          src={imgUrl}
        />
      </div>
      <div className='component__text p-2 pl-3 ml-2 my-1 shadow-sm w-100'>
        <p className='h6 p-0 m-0' id={'componentTitle' + id}>
          {title}
        </p>
        <small className='text-secondary p-0 m-0'>{direction}</small>
        <p className='description mt-1 mb-0'>{description}</p>
      </div>
    </div>
  );
};

export default MetroCard;
