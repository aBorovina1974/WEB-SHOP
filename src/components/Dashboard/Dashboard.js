import React, { useState } from "react";
import DashboardItems from "./Content/DashboardItems/DashboardItems";
import EditAccountForm from "../Dashboard/Content/EditAccountForm/EditAccountForm";
import styles from "./Dashboard.module.scss";
import DashboardMenu from "./DashboardMenu/DashboardMenu";
import AddNewAddressForm from "./Content/AddNewAddresForm/AddNewAddressForm";
import Orders from "./Content/Orders/Orders";
import WorkInProgress from "../../WorkInProgress";

const Dashboard = (props) => {
  const contentItems = [
    { content: <DashboardItems />, title: "My Profile" },
    { content: <EditAccountForm />, title: "Edit Account Information" },
    { content: <AddNewAddressForm />, title: "Add New Address" },
    { content: <Orders />, title: "My Orders" },
    { content: <WorkInProgress /> },
  ];
  const [content, setContent] = useState(contentItems[0]);

  function setContentHandler(index) {
    setContent(contentItems[index]);
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{content.title}</h3>
      <div className={styles.border}>
        <DashboardMenu onSetContent={setContentHandler} />
        <div className={styles.content}>{content.content}</div>
      </div>
    </div>
  );
};

export default Dashboard;
