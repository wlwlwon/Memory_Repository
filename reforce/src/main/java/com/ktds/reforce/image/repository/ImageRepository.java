package com.ktds.reforce.image.repository;

import com.ktds.reforce.image.dto.CommentDTO;
import com.ktds.reforce.image.dto.ImageDTO;
import com.ktds.reforce.image.dto.LikeDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ImageRepository {
    private final SqlSessionTemplate sql;

    public void save(ImageDTO imageDTO) {
        sql.insert("Image.save", imageDTO);
    }

    public List<ImageDTO> getList() {
        List<ImageDTO> listDTO = sql.selectList("Image.findAll");
        return listDTO;
    }

    public ImageDTO findById(Long imageId) {
        return sql.selectOne("Image.findById",imageId);
    }

    public void updateLike(LikeDTO likeDTO) {
        sql.insert("Image.updateLike", likeDTO);
    }

    public LikeDTO checkLike(LikeDTO likeDTO) {
        return sql.selectOne("Image.checkLike", likeDTO);
    }

    public int countLike(Long imageId) {
        return sql.selectOne("Image.countLike",imageId);
    }

    public LikeDTO isLike(LikeDTO likeDTO) {
        return sql.selectOne("Image.isLike",likeDTO);
    }

    public void updateDisLike(LikeDTO likeDTO) {
        sql.update("Image.disLike",likeDTO);
    }

    public void addComment(CommentDTO commentDTO) {
        sql.insert("Image.addComment", commentDTO);
    }

    public List<CommentDTO> getCommentList(Long imageId) {
        return sql.selectList("Image.commentList",imageId);
    }
}
