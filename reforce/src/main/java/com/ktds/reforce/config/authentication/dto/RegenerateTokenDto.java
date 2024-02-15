package com.ktds.reforce.config.authentication.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegenerateTokenDto {
    private String refreshToken;
}
