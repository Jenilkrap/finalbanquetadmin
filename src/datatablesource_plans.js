export const plansColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "planname",
    headerName: "Plan Name",
    width: 170
  },

  {
    field: "costmonth",
    headerName: "Cost/Month",
    width: 150,
  },
  {
    field: "totalnoofstaffallowed",
    headerName: "No. of Staff Allowed",
    width: 170,
  },
  {
    field: "totalnooffunctionallowed",
    headerName: "No. of Function Allowed",
    width: 170,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
export const plansRows = [
  {
    id: 1,
    planname: "Test Plan",
    status: "active",
    costmonth: "70₹",
    totalnoofstaffallowed: "1",
    totalnooffunctionallowed: "Unlimited",
  },
  {
    id: 2,
    planname: "Nopee",
    status: "active",
    costmonth: "10₹",
    totalnoofstaffallowed: "5",
    totalnooffunctionallowed: "3",
  },
  {
    id: 3,
    planname: "Established",
    status: "active",
    costmonth: "0₹",
    totalnoofstaffallowed: "Unlimited",
    totalnooffunctionallowed: "1",
  },
  {
    id: 4,
    planname: "Gold Plan",
    status: "active",
    costmonth: "60₹",
    totalnoofstaffallowed: "10",
    totalnooffunctionallowed: "Unlimited",
  },
  {
    id: 5,
    planname: "High Growth Booking",
    status: "passive",
    costmonth: "200₹",
    totalnoofstaffallowed: "10",
    totalnooffunctionallowed: "9999",
  },
  {
    id: 6,
    planname: "Starter Booking",
    status: "active",
    costmonth: "22₹",
    totalnoofstaffallowed: "10",
    totalnooffunctionallowed: "20",
  },
  {
    id: 7,
    planname: "STD Functions",
    status: "active",
    costmonth: "173.35₹",
    totalnoofstaffallowed: "10",
    totalnooffunctionallowed: "Unlimited",
  },
  {
    id: 8,
    planname: "Test",
    status: "active",
    costmonth: "1₹",
    totalnoofstaffallowed: "Unlimited",
    totalnooffunctionallowed: "10",
  },
  {
    id: 9,
    planname: "TP2",
    status: "active",
    costmonth: "60₹",
    totalnoofstaffallowed: "10",
    totalnooffunctionallowed: "Unlimited",
  },

];
