import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='fixed-top container-fluid bg-white d-none d-sm-block boder border-light shadow-sm'>
      <nav className='container navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand-xs navbar-light'>
        <div className='d-flex flex-grow-1'>
          <span className='w-100 d-lg-none d-md-none d-sm-none d-block'></span>
          <Link
            className='navbar-brand d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-inline-block'
            to='index'
          >
            <img src='/assets/logo_image.svg' className='logo' alt='logo' />
          </Link>
        </div>
        <div className='collapse navbar-collapse flex-grow-1 text-right'>
          <ul className='navbar-nav ml-auto flex-nowrap align-items-center'>
            <li className='nav-item mx-1'>
              <Link className='nav-link navigation_link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item mx-1'>
              <Link className='nav-link navigation_link' to='/news'>
                News
              </Link>
            </li>
            <li className='nav-item mx-1'>
              <Link className='nav-link navigation_link' to='/report'>
                Report
              </Link>
            </li>
            <li className='nav-item mx-1'>
              <Link className='nav-link navigation_icon' to='/notifications'>
                <i className='fas fa-bell fa-lg'></i>
              </Link>
            </li>
            <li className='nav-item mx-1'>
              <Link className='nav-link' to='/profile-page'>
                <img
                  src='/assets/profile.png'
                  className='rounded-circle border border-light'
                  width='35'
                  height='35'
                  alt='profilepicture'
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
