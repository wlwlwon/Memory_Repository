package com.ktds.reforce.config.jwt;

import com.ktds.reforce.config.UserPrincipal;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.core.Authentication;

public interface JwtProvider {

    String generateAccessOrRefreshToken(UserPrincipal auth, JwtType jwtType);

    Authentication getAuthentication(HttpServletRequest request);

    Authentication getAccessAuthentication(String token);

    Authentication getRefreshAuthentication(String token);

    boolean isAccessTokenValid(HttpServletRequest request);

    boolean isAccessTokenValid(String token);

    boolean isRefreshTokenValid(String token);

    Long getExpiration(String token);
}
