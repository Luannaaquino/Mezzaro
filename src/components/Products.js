import 'boxicons';
import styled from 'styled-components';
import IMG from '../images/img01.jpg'

export default function Prodcts() {
    return (
    <ProductsContainer>
      <h1 className="title">Produtos</h1>
      <div className="products">
          <div className="product">
        <a href="#">
            <div className="product_img">
                <img src={IMG} alt="" width="150" />
            </div>
        </a>
        <div className="product_footer">
            <h1>Title</h1>
            <p>Categoria</p>
            <p className="price">$320</p>
            <div className="buttom">
                <button className="btn">
                    Adicionar ao Carrinho
                </button>
                <a href="#" className="btn">Vista</a>
            </div>
        </div>
        </div>
      </div>
    </ProductsContainer>
  );
}

const ProductsContainer = styled.header`
  .title{
      font-size: 2.4rem;
      padding: 10rem 0 0 0;
      color: #08a05c;
  }

  .products{
      padding: 5rem 2rem;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
      gap: 3rem 1rem;
      box-sizing: border-box;
  }

  .product{
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 1px 10px 10px 2px rgba(0, 0, 0, .2);
      border: 6px solid transparent;
      border-raidus: 5px;
  }

  .product:hover{
      border: 6px solid #08a05c55;
  }

  .product_img img{
      width: 310px;

  }
  
  .product_footer{
      padding: 1rem;

  }

  .product_footer h1{
    font-weight: 600;
    font-size: 1.5rem;
    color: #1a202c;
    font-family: Helvetica, sans-serif;
    
    }

    .product_footer p{
        font-weight: 700;
        color: rgba(0, 0, 0, .555);
        text-transform: uppercase;
        font-size: 18px;
    }

    .product_footer .price{
        font-size: 2rem;
        color:#1a202c;
    }

    .product button{
        width: 100%;
        height: 45px;
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 1 rem 2rem;
    }

    .button .btn{
        border: none;
        outline:0;
        cursor: pointer;
        border-radius: 5px;
    }

    .buttom button{
        background-color: #3033d3;
        max-width: 250px;
        margin: 0 auto;
        font-size: 1.2rem;
        color: white;
        font-weight: 600;
    }

    .buttom{
        background-color: #08a05c;
        display: grid;
        align-items: center;
        margin-left: -2rem;
        border-radius: 5px;
    }

    .buttom a{
        color: white;
        font-weight: 600;
        align-items: center;
    }

    .buttom a:hover{
        color: white;
    }

`;