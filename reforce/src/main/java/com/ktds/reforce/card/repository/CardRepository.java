package com.ktds.reforce.card.repository;

import com.ktds.reforce.card.dto.CardDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class CardRepository {
    private final SqlSessionTemplate sql;

//    public CardDTO popCard() {
//        sql.select();
//    }
}
