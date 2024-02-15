package com.ktds.reforce.user.dto;

import com.ktds.reforce.user.Role;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserDTO {

    private long userId;
    private String id;
    private String password;
    private String name;
    private Role authority;
    private String accessToken;
    private String refreshToken;
}
