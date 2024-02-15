import React, { useState } from 'react';
import { Avatar, Card, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ListItemAvatar, TextField } from '@mui/material';
const { Meta } = Card;
const DetailCard = ({ image_url, title, description, userName, createdTime }) => {

    const navigate = useNavigate();
    const [imageName, setImageName] = useState('');
    const [imageContent, setImageContent] = useState('');

    return (

        <Card
            hoverable
            style={{
                width: 500,
                margin: '10px'
            }}
            cover={<img alt="example" style={{ borderRadius: "10px" }} src={image_url} />}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                {/* <TextField label={title} id="margin-dense" margin="dense" onChange={(e) => setImageName(e.target.value)} />
                <TextField label={description} id="margin-dense" margin="dense" onChange={(e) => setImageContent(e.target.value)} /> */}
            </div>
            <ListItemAvatar>
                <Avatar alt="User Avatar" src="https://github.com/PragmaticArchive/Algorithm/assets/58178752/154dbfec-f757-4712-a614-0e4af76c7677" /> {/* 댓글 작성자의 아바타 이미지 */}
            </ListItemAvatar>
            <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
            >
                {""+ userName} {/* 댓글 작성자 */}
            </Typography>
            <Meta description={createdTime} />
            <Meta title={title} description={description} />
        </Card>
    )
};
export default DetailCard;