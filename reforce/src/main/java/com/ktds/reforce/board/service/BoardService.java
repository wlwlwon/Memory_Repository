package com.ktds.reforce.board.service;

import com.ktds.reforce.board.dto.BoardDTO;
import com.ktds.reforce.board.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {
    private final BoardRepository boardRepository;
    public List<BoardDTO> findAll() {
        return boardRepository.findAll();
    }
}
