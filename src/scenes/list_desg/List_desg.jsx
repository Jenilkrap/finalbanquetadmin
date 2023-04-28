import "./list_desg.css"
import Datatabledesg from "components/datatabledesg/Datatabledesg"

const list_dept = () => {
  return (
    <div className="list">
      <div className="listContainer">
        <Datatabledesg/>
      </div>
    </div>
  )
}

export default list_dept