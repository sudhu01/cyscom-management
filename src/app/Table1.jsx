'use client'

import { Oswald } from 'next/font/google'
import cyscomLeaderboard_act6 from './assets/cyscom-leaderboard-act6.json'
import * as React from "react"
import {useTable} from "react-table"

const oswald = Oswald({
  subsets: ['latin'],
})
 

function Table1(props){
    const data = React.useMemo(() => cyscomLeaderboard_act6, [])
    
    const columns = React.useMemo(
        () => [
          {
            Header: "Rank",
            accessor: "rank",
          },
          {
            Header: "Rating Value",
            accessor: "rating_val",
          },
          {
            Header: "Player",
            accessor: "player",
          },
          {
            Header: "Contributions",
            accessor: "contrib",
          },
        ],
        []
      );
    
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });
    
    return (
    <div className={oswald.className} id='t1'>

        <div className={`container relative ${props.left} bg-gradient-to-r from-sky-800 to-indigo-800`}>
        <table {...getTableProps()}>
            <thead key="Player">
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} key="Player">
                {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()} key="Player">
                    {column.render("Header")}
                    </th>
                ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row);
                return (
                <tr {...row.getRowProps()} key="Player">
                    {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}  key="Player"> {cell.render("Cell")} </td>
                    ))}
                </tr>
                );
            })}
            </tbody>
        </table>
        </div>
    </div>
    );
}

export default Table1
