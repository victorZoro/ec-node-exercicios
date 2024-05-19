package com.victorzoro.exercicio1.strings;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.springframework.stereotype.Service;

@Service
public class StringsService {
  private List<String> strings;

  public StringsService() {
    this.strings = new ArrayList<>();
  }

  public List<IndexedStringsDto> getStrings() {
    return IntStream.range(0, strings.size())
      .mapToObj(i -> new IndexedStringsDto(i, strings.get(i)))
      .collect(Collectors.toList());
  }

  public void addString(String string) {
    strings.add(string);
  }
}

