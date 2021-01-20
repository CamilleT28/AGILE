function Header(){
    return(
    <header className="fixed-top container-fluid bg-white d-none d-sm-block boder border-light shadow-sm">
    <nav className="container navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand-xs navbar-light">
      <div className= "d-flex flex-grow-1">
        <span className="w-100 d-lg-none d-md-none d-sm-none d-block"></span>
        <a className="navbar-brand d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-inline-block" href="index.html"><img src='/assets/logo_image.svg' className="logo" alt="logo" /></a>
      </div>
      <div className="collapse navbar-collapse flex-grow-1 text-right">
        <ul className="navbar-nav ml-auto flex-nowrap align-items-center">
          <li className="nav-item mx-1">
            <a className="nav-link navigation_link" href="/index.html">Home</a>
          </li>
          <li className="nav-item mx-1">
            <a className="nav-link navigation_link" href="/news.html">News</a>
          </li>
          <li className="nav-item mx-1">
            <a className="nav-link navigation_link" href="/report.html">Report</a>
          </li>
          <li className="nav-item mx-1">
            <a className="nav-link navigation_icon" href="/notifications.html"><i className="fas fa-bell fa-lg"></i></a>
          </li>
          <li className="nav-item mx-1">
            <a className="nav-link" href="/profile-page.html">
              <img src="/assets/profile.png" className="rounded-circle border border-light" width="35" height="35" alt="profilepicture" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
    );}

export default Header;