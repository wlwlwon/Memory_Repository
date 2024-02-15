package com.ktds.reforce.board.repository;

import com.ktds.reforce.board.dto.BoardDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class BoardRepository {

    private final SqlSessionTemplate sql;
    public List<BoardDTO> findAll() {
        return sql.selectList("Board.findAll");
    }

}
