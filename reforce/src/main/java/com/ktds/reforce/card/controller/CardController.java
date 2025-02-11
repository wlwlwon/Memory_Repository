package com.ktds.reforce.card.controller;

import com.ktds.reforce.board.dto.BoardDTO;
import com.ktds.reforce.card.dto.CardDTO;
import com.ktds.reforce.card.service.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/card")
public class CardController {
//
    private final CardService cardService;
//    @PostMapping("/pop")
//    public ResponseEntity<?> popCard() {
//        CardDTO pop = cardService.pop(); 
//        return new ResponseEntity<>(pop, HttpStatus.ACCEPTED);
//    }
}
