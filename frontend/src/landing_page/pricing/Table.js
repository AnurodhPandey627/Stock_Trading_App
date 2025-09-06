import React from "react";

function Table({headers,rows}) {
    return (
        <table className="w-100 text-sm border">
            <thead>
                <tr style={{ backgroundColor: "#f9f9f9" }}>
                    {headers.map((h,indx) => (
                        <th key={indx} className="px-3 py-3 border-bottom text-left" style={{fontWeight:"600",backgroundColor:"white"}}>{h}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row,indx) => (
                    <tr key={indx} style={{backgroundColor: indx % 2 === 0 ? "white" : "#f9f9f9"}}>
                        <td className="px-3 py-3">{row.category}</td>
                        {row.values.map((val,i) => (
                            <td key={i} className="px-4 py-4">{val}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;