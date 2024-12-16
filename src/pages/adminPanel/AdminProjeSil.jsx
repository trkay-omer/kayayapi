import "./AdminProjeSil.scss";
import ListCardDelete from "../../components/listCardDelete/ListCardDelete";
const AdminProjeSil = () => {
  return (
    <div className="projeList">
      <div className="title">
        <h4>Proje Sil</h4>
        <hr />
      </div>

      <div className="list">
        <ListCardDelete/>
      </div>
    </div>
  );
};

export default AdminProjeSil;
