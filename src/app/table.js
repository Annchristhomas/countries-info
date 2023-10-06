
import React, { useEffect, useState } from "react";
import styles from './table.css';


const Table = ({ data, currentPage, itemsPerPage }) => {
    const [modifiedData, setModifiedData] = useState([])
    const [sortOrder, setSortorder] = useState('asc')
    const [sortField, setSortField] = useState('name')

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const sortAscending = (data, sortBy) => {
        if (sortBy === 'phoneCode') {
            return data.sort((a, b) => a[sortBy] - b[sortBy])
        }
        return data.sort((a, b) => a[sortBy].toString().localeCompare(b[sortBy].toString()))
    }
    const sortDescending = (data, sortBy) => {
        if (sortBy === 'phoneCode') {
            return data.sort((a, b) => b[sortBy] - a[sortBy])
        }
        return data.sort((a, b) => b[sortBy].toString().localeCompare(a[sortBy].toString()))
    }
    const handleSort = (sortField) => {
        setSortField(sortField)
        setSortorder((data) => data === 'asc' ? 'desc' : 'asc')
    }
    function sortedData(sortBy, sortOrder, data) {
        let currentData
        if (sortOrder === 'asc') {
            currentData = sortAscending(data, sortBy)
        } else {
            currentData = sortDescending(data, sortBy)

        }
        currentData = currentData.slice(startIndex, endIndex)
        setModifiedData(currentData)


    }
    useEffect(() => {
        
        if (data.length) {
            let currentData = data.slice(startIndex, endIndex);
            setModifiedData(currentData)
        }

    }, [startIndex, endIndex,data])

    useEffect(() => {
        sortedData(sortField, sortOrder, data)
    }, [sortOrder, sortField])
    return (
        <>
            <table id="myTable" className="tablestyle" style={{ width: '100%' }} >
                <thead>
                    <tr>
                        <th style={{ width: '40%', textAlign: 'left', fontSize: '1.4rem' }}>
                            Country Name
                            <button onClick={() => handleSort("name")}><img style={{ width: '16px' }} src="https://lordicon.com/icons/system/outline/11-arrow-up.svg" /></button>
                        </th>
                        <th style={{ width: '30%', textAlign: 'left', fontSize: '1.4rem' }}>
                            Phone Code
                            <button onClick={() => handleSort("phoneCode")}>sort</button>
                        </th>
                        <th style={{ width: '30%', textAlign: 'left', fontSize: '1.4rem' }}>
                            Sort Name
                            <button onClick={() => handleSort("sortname")}>sort</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        modifiedData?.map((item, index) => (
                            <tr key={item.id}>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.phoneCode}
                                </td>
                                <td>
                                    {item.sortname}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table></>
    )
}

export default Table