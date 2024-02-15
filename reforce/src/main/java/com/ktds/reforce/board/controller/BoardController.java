package com.ktds.reforce.board.controller;


import com.ktds.reforce.board.dto.BoardDTO;
import com.ktds.reforce.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/board")
public class BoardController {

    private final BoardService boardService;
    @GetMapping("/")
    public ResponseEntity<?> findAll(Model model) {
        List<BoardDTO> boardDTOList = boardService.findAll();
        return new ResponseEntity<>(boardDTOList, HttpStatus.ACCEPTED);
    }

}
