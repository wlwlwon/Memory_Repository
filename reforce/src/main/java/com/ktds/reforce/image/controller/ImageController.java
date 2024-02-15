package com.ktds.reforce.image.controller;

import com.ktds.reforce.config.FileRoute;
import com.ktds.reforce.image.dto.CommentDTO;
import com.ktds.reforce.image.dto.ImageDTO;
import com.ktds.reforce.image.dto.LikeDTO;
import com.ktds.reforce.image.service.ImageService;
import com.ktds.reforce.user.dto.UserDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/image")
public class ImageController {

    private final ImageService imageService;

    @GetMapping()
    public ResponseEntity<?> getImage() {
        List<ImageDTO> imageList = imageService.getImageList();
        return new ResponseEntity<>(imageList, HttpStatus.ACCEPTED);
    }

    @GetMapping("/detail")
    public ResponseEntity<?> getImageById(@RequestParam Long imageId) {
        ImageDTO imageList = imageService.findById(imageId);
        return new ResponseEntity<>(imageList, HttpStatus.ACCEPTED);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addImage(@ModelAttribute ImageDTO imageDTO, MultipartFile file) {
        String url = imageService.uploadFile(file, imageDTO, FileRoute.CARD_IMAGE);
        return new ResponseEntity<>(url, HttpStatus.ACCEPTED);
    }

    @PostMapping("/like")
    public ResponseEntity<?> updateLike(@RequestBody LikeDTO likeDTO) {
        boolean checkLike = imageService.checkLike(likeDTO);
        System.out.println();
        if (checkLike)
            imageService.updateLike(likeDTO);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @PostMapping("/dislike")
    public ResponseEntity<?> updateDisLike(@RequestBody LikeDTO likeDTO) {
        boolean checkLike = imageService.checkLike(likeDTO);
        System.out.println();
        if (!checkLike)
            imageService.updateDisLike(likeDTO);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @GetMapping("/like")
    public ResponseEntity<?> countLike(@RequestParam Long imageId) {
        int likeCount = imageService.countLike(imageId);
        return new ResponseEntity<>(likeCount, HttpStatus.ACCEPTED);
    }

    @GetMapping("/likeUser")
    public ResponseEntity<?> userIsLike(@RequestParam Long userId, @RequestParam Long imageId) {
        LikeDTO likeDTO = imageService.isLike(new LikeDTO(userId, imageId));
        return new ResponseEntity<>(likeDTO, HttpStatus.ACCEPTED);
    }

    @PostMapping("/comment")
    public ResponseEntity<?> fetchComment(@RequestBody CommentDTO commentDTO) {
        imageService.addComment(commentDTO);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
    @GetMapping("/commentList")
    public ResponseEntity<?> getCommentList(@RequestParam Long imageId) {
        List<CommentDTO> commentDTO =imageService.getCommentList(imageId);
        return new ResponseEntity<>(commentDTO, HttpStatus.ACCEPTED);
    }
}
