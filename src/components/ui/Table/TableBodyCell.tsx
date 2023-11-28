import React from 'react'
import cn from 'classnames'

import styles from './Table.module.scss'

interface IProps {
  children: JSX.Element | JSX.Element[] | string | string[]
  align?: 'left' | 'center' | 'right'
}

const TableBodyCell: React.FC<IProps> = ({ children, align = 'center' }) => {
  return (
    <td className={cn(styles.tableCell, styles.cell)} style={{ textAlign: align }}>
      {children}
    </td>
  )
}

export default TableBodyCell
