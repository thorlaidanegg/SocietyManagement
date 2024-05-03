"use client"

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 120 },
  {
    field: 'age',
    headerName: 'Age',
    width: 130,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {field: 'category', headerName: 'Car No', width: 130},
  {field: 'workExperience', headerName: 'Living Since', width: 150},
  {field: 'jobsDone', headerName: 'House No', width: 130},
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, category:2,workExperience:10,jobsDone:98 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, category:3,workExperience:1,jobsDone:8 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, category:3,workExperience:10,jobsDone:93 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 , category:1,workExperience:20,jobsDone:150},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, category:1,workExperience:10,jobsDone:100 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 , category:2,workExperience:15,jobsDone:120},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 , category:1,workExperience:17,jobsDone:145},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 , category:2,workExperience:9,jobsDone:62},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 , category:1,workExperience:8,jobsDone:57},
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, category:3,workExperience:3,jobsDone:8 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 , category:2,workExperience:17,jobsDone:145},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 , category:1,workExperience:9,jobsDone:62},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 , category:1,workExperience:8,jobsDone:57},
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 , category:1,workExperience:20,jobsDone:150},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, category:1,workExperience:10,jobsDone:100 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 , category:2,workExperience:15,jobsDone:120},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 , category:1,workExperience:17,jobsDone:145},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 , category:2,workExperience:9,jobsDone:62},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 , category:1,workExperience:8,jobsDone:57},
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, category:2,workExperience:10,jobsDone:98 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, category:3,workExperience:1,jobsDone:8 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, category:3,workExperience:10,jobsDone:93 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 , category:1,workExperience:20,jobsDone:150},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, category:1,workExperience:10,jobsDone:100 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 , category:2,workExperience:15,jobsDone:120},

  
  
];

export default function DataTable() {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div>
     <Navbar OpenSidebar={OpenSidebar}/>
      <div className='flex'>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
    <div className='m-10 bg-slate-300' style={{ height: 700, width: '80%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 11 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </div>
    </div>
  );
}