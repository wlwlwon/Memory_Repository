package com.ktds.reforce.card.service;

import com.ktds.reforce.card.dto.CardDTO;
import com.ktds.reforce.card.repository.CardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CardService {

    private final CardRepository cardRepository;
//    public CardDTO pop() {
//        cardRepository.popCard();
//    }
}
