import { Link, Outlet } from "react-router-dom";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

import "./AdminDashboard.scss";
const AdminDashboard = () => {
  return (
    <div className="adminDashboard">
      <div className="container">
        <div className="contentAdminDashboard">
          <sidebar className="sidebar">
            <div className="categories">
              <div className="title">
                <h4>Aksiyon</h4>
                <hr />
              </div>
              <div className="listCategories">
                <ul>
                  <li>
                    <Link to="/admin/ekle">
                      <span>Proje Ekle</span>
                      <ChevronRightOutlinedIcon
                        style={{ fontSize: "1.2rem" }}
                      />
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/admin/sil">
                      <span>Projeler</span>
                      <ChevronRightOutlinedIcon
                        style={{ fontSize: "1.2rem" }}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </sidebar>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
