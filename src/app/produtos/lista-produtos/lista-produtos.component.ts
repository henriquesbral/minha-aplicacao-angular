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

  ngOnInit() {
    this.produtosService.obterProdutos()
    .subscribe(
      produtos => {
        this.produtosList = produtos;
        console.log(produtos);
      },
      error => console.log(error)
    );
  }

}
