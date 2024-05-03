"use client"
import React from 'react'
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { Grid, Typography } from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'Type', width: 130 },
    { field: 'lastName', headerName: 'Worker', width: 130 },
    {
      field: 'age',
      headerName: 'Days',
      type: 'number',
      width: 90,
    }
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Electrician', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Pothole', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Plumber', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'blacksmith', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Electrician', age: 9 },
    { id: 6, lastName: 'Melisandre', firstName: 'Fire', age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Fire', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Pothole', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Theft', age: 65 },
  ];
  

const page = () => {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div>
    <Navbar OpenSidebar={OpenSidebar}/>
      <div className='flex'>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

     <div className="flex justify-center">
        <div>
            <div className='flex flex-col items-center justify-between p-10 m-10 border-4'>
                <CheckCircleRoundedIcon className="bg-green-600 w-40 h-40 mb-20 rounded-full"/>
                <Typography className='mb-10' variant="h3" component="h3" >
                  Complaint Registered
                </Typography>
                <Typography className='mb-10' variant="h5" component="h5" >
                  Complaint Id: 12312432532
                </Typography>
                <Typography className='mb-10' variant="h5" component="h5" >
                  Worker Assigned: Monu
                </Typography>
            </div>
        </div>
        <div className='p-10 m-10 border-4 '>
            <Typography className='mb-10 ' variant="h2" component="h2" >
                    Complaints
            </Typography>

            <div className="px-10">
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 9 },
                    },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
                </div>
            </div>

        </div>

     </div>


      </div>
    </div>
  )
}

export default page