import "./datatabledesg.css"
import { DataGrid } from "@mui/x-data-grid";
import { deptColumns, deptRows } from "../../datatablesource_desg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatabledesg = () => {
  const [data, setData] = useState(deptRows);
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newdept, setNewdept] = useState("");

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
        Designation
        <button className="link" onClick={handleOpen}>
          Add New Designation
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
        <div className="popups">
          <div className="popupInners">
            <h2>Add New Designation</h2>
            <form>
              <label>Department:</label>
              <input
                type="text"
                value={newdept}
                onChange={(e) => setNewdept(e.target.value)}
              />
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

export default Datatabledesg;
