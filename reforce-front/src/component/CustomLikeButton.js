import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import axios from '../axios/axios';
import DetailCard from './DetailCard';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function CustomLikeButton({ imageId }) {

  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false); // 요청 상태를 추적하는 상태 변수 추가

  useEffect(() => {
    fetchLikeCount();
    fetchIsLike();
  }, [isLiked,likeCount]);

  const fetchLikeCount = async () => {
    try {
      const response = await axios.get(`/image/like?imageId=${imageId}`);
      setLikeCount(response.data);
    } catch (error) {
      console.error('Error fetching like count:', error);
    }
  };

  const fetchIsLike = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.get(`/image/likeUser?imageId=${imageId}&userId=${userId}`);
      const isClicked = response.data;
      
      if (isClicked) {
        setIsLiked(true);
      }
    } catch (error) {
      console.error('Error fetching like status:', error);
    }
  };

  const handleLikeButtonClick = async () => {
    try {
      const userId = localStorage.getItem('userId');
      if (!isLiked) {
        const response = await axios.post('/image/like', { imageId: imageId, userId: userId });
        setIsLiked(true);
      }
    } catch (error) {
      console.error('Error liking image:', error);
    } 
  };

  const handleDisLikeButtonClick = async () => {
    try {
      const userId = localStorage.getItem('userId');
      if (isLiked) {
        const response = await axios.post('/image/dislike', { imageId: imageId, userId: userId });
        setIsLiked(false);
        console.log("싫어요 버튼 클릭");
      }
    } catch (error) {
      console.error('Error disliking image:', error);
    } 
  };

  return (
    <div>
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Typography component="legend">좋아요 {likeCount}</Typography>
        {isLiked ?
        
          <StyledRating
            name="customized-color"
            defaultValue={1}
            max={1}
            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            onClick={handleDisLikeButtonClick} // 싫어요 버튼 클릭 이벤트
          /> :
          <StyledRating
            name="customized-color"
            defaultValue={0}
            max={1}
            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            onClick={handleLikeButtonClick} // 좋아요 버튼 클릭 이벤트
          />
        }
      </Box>
    </div>
  );
}