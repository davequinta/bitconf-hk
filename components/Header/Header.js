import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import menu from "../../public/menu.png";
import back from "../../public/back_arrow.png";
import styles from "./Header.module.css";

const Header = ({iconAction, iconName = "back", itemsShown = false}) => {
  return (
    <div className="flex flex-row w-full px-3 py-3">
      <div
        className={`h-8 w-8 flex justify-center items-center cursor-pointer`}
        onClick={iconAction}>
        {iconName === "menu" ? (
          <Image src={menu} width={25} height={25} layout="fixed" />
        ) : (
          <Image src={back} layout="fixed" width={25} height={25} />
        )}
      </div>
      {itemsShown && ( //TODO: Change this logic
        <div className={styles.dropdownContent}>
          <Link href="/">
            <a>Inicio</a>
          </Link>
          <Link href="/saldo">
            <a>Mi Saldo</a>
          </Link>
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  iconAction: PropTypes.func,
  iconName: PropTypes.oneOf(["menu", "back"]),
  itemsShown: PropTypes.bool,
};

export default Header;
