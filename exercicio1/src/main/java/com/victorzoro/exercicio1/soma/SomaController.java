package com.victorzoro.exercicio1.soma;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.websocket.server.PathParam;

@RestController
@RequestMapping(path = "api")
public class SomaController {
  private SomaService somaService;

  @Autowired
  public SomaController(SomaService somaService) {
    this.somaService = somaService;
  }

  @GetMapping("/soma")
  public int soma(@PathParam("valor") int valor) {
    return somaService.soma10(valor);
  }

  @PutMapping("/soma")
  public int somaUltimoValor(@PathParam("valor") int valor) {
    return somaService.somaUltimoValor(valor);
  }
}
