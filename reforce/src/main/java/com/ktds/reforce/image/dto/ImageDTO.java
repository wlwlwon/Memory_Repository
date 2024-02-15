package com.ktds.reforce.image.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class ImageDTO {

    private Long imageId;
    private String imageName;
    private String path;
    private String content;
    private long userId;
    private String name;
    private LocalDateTime imageCreatedTime;

}
