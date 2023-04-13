import React, {useEffect, useState} from "react";
import styles from "./Sizes.module.scss"

const sizes = [
  {id: 1, size: 'OSFA', selected: false, available: true},
  {id: 2, size: 'W26', selected: false, available: true},
  {id: 3, size: 'W28', selected: false, available: true},
  {id: 4, size: 'W30', selected: false, available: true},
  {id: 5, size: 'W32', selected: false, available: true},
  {id: 6, size: 'W34', selected: false, available: true},
  {id: 7, size: 'W36', selected: false, available: true},
  {id: 8, size: 'W38', selected: false, available: true},
  {id: 9, size: 'W40', selected: false, available: true},
  {id: 10, size: 'W42', selected: false, available: true},
  {id: 11, size: 'W44', selected: false, available: true},
  {id: 12, size: 'W46', selected: false, available: true},
  {id: 13, size: 'W48', selected: false, available: true},
  {id: 14, size: 'W50', selected: false, available: true},
  {id: 15, size: 'W52', selected: false, available: true},
]

const Sizes = ({sizeList, onSizeChange}) => {
  const [selSizes, setSelSizes] = useState(sizes)

  function markAvailableSizes(sizes, sizeList) {
    for (let i = 0; i < sizes.length; i++) {
      if (sizeList.includes(sizes[i].size)) {
        sizes[i].available = true;
      } else {
        sizes[i].available = false;
      }
    }
    return sizes;
  }

  useEffect(() => {
    if (sizeList.length > 0) {
      setSelSizes(markAvailableSizes(sizes, sizeList));
    }
  }, [])
  const handleClick = (id) => {
    setSelSizes((prev) =>
      prev.map(s => {
          return {
            ...s,
            selected: false,
          }
        }
      ).map(size => {
        if (size.id === id) {
          onSizeChange(size.size)
          return {
            ...size,
            selected: true,
          }
        }
        return size;
      })
    )
  }

  return (
    <div className={styles.container}>
      {selSizes.map(size => (
        <div key={size.id}
             className={`
             ${styles['size-box']} 
             ${size.selected ? styles['selected'] : styles['not-selected']} 
             ${size.available === false ? styles['not-available'] : ''}
             `}
             onClick={size.available === true ? () => handleClick(size.id) : null}>
          <span className={styles.size}>{size.size}</span>
        </div>
      ))}
    </div>
  )
}

export default Sizes;