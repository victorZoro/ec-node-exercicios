package com.victorzoro.exercicio1.strings;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class StringsService {
  private List<String> strings;

  public StringsService() {
    this.strings = new ArrayList<>();
  }

  public List<String> getStrings() {
    return strings;
  }

  public void addString(String string) {
    strings.add(string);
  }
}

