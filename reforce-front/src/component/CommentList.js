import * as React from 'react';
import { useEffect, useState } from "react";
import axios from "../axios/axios";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function CommentList({ imageId }) {

    const [commentList, setCommentList] = useState([]);

    function formatDateTime(dateTimeString) {
        const dateTime = new Date(dateTimeString);
        const year = dateTime.getFullYear();
        const month = String(dateTime.getMonth() + 1).padStart(2, '0');
        const day = String(dateTime.getDate()).padStart(2, '0');
        const hours = String(dateTime.getHours()).padStart(2, '0');
        const minutes = String(dateTime.getMinutes()).padStart(2, '0');
        const seconds = String(dateTime.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
    useEffect(() => {
        fetchCommentList();
    }, [commentList]);
    const fetchCommentList = async () => {
        const userId = localStorage.getItem('userId');
        try {
            const response = await axios.get(`/image/commentList?imageId=${imageId}`);
            setCommentList(response.data);
        } catch (error) {
            console.error("댓글 불러오는중 오류 발생:", error);
        }
    };
    return (
        <List sx={{ width: '100%', maxWidth: 860, bgcolor: 'background.paper' }}>
            {commentList.map((commentData, index) => (
                <React.Fragment key={index}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="User Avatar" src="https://github.com/PragmaticArchive/Algorithm/assets/58178752/154dbfec-f757-4712-a614-0e4af76c7677" /> {/* 댓글 작성자의 아바타 이미지 */}
                        </ListItemAvatar>
                        <ListItemText
                            // primary={commentData.title} // 댓글 제목
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {commentData.name} {/* 댓글 작성자 */}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {formatDateTime(commentData.commentCreatedTime)} {/* 댓글 작성 날짜 */}
                                    </Typography>
                                    {" —> " + commentData.commentContent} {/* 댓글 내용 */}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </React.Fragment>
            ))}
        </List>
    );
}