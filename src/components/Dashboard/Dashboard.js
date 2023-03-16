import React from "react";
import styles from "./Dashboard.module.scss";
import DashboardMenu from "./DashboardMenu/DashboardMenu";
import dashboardItems from "../../data/dashboard.json";
import DashboardItem from "./DashboardItem/DashboardItem";

const Dashboard = (props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>My Dashboard</h3>
      <div className={styles.border}>
        <DashboardMenu />
        <div className={styles.content}>
          <ul className={styles.items}>
            {dashboardItems &&
              dashboardItems.map((dashboardItems, index) => (
                <DashboardItem
                  key={index}
                  item={{
                    id: dashboardItems.id,
                    type: dashboardItems.type,
                    title: dashboardItems.title,
                    subtitle: dashboardItems.subtitle,
                    text: dashboardItems.text,
                    name: dashboardItems.name,
                    email: dashboardItems.email,
                    action: dashboardItems.action,
                  }}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
