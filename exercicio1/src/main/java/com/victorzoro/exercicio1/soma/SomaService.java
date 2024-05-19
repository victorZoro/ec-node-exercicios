package com.victorzoro.exercicio1.soma;

import org.springframework.stereotype.Service;

@Service
public class SomaService {
  public int soma(int valor) {
    return valor + 10;
  }
}
