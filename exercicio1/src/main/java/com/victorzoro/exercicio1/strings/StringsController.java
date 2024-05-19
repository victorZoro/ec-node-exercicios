package com.victorzoro.exercicio1.strings;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api")
public class StringsController {
  private StringsService stringsService;

  @Autowired
  public StringsController(StringsService stringsService) {
    this.stringsService = stringsService;
  }

  @GetMapping("/strings")
  public List<String> getStrings() {
    return stringsService.getStrings();
  }

}
