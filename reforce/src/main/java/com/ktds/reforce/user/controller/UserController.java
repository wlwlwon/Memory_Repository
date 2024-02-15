package com.ktds.reforce.user.controller;

import com.ktds.reforce.config.authentication.AuthenticationService;
import com.ktds.reforce.config.authentication.dto.RegenerateTokenDto;
import com.ktds.reforce.config.authentication.dto.TokenDto;
import com.ktds.reforce.user.dto.User;
import com.ktds.reforce.user.dto.UserDTO;
import com.ktds.reforce.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService userService;
    private final AuthenticationService authenticationService;

    @PostMapping("/signin")
    public ResponseEntity<UserDTO> signIn(@RequestBody UserDTO memberRequestDTO) throws Exception {
        UserDTO memberResponseDTO = authenticationService.signInAndReturnJWT(memberRequestDTO);
        return new ResponseEntity<>(memberResponseDTO, HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<UserDTO> signUp(@RequestBody UserDTO memberRequestDTO) {
        boolean isDuplicated = userService.isDuplicatedId(memberRequestDTO.getId());
        if (isDuplicated)
            return new ResponseEntity<>(HttpStatus.CONFLICT);

        UserDTO memberResponseDTO = userService.signUp(memberRequestDTO);
        return new ResponseEntity<>(memberResponseDTO, HttpStatus.CREATED);
    }

    @PostMapping("/regenerateToken")
    public ResponseEntity<TokenDto> regenerateToken(@RequestBody RegenerateTokenDto refreshTokenDto) {
        return authenticationService.regenerateToken(refreshTokenDto);
    }

    @PostMapping("/logout")
    public ResponseEntity<TokenDto> logout(@RequestBody TokenDto tokenDto){
        return authenticationService.logout(tokenDto);
    }

}
