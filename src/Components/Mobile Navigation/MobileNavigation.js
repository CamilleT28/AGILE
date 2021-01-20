function MobileNavigation(){
    return(
        <nav className=" fixed-bottom p-absolute d-sm-none d-md-none d-lg-none list-unstyled bg-white">
        <div className="container d-flex justify-content-center">
          <ul className="col-11 navbar list-unstyled p-1 mt-3 align-items-center">
            <li className="nav-item">
              <a className="nav-link d-flex flex-column align-items-center text-secondary" href="/index.html">
                <i className="fas fa-home fa-lg pb-1 navigation_link"></i>
                <small className="navigation_link">Home</small></a>
            </li>
            <li className="nav-item d-flex flex-column align-items-center">
                <a className="nav-link d-flex flex-column align-items-center text-secondary" href="/news.html">
                  <i className="far fa-newspaper fa-lg pb-1 navigation_link"></i>
                  <small className="navigation_link">News</small>
                </a>
            </li>
            <li className="nav-item d-flex flex-column align-items-center">
              <a className="nav-link d-flex flex-column align-items-center text-secondary" href="/report.html">
                <i className="far fa-plus-square fa-lg pb-1 navigation_link"></i>
                <small className="navigation_link">Report</small>
              </a>
          </li>
          <li className="nav-item d-flex flex-column align-items-center">
              <a className="nav-link d-flex flex-column align-items-center text-secondary" href="/report.html">
              <i className="fas fa-bell fa-lg pb-1 navigation_icon"></i>
                <small className="navigation_icon">Notifs</small>
              </a>
          </li>
            <li className="nav-item d-flex flex-column align-items-center pb-1">
              <a className="nav-link d-flex flex-column align-items-center text-secondary" href="/profile-page.html">
              <img src="/assets/profile.png" className="rounded-circle border border-light" width="25" height="25" alt="profileimage"/>
              <small className="navigation_link">Profile</small>
            </a>
            </li>
          </ul>
        </div>
      </nav>

    );
}

export default MobileNavigation;