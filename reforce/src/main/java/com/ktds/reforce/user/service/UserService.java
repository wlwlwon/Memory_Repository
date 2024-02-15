package com.ktds.reforce.user.service;

import com.ktds.reforce.user.Role;
import com.ktds.reforce.user.dto.UserDTO;
import com.ktds.reforce.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public boolean isDuplicatedId(String userId) {
        return findByIDBoolean(userId);
    }

    public UserDTO findByID(String id) {
        return userRepository.findByID(id);
    }

    public boolean findByIDBoolean(String id) {
        return userRepository.findByID(id) != null;
    }

    public UserDTO signUp(UserDTO memberRequestDTO) {
        UserDTO userDTO = memberInfo(memberRequestDTO);
        userRepository.save(userDTO);
        return findByID(userDTO.getId());
    }

    private UserDTO memberInfo(UserDTO member) {
        member.setPassword(passwordEncoder.encode(member.getPassword()));
        member.setId(member.getId());
        member.setAuthority(Role.reforce_USER);
        return member;
    }
}
