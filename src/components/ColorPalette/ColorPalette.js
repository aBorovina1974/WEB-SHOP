import styles from './ColorPalette.module.scss'
import {useState} from "react";

const ColorPalette = ({colors, onColorChange}) => {
  const [paletteColors, setPaletteColors] = useState(colors)

  const handleClick = (id) => {
    setPaletteColors((prev) =>
      prev.map(p => {
          return {
            ...p,
            selected: false,
          }
        }
      ).map(color => {
        if (color.id === id) {
          onColorChange(color.color)
          return {
            ...color,
            selected: true,
          }
        }
        return color;
      })
    )
  }

  return (
    <div className={styles['color-palette']}>
      {paletteColors.map(item => (
        <div onClick={() => handleClick(item.id)} key={item.id}
             className={item.selected ? styles['selected'] : styles['not-selected']}>
          <div style={{backgroundColor: item.color}} className={styles['color']}></div>
        </div>
      ))}
    </div>
  )
}

export default ColorPalette;