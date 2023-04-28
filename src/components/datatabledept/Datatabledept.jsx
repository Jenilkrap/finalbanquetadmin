import "./datatabledept.css";
import { DataGrid } from "@mui/x-data-grid";
import { deptColumns, deptRows } from "../../datatablesource_dept";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatabledept = () => {
  const [data, setData] = useState(deptRows);
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    const newData = [...data];
    newData.push({ id: newData.length + 1, name: newName });
    setData(newData);
    handleClose();
  };

  const actionColumn = [
    {

      renderCell: (params) => {
        return (
          <div className="cellAction">

          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Departments
        <button className="link" onClick={handleOpen}>
          Add New
        </button>
      </div>
      
      <DataGrid
        className="datagrid"
        rows={data}
        columns={deptColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
       {open && (
        <div className="popup">
          <div className="popupInner">
            <h2>Add New Department</h2>
            <form>
              <label>Name:</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <div className="popupButtons">
                <button className="cancelBtn" onClick={handleClose}>
                  Cancel
                </button>
                <button className="addBtn" onClick={handleAdd}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Datatabledept;
