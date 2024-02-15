package com.ktds.reforce.image.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class CommentDTO {
    private String commentContent;
    private Long userId;
    private Long imageId;
    private String id;
    private String name;
    private LocalDateTime commentCreatedTime;

}
