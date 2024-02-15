package com.ktds.reforce.config.aws;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AwsS3 {
    private String key;
    private String path;
}