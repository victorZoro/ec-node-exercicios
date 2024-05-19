package com.victorzoro.exercicio1.concat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api")
public class ConcatController {
  private ConcatService concatService;

  @Autowired
  public ConcatController(ConcatService concatService) {
    this.concatService = concatService;
  }

  @RequestMapping("/concat")
  public String concat(@RequestParam("name") String name,
    @RequestParam("word") String word) { 
    return concatService.concat(name, word);
  }
}
