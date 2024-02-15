import React from 'react';
import { Avatar, Card, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ListItemAvatar } from '@mui/material';
const { Meta } = Card;
const ImageCard = ({ key, image_url, title, description, imageId, userName }) => {

  const navigate = useNavigate();
  return (

    <Card
      hoverable
      style={{
        width: 200,
        margin: '10px'
      }}
      onClick={() => navigate('/detail/' + imageId)}
      cover={<img alt="example" style={{ borderRadius: "10px" }} src={image_url} />}
    >
      <ListItemAvatar>
        <Avatar alt="User Avatar" src="https://github.com/PragmaticArchive/Algorithm/assets/58178752/154dbfec-f757-4712-a614-0e4af76c7677" /> {/* 댓글 작성자의 아바타 이미지 */}
      </ListItemAvatar>
      <Typography
        sx={{ display: 'inline' }}
        component="span"
        variant="body2"
        color="text.primary"
      >
        {""+userName} {/* 댓글 작성자 */}
      </Typography>
      <Meta title={title} description={description} />
      
    </Card>
  )
};
export default ImageCard;