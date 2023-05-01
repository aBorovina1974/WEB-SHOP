import React, { useContext } from "react";
import DashboardItem from "../../DashboardItem/DashboardItem";
import dashboardItems from "../../../../data/dashboard.json";
import styles from "./DashboardItems.module.scss";
import { UserContext } from "../../../../contexts/user/UserContextProvider";

const DashboardItems = () => {
  const { user } = useContext(UserContext);

  return (
    <ul className={styles.items}>
      {dashboardItems &&
        dashboardItems.map((dashboardItem, index) => (
          <DashboardItem
            key={dashboardItem.id}
            item={{
              id: dashboardItem.id,
              type: dashboardItem.type,
              title: dashboardItem.title,
              subtitle: dashboardItems.subtitle,
              text: dashboardItem.text,
              name: `${user.first_name} ${user.last_name}`,
              email: user.email,
              action: dashboardItem.action,
            }}
          />
        ))}
    </ul>
  );
};

export default DashboardItems;
