'use client'

import { Oswald } from 'next/font/google'
import cyscomLeaderboard_act4 from './assets/cyscom-leaderboard-act4.json'
import * as React from "react"
import {useTable} from "react-table"

const oswald = Oswald({
  subsets: ['latin'],
})
 

function Table3(props){
    const data = React.useMemo(() => cyscomLeaderboard_act4, [])
    
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
    <div className={oswald.className} id='t3'>

        <div className={`container relative ${props.left} bg-gradient-to-r from-sky-800 to-indigo-800`}>
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
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
                <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
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

export default Table3