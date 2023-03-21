import React from "react";
import DashboardItem from "../../DashboardItem/DashboardItem";
import dashboardItems from "../../../../data/dashboard.json";
import styles from "./DashboardItems.module.scss";

const DashboardItems = () => {
  return (
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
  );
};

export default DashboardItems;
