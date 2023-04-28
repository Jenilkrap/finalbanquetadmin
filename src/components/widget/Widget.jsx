import "./widget.css";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Widget = ({ type, amount }) => {
  let data;
  let counterAmount;

  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Users",
        isMoney: false,
        link: (
          <Link to="/users" className="link">
            See all Clients
          </Link>
        ),
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      counterAmount = amount.user;
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: (
          <Link to="/plans" className="link">
            See all Clients
          </Link>
        ),
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      counterAmount = amount.order;
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {counterAmount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
