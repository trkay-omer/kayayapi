import "./AdminProjeler.scss";
import ListCardDelete from "../../components/listCardDelete/ListCardDelete";
const AdminProjeSil = () => {
  return (
    <div className="projeList">
      <div className="title">
        <h4>Projeler</h4>
        <hr />
      </div>

      <div className="list">
        <ListCardDelete/>
      </div>
    </div>
  );
};

export default AdminProjeSil;
