package com.ktds.reforce.config.authentication.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class TokenDto {

    private String accessToken;

    private String refreshToken;
}