import { Component, OnInit } from '@angular/core';
import { Produtos } from '../produtos';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html'
})
export class ListaProdutosComponent implements OnInit {

  constructor(private produtosService: ProdutoService) { }

  public produtosList: Produtos[];

  ngOnInit() { //lugar ideal para usar o subscrible pois ele chama assim que o component é usado
    this.produtosService.obterProdutos()
    .subscribe( //me inscrevendo na observable para ler os dados recebidos e popular a lista para ser consumida
      produtos => {
        this.produtosList = produtos;
        console.log(produtos);
      },
      error => console.log(error)
    );
  }

}
