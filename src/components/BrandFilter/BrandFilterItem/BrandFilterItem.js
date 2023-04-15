import styles from "./BrandFilterItem.module.scss";

const BrandFilterItem = ({ label, onBrandSelection, checked, value }) => {
  const handleBrandSelect = () => {
    onBrandSelection({
      target: {
        value: value,
        checked: !checked,
      },
    });
  };

  return (
    <div className={styles["check-box"]}>
      <label>
        <input type="checkbox" checked={checked} onChange={handleBrandSelect} />
        <span className={styles.label}>{label}</span>
      </label>
    </div>
  );
};

export default BrandFilterItem;
