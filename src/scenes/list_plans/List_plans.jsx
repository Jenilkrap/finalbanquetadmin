import "./list_plans.css"
import Datatableplans from "../../components/datatableplans/Datatableplans"

const list_plans = () => {
  return (
    <div className="list">
      <div className="listContainer">
        <Datatableplans/>
      </div>
    </div>
  )
}

export default list_plans