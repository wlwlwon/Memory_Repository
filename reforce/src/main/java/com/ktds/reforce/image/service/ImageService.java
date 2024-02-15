package com.ktds.reforce.image.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.*;
import com.ktds.reforce.config.FileRoute;
import com.ktds.reforce.image.dto.CommentDTO;
import com.ktds.reforce.image.dto.ImageDTO;
import com.ktds.reforce.image.dto.LikeDTO;
import com.ktds.reforce.image.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ImageService {

    private final AmazonS3 amazonS3;
    private final ImageRepository imageRepository;
    @Value("${application.bucket.name}")
    private String bucket;
    public String uploadFile(MultipartFile file, ImageDTO imageDTO, FileRoute fileRoute) {
        String fileName = getFileRoute(fileRoute) + createFileName(file.getOriginalFilename(), "upload");

        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentLength(file.getSize());
        objectMetadata.setContentType(file.getContentType());

        try (InputStream inputStream = file.getInputStream()) {
            amazonS3.putObject(
                    new PutObjectRequest(bucket, fileName, inputStream, objectMetadata).withCannedAcl(CannedAccessControlList.PublicReadWrite)
            );
        } catch (IOException e) {
            throw new IllegalArgumentException(String.format("파일 변환 중 에러가 발생했습니다. (%s)", file.getOriginalFilename()));
        }
        imageDTO.setPath(getFileUrl(fileName));
        imageDTO.setImageCreatedTime(LocalDateTime.now());
        imageRepository.save(imageDTO);
        return getFileUrl(fileName);
    }


    public void deleteFile(String fileName) {
        amazonS3.deleteObject(new DeleteObjectRequest(bucket, fileName));
    }


    public String getFileUrl(String fileName) {
        return amazonS3.getUrl(bucket, fileName).toString();
    }

    public String getFileRoute(FileRoute fileRoute) {
        return fileRoute.toString();
    }

    public boolean validateFileExists(String filename) {
        if (!amazonS3.doesObjectExist(bucket, filename))
            throw new IllegalArgumentException(String.format("해당 파일(%s)이 존재하지 않습니다.", filename));
        return true;
    }

    /**
     * 파일 확장자명 조회
     *
     * @param filename
     */
    private String getFileExtension(String filename) {
        try {
            return filename.substring(filename.lastIndexOf("."));
        } catch (StringIndexOutOfBoundsException e) {
            throw new IllegalArgumentException(String.format("잘못된 형식의 파일 (%s) 입니다.", filename));
        }
    }

    /**
     * tsid를 이용한 파일 이름 생성
     *
     * @param originalFilename
     */
    private String createFileName(String originalFilename, String dirName) {
        return dirName + "/" + UUID.randomUUID() + originalFilename;
    }

    /**
     * 이미지 url -> 파일 이름(삭제 등의 요청을 위한)
     *
     * @param url
     */
    public static String convertToFileName(String url) {
        String[] path = url.split("/");
        return path[path.length - 2] + "/" + path[path.length - 1];
    }


    public List<ImageDTO> getImageList() {
        return imageRepository.getList();
    }

    public ImageDTO findById(Long imageId) {
        return imageRepository.findById(imageId);
    }

    public void updateLike(LikeDTO likeDTO) {
        imageRepository.updateLike(likeDTO);
    }

    public boolean checkLike(LikeDTO likeDTO) {
        LikeDTO resultlikeDTO = imageRepository.checkLike(likeDTO);
        return resultlikeDTO == null;
    }

    public int countLike(Long imageId) {
        return imageRepository.countLike(imageId);
    }

    public LikeDTO isLike(LikeDTO likeDTO) {
        return imageRepository.isLike(likeDTO);
    }

    public void updateDisLike(LikeDTO likeDTO) {
        imageRepository.updateDisLike(likeDTO);
    }

    public void addComment(CommentDTO commentDTO) {
        commentDTO.setCommentCreatedTime(LocalDateTime.now());
        imageRepository.addComment(commentDTO);
    }

    public List<CommentDTO> getCommentList(Long imageId) {
        return imageRepository.getCommentList(imageId);
    }
}
