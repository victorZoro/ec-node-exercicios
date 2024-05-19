package com.victorzoro.exercicio1.strings;

public class IndexedStringsDto {
  private int index;
  private String string;
  public IndexedStringsDto(int index, String string) {
    this.index = index;
    this.string = string;
  }
  public int getIndex() {
    return index;
  }
  public String getString() {
    return string;
  }
}
