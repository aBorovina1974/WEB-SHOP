import styles from "./ColorPalette.module.scss";

const ColorPalette = ({ colors, onColorChange }) => {
  return (
    <div className={styles["color-palette"]}>
      {colors.map((item) => (
        <div
          onClick={() => onColorChange(item.id)}
          key={item.id}
          className={
            item.selected ? styles["selected"] : styles["not-selected"]
          }
        >
          <div
            style={{ backgroundColor: item.color }}
            className={styles["color"]}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
