import "./index.css";
import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
// import Table from "../../components/table/Table";
import List from "scenes/list/List";

const Dashboard = () => {
  
  return (
    <div className="home">
      {/* <Sidebar /> */}
      <div className="homeContainer">
        {/* <Navbar /> */}
        <div className="widgets">
          {/* <Widget type="user" />
          <Widget type="order" /> */}
          <Widget type="user" amount={{ user: 5, order: 0 }} />
          <Widget type="order" amount={{ user: 0, order: 7 }} />

          {/* <Widget type="earning" />
          <Widget type="balance" /> */}
        </div>
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}
        <div className="listContainer">
          {/* <div className="listTitle">Latest Transactions</div> */}
          <List />
        </div>
      </div>
    </div>
  );
};

export default Dashboard