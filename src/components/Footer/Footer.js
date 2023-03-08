import React from "react";
import styles from "./Footer.module.scss";
import FooterItem from "./FooterItem/FooterItem";
import FacebookIcon from "../UI/icons/FacebookIcon";
import TwitterIcon from "../UI/icons/TwitterIcon";
import InstagramIcon from "../UI/icons/InstagramIcon";
import LogoIcon from "../UI/icons/LogoIcon";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <FooterItem
          items={{
            type: "nav",
            main: "FEATURES",
            list: [
              { title: "MEN", id: "1" },
              { title: "WOOMAN", id: "2" },
              { title: "BOYS", id: "3" },
              { title: "GIRLS", id: "4" },
              { title: "NEW ARRIVALS", id: "5" },
              { title: "SHOES", id: "6" },
              { title: "CLOTHES", id: "7" },
              { title: "ACCESSORIES", id: "8" },
            ],
          }}
        />

        <FooterItem
          items={{
            type: "nav",
            main: " MENU",
            list: [
              { title: "ABOUT US", id: "1" },
              { title: "CONTACT US", id: "2" },
              { title: "MY ACCOUNT", id: "3" },
              { title: "ORDERS HISTORY", id: "4" },
              { title: "MY WISHLIST", id: "5" },
              { title: "BLOG", id: "6" },
              { title: "LOGIN", id: "7" },
            ],
          }}
        />

        <FooterItem
          items={{
            type: "info",
            main: " CONTACT US",
            list: [
              {
                title: "ADDRESS",
                subtitle: "123 STREET NAME, CITY, CROATIA",
                id: "1",
              },
              { title: "PHONE", subtitle: "(123)456-7890", id: "2" },
              { title: "EMAIL", subtitle: "MAIL@EXAMPLE.COM", id: "3" },
              {
                title: "WORKING DAYS/HOURS",
                subtitle: "MON-SUN/9:00AM-8:00PM",
                id: "4",
              },
            ],
          }}
        />

        <FooterItem
          items={{
            type: "nav",
            main: " FOLLOW US",
            list: [
              { title: "FACEBOOK", icon: <FacebookIcon />, id: "1" },
              { title: "TWITTER", icon: <TwitterIcon />, id: "2" },
              { title: "INSTAGRAM", icon: <InstagramIcon />, id: "3" },
            ],
          }}
        />

        <FooterItem
          items={{
            type: "form",
            main: " JOIN US",
            list: [{ title: "SUBSCRIBE TO OUR NEWSLETTERS", id: "1" }],
          }}
        />
      </div>
      <hr />
      <LogoIcon className={styles.logo} />
    </footer>
  );
};

export default Footer;
