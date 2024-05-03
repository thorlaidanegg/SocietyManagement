"use client"
import React, { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
  Typography,
  Container,
} from '@mui/material';
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useRouter } from 'next/navigation'

interface ComplaintFormProps {
  
  onSubmit: (complaint: ComplaintData) => void;
}

interface ComplaintData {
  name: string;
  category: string;
  area: string;
  description: string;
}

const categories = [
  'Electrician',
  'Plumber',
  'Majdoor',
  'Blacksmith',
  'Carpenter',
  'Others',
];

const ComplaintForm: React.FC<ComplaintFormProps> = ({ onSubmit }) => {
  const router = useRouter()
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  const [formData, setFormData] = useState<ComplaintData>({
    name: '',
    category: '',
    area: '',
    description: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { value: unknown }>) => {
    const { name, value } = event.target as { name: keyof ComplaintData; value: string };
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
    <Navbar OpenSidebar={OpenSidebar}/>
      <div className='flex'>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className='flex flex-col '>
      <img  src='https://akobominerals.com/wp-content/uploads/2022/03/4M7A3005-scaled.jpg'></img>
    <Container  maxWidth="sm">
      <Typography variant="h3" gutterBottom>
        Raise a Complaint
      </Typography>
      <form  onSubmit={handleSubmit}>
        <Grid  container spacing={3}>
          <Grid  item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={formData.category}
                name="category"
                required
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              multiline
              rows={4}
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" onClick={() => router.push('/tracking')}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
    </div>
    </div>
    </div>
  );
};

export default ComplaintForm;
