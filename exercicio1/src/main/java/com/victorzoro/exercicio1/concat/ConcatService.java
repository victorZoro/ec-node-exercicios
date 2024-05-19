package com.victorzoro.exercicio1.concat;

import org.springframework.stereotype.Service;

@Service
public class ConcatService {
  public String concat(String name, String word) {
    return name + " " + word;
  }
}

