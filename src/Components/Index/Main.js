import MetroCardList from '../Listings/MetroCardList';
import Popup from '../Popup/Popup';
import Sidebar from './Sidebar';

function Main() {
  return (
    <main className='row container mx-auto '>
      <div
        className='blurhook row container mx-auto position-relative d-flex h-100'
        id='blurhook'
      >
        <div className='row profile mx-auto shadow p-3 col-lg-7 col-md-9 col-sm-10 col-10 '>
          <h3 className='title text-center mx-auto '>Your Updates</h3>
          <div className='component__container--master w-100 overflow-auto'>
            <div
              className='component__container w-100 p-3'
              id='component__container'
            >
              <MetroCardList />
            </div>
            <p className='h4 text-secondary text-center m-4'>
              No more updates :)
            </p>
          </div>
        </div>
        <Sidebar />
      </div>
      <Popup />
    </main>
  );
}
export default Main;
