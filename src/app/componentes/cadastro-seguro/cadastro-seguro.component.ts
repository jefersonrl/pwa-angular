import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Seguros } from 'src/app/modulos/Seguros';
import { MarcaCarro } from 'src/app/modulos/MarcaCarro';
import { MarcaCarroService } from 'src/app/servicos/marca-carro.service';

@Component({
  selector: 'app-cadastro-seguro',
  templateUrl: './cadastro-seguro.component.html',
  styleUrls: ['./cadastro-seguro.component.css']
})
export class CadastroSeguroComponent implements OnInit {

  public seguro = new Seguros();
  public marcasCarro$!: Observable<MarcaCarro[]>;


  constructor(
    private marcaCarroService: MarcaCarroService
  ) { }

  ngOnInit(): void {
    this.marcasCarro$ = this.marcaCarroService.getMarcas();
  }

}
