import React, {useState, useEffect} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar , Videos} from './';
import { fetchFromApi } from '../utils/fetchFromAPI';

const Feed = () => {
const [selectedCategory, setSelectedCategory] =useState('');
const [videos, setVideos] = useState(null);
// const [videos, setVideos] = useState([0]);
//change above 
  useEffect(() => {
      setVideos(null)
    //change above
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  },[selectedCategory]);
  return (
      <Stack sx={{ flexDirection: { sx: "column", md: "row"}}}> 
      <Box sx={{ height: { sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md:2}}}>
      <Sidebar 
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory} />
      <Typography className = "copyright" variant='body2' sx={{ mt: 1.5, color: '#fff'}}>
        Copyright 2022 Hrish Media 
      </Typography>
      </Box>

      <Box p={2} sx={{overflowY: 'auto', height:'90vh', flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white'}}>
          {selectedCategory} <span style={{ color: '#FC1503'}}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
      </Stack>
  );
};

export default Feed;
