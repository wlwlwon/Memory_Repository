package com.ktds.reforce.image.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class LikeDTO {
    private Long userId;
    private Long imageId;
    private int isLiked;

    public LikeDTO(Long userId, Long imageId) {
        this.imageId = imageId;
        this.userId = userId;
    }
}
