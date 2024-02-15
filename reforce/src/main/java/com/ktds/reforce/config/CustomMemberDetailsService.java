package com.ktds.reforce.config;

import com.ktds.reforce.config.utils.SecurityUtils;
import com.ktds.reforce.user.dto.UserDTO;
import com.ktds.reforce.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@RequiredArgsConstructor
public class CustomMemberDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
        UserDTO member = userRepository.findByID(id);
        if(member == null){
            throw new UsernameNotFoundException("User not found with ID: " + id);
        }

        Set<GrantedAuthority> authorities = Set.of(SecurityUtils.convertToAuthority(String.valueOf(member.getAuthority())));

        return UserPrincipal.builder()
                .user(member)
                .id(member.getId())
                .username(member.getId())
                .password(member.getPassword())
                .authorities(authorities)
                .build();
    }
}
