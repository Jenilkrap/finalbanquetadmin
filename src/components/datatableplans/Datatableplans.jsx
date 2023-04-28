import "./datatableplans.css";
import { DataGrid } from "@mui/x-data-grid";
import { plansColumns, plansRows } from "../../datatablesource_plans";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatableplans = () => {
  const [data, setData] = useState(plansRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Plans
        <Link to="/plans/new_plans" className="link">
          Add New
        </Link>
      </div>
      
      <DataGrid
        className="datagrid"
        rows={data}
        columns={plansColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatableplans;
