import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromApi } from '../utils/fetchFromAPI';


const ChannelDetail = () => {
const [channelDetail, setChannelDetail ] = useState();
const [videos, setVideos] = useState(null);

const { id } = useParams();

useEffect(()=> {
  fetchFromApi(`channels?part=snippet&id=${id}`)
  .then((data) => setChannelDetail(data?.items[0]));

  fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
  .then((data) => setVideos(data?.items));
},[id]);

// const fetchResults = async () => {
//   const data = await fetchFromApi(`channels?part=snippet&id=${id}`);

//   setChannelDetail(data?.items[0]);

//   const videosData = await fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);

//   setVideos(videosData?.items)
// };

//   fetchResults();
// },[id]);
  return (
   <Box minHeight="95vh">
    <Box>
      <div style={{
        height:'300px',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,248,0.7037037037037037) 56%)',
        zIndex: 10,
      }}
     />
    <ChannelCard channelDetail={channelDetail}
    marginTop='-110px'/>
    </Box>
    <Box p={2} display='flex'>
      <Box sx={{mr: {sm: '100px'}}}/>
      <Videos videos={videos}/>
    </Box>
   </Box>
  )
}

export default ChannelDetail;
