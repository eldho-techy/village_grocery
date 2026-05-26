import "../../assets/css/admin/dashboard.css";
import bicycle from "../../assets/images/bicycle.jpg";
import profilephoto from "../../assets/images/profile-photo.jpg";
import sunset from "../../assets/images/sunset.jpg";
import { FaSearch } from "react-icons/fa";

import "font-awesome/css/font-awesome.min.css";

function Dashboard() {
  return (
    <div className="templatemo-flex-row">
      <div className="templatemo-sidebar">
        <header className="templatemo-site-header">
          <div className="square" />
          <h1>Visual Admin</h1>
        </header>
        <div className="profile-photo-container">
          <img
            src={profilephoto}
            alt="Profile Photo"
            className="img-responsive"
          />
          <div className="profile-photo-overlay" />
        </div>
        {/* <!-- Search box --> */}
        <form className="templatemo-search-form" role="search">
          <div className="input-group">
            <button type="submit" className="fa fa-search" />
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              name="srch-term"
              id="srch-term"
            />
          </div>
        </form>

        <div className="mobile-menu-icon">
          <i className="fa fa-bars" />
        </div>
        <nav className="templatemo-left-nav">
          <ul>
            <li>
              <a href="#" className="active">
                <i className="fa fa-home fa-fw" />
                Dashboard
              </a>
            </li>
            <li>
              <a href="data-visualization.html">
                <i className="fa fa-bar-chart fa-fw" />
                Charts
              </a>
            </li>
            <li>
              <a href="data-visualization.html">
                <i className="fa fa-database fa-fw" />
                Data Visualization
              </a>
            </li>
            <li>
              <a href="maps.html">
                <i className="fa fa-map-marker fa-fw" />
                Maps
              </a>
            </li>
            <li>
              <a href="manage-users.html">
                <i className="fa fa-users fa-fw" />
                Manage Users
              </a>
            </li>
            <li>
              <a href="preferences.html">
                <i className="fa fa-sliders fa-fw" />
                Preferences
              </a>
            </li>
            <li>
              <a href="login.html">
                <i className="fa fa-eject fa-fw" />
                Sign Out
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Main content */}
      <div className="templatemo-content col-1 light-gray-bg">
        <div className="templatemo-top-nav-container">
          <div className="row">
            <nav className="templatemo-top-nav col-lg-12 col-md-12">
              <ul className="text-uppercase">
                <li>
                  <a href="true" className="active">
                    Admin panel
                  </a>
                </li>
                <li>
                  <a href="true">Dashboard</a>
                </li>
                <li>
                  <a href="true">Overview</a>
                </li>
                <li>
                  <a href="login.html">Sign in form</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="templatemo-content-container">          
          <div className="templatemo-flex-row flex-content-row">
            <div className="col-1">            
            </div>
            <div className="col-1">
              <div className="panel panel-default templatemo-content-widget white-bg no-padding templatemo-overflow-hidden">
                <i className="fa fa-times" />
                <div className="panel-heading templatemo-position-relative">
                  <h2 className="text-uppercase">User Table</h2>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <td>No.</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Username</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>John</td>
                        <td>Smith</td>
                        <td>@jS</td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>Bill</td>
                        <td>Jones</td>
                        <td>@bJ</td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Mary</td>
                        <td>James</td>
                        <td>@mJ</td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>Steve</td>
                        <td>Bride</td>
                        <td>@sB</td>
                      </tr>
                      <tr>
                        <td>5.</td>
                        <td>Paul</td>
                        <td>Richard</td>
                        <td>@pR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          <footer className="text-right">
            <p>Copyright © 2084 Company Name | Design: Template Mo</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
