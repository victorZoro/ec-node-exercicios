package com.victorzoro.exercicio1.soma;

import org.springframework.stereotype.Service;

@Service
public class SomaService {
  private int lastValue;
  private final int defaultValue = 10;

  public SomaService() {
    this.lastValue = this.defaultValue;
  }

  public int soma10(int valor) {
    int resultado = valor + defaultValue;
    this.setLastValue(resultado);
    return resultado;
  }

  public int somaUltimoValor(int valor) {
    int resultado = valor + lastValue;
    this.setLastValue(resultado);
    return resultado;
  }

  public void setLastValue(int value) {
    this.lastValue = value;
  }
}
