function Sidebar(){
    return(
    <div className="sidebar container mx-auto col-lg-4 col-md-3">
        <div className="user__details row p-4">
            <img src="/assets/profile.png" alt="profile_picture" className="rounded-circle border border-light" width="50" height="50" />
            <div className="user__details--text pl-3">
                <p className="h5 p-0 m-0">@username</p>
                <small className=" p-0 m-0">email@email.com</small>
            </div>
        </div>
        <div className="text-center d-flex flex-column align-items-center">
            <small className="pt-4 pb-3">Need to report something?</small>
            <button className="btn btn-primary w-75">Report</button>
            </div>
    </div>
    );
}

export default Sidebar;