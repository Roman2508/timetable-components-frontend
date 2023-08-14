import React from 'react'
import styles from './Table.module.scss'
import cn from 'classnames'
import { ThemeContext } from '@/app/layout'
import { SlOptionsVertical } from 'react-icons/sl'

interface ITableProps {
  // children?: JSX.Element | JSX.Element[]
}

const Table: React.FC<React.PropsWithChildren<ITableProps>> = ({}) => {
  const { colorMode } = React.useContext(ThemeContext)

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableRow}>
            <th className={cn(styles.tableHeadCell, styles.cell)}>
              <span>Company1</span>
              <div className={styles.optionIconWrapper}>
                <SlOptionsVertical size={16} />
              </div>
            </th>
            <th className={cn(styles.tableHeadCell, styles.cell)}>
              <span>Company2</span>
              <div className={styles.optionIconWrapper}>
                <SlOptionsVertical size={16} />
              </div>
            </th>
            <th className={cn(styles.tableHeadCell, styles.cell)}>
              <span>Country3</span>
              <div className={styles.optionIconWrapper}>
                <SlOptionsVertical size={16} />
              </div>
            </th>
            <th className={cn(styles.tableHeadCell, styles.cell)}>
              <span>Country4</span>
              <div className={styles.optionIconWrapper}>
                <SlOptionsVertical size={16} />
              </div>
            </th>
            <th className={cn(styles.tableHeadCell, styles.cell)}>
              <span>Country5</span>
              <div className={styles.optionIconWrapper}>
                <SlOptionsVertical size={16} />
              </div>
            </th>
            <th className={cn(styles.tableHeadCell, styles.cell)}>
              <span>Country6</span>
              <div className={styles.optionIconWrapper}>
                <SlOptionsVertical size={16} />
              </div>
            </th>
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          <tr className={cn(styles.tableRow, styles.tableBodyRow)}>
            <td className={cn(styles.tableCell, styles.cell)}>Ділова іноземна мова</td>
            <td className={cn(styles.tableCell, styles.cell)}>Company2</td>
            <td className={cn(styles.tableCell, styles.cell)}>Contact3</td>
            <td className={cn(styles.tableCell, styles.cell)}>Contact4</td>
            <td className={cn(styles.tableCell, styles.cell)}>Contact5</td>
            <td className={cn(styles.tableCell, styles.cell)}>Country6</td>
          </tr>
          <tr className={cn(styles.tableRow, styles.tableBodyRow)}>
            <td className={cn(styles.tableCell, styles.cell)}>Company1</td>
            <td className={cn(styles.tableCell, styles.cell)}>Company2</td>
            <td className={cn(styles.tableCell, styles.cell)}>Contact3</td>
            <td className={cn(styles.tableCell, styles.cell)}>Contact4</td>
            <td className={cn(styles.tableCell, styles.cell)}>Contact5</td>
            <td className={cn(styles.tableCell, styles.cell)}>Country6</td>
          </tr>
          <tr className={cn(styles.tableRow, styles.tableBodyRow)}>
            <td className={cn(styles.tableCell, styles.cell)}>Company1</td>
            <td className={cn(styles.tableCell, styles.cell)}>Company2</td>
            <td className={cn(styles.tableCell, styles.cell)}>Contact3</td>
            <td className={cn(styles.tableCell, styles.cell)}>Contact4</td>
            <td className={cn(styles.tableCell, styles.cell)}>Contact5</td>
            <td className={cn(styles.tableCell, styles.cell)}>Country6</td>
          </tr>
          <tr className={cn(styles.tableRow, styles.tableBodyRow)}>
            <td className={cn(styles.tableCell, styles.cell)}>Company1</td>
            <td className={cn(styles.tableCell, styles.cell)}>Company2</td>
            <td className={cn(styles.tableCell, styles.cell)}>Contact3</td>
            <td className={cn(styles.tableCell, styles.cell)}>Contact4</td>
            <td className={cn(styles.tableCell, styles.cell)}>Contact5</td>
            <td className={cn(styles.tableCell, styles.cell)}>Country6</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
