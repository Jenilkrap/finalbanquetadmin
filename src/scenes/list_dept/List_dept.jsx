import "./list_dept.css"
import Datatabledept from "components/datatabledept/Datatabledept"

const list_dept = () => {
  return (
    <div className="list">
      <div className="listContainer">
        <Datatabledept/>
      </div>
    </div>
  )
}

export default list_dept