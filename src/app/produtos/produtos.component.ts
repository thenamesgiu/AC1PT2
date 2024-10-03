import { Component } from '@angular/core';
import { Produtos } from 'src/app/models/Produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  produtos: Produtos[] = [
   {nome: "Perfume feminino", preco: "R$11,90", descricao:"Descrição de produto 1", emEstoque: false},
    {nome: "Hidratante", preco: "R$11,90", descricao:"Descrição de produto 2", emEstoque: true},
    {nome: "Hidratante masculino", preco: "R$11,90", descricao:"Descrição de produto 3", emEstoque: true},
    {nome: "Desodorante feminino", preco: "R$11,90", descricao:"Descrição de produto 4", emEstoque: false},

  ]


}
