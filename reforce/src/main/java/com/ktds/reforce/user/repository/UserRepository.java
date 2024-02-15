package com.ktds.reforce.user.repository;

import com.ktds.reforce.user.dto.User;
import com.ktds.reforce.user.dto.UserDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class UserRepository {
    private final SqlSessionTemplate sql;

    public void save(UserDTO signInUser) {
        sql.insert("User.save", signInUser);
    }

    public UserDTO findByID(String userId) {
        return sql.selectOne("User.findByID", userId);
    }


    public void update(UserDTO signInUser) {
        sql.update("User.update", signInUser);
    }
}
