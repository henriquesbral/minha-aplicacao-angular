import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: []
})
export class DataBindingComponent {

  public contadorClique: number = 0;
  public urlImagem: string = "https://upload.wikimedia.org/wikipedia/pt/b/b4/Corinthians_simbolo.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20250923030101";
  public nomeKeyUp: string = "";
  public nomeNgModel: string = "";

  adicionarClique(){
    this.contadorClique++;
  }
  zerarContador(){
    this.contadorClique = 0;
  }

  // usamos o any para quando não sei o tipo do dado que vai entrar   
  keyUp(event: any){
    // o target que é referente a caixa de texto e o value o valor que está entrando de fato;
    this.nomeKeyUp = event.target.value;
  }
  
}
