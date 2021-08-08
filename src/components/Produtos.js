import React from "react";
import styled from "styled-components";
import { Carrinho } from "./Carrinho";

const ProdutosContainer = styled.div`
  border: 1px solid black;
  padding: 0 8px;
`;

const ProdutosHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

const ProdutosGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
`;

const CardProduto = styled.div`
  border: 1px solid black;
`;

const ImagemProduto = styled.img`
  width: 100%;
`;

const InfosProduto = styled.div`
  padding: 8px;
`;

export class Produtos extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 2,
        name: "Roupa de Astronauta",
        value: 100.0,
        imageUrl: "https://picsum.photos/200/200?a=1",
      },
      {
        id: 3,
        name: "Jantar na Lua com Jeff Bezos",
        value: 200.0,
        imageUrl: "https://picsum.photos/200/200?a=2",
      },
      {
        id: 4,
        name: "Estadia em marte",
        value: 300.0,
        imageUrl: "https://picsum.photos/200/200?a=3",
      },
      {
        id: 5,
        name: "Viagem para buraco negro",
        value: 300.0,
        imageUrl: "https://picsum.photos/200/200?a=4",
      },
    ],
  };

  

  render() {
    console.log('CARRINHO', this.state.carrinho)

    const listaDeComponentes = this.state.produtos.map((cadaProduto) => {
      return (
        <CardProduto>
          <ImagemProduto src={cadaProduto.imageUrl} alt={cadaProduto.name} />
          <InfosProduto>
            <p>{cadaProduto.name}</p>
            <p>R${cadaProduto.value}</p>
            <button onClick={() => this.props.onClickAdicionarCarrinho(cadaProduto)}>Adicionar ao carrinho</button>
          </InfosProduto>
        </CardProduto>
      );
    });

    return (
      <ProdutosContainer>
        <ProdutosHeader>
          <p>Quantidade de produtos: {this.state.produtos.length}</p>
          <div>
            <label>
              Ordenação:
              <select>
                <option>Crescente</option>
                <option>Decrescente</option>
              </select>
            </label>
          </div>
        </ProdutosHeader>
        <ProdutosGrid>
          {listaDeComponentes}
        </ProdutosGrid>
      </ProdutosContainer>
    );
  }
}
