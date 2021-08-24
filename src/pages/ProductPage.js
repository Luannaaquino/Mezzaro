import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/DataProvider';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { Product } from '../components/Product';

export default function ProductPage() {
    const value = useContext(DataContext);
    const [produtos] = value.produtos;
    const addCart = value.addCart;
    const [detalhe, setDetalhe] = useState([])
    const [url, setUrl]= useState(0)
    const [images, setImages] = useState('')
    const params = useParams();
    let item = 0;

    
    useEffect(() =>{
        console.log('re render' , params.id)
        item=0;
        produtos.forEach(produto =>{
          if(produto.id === parseInt(params.id)){
            setDetalhe(produto)
            setUrl(0)
          }
        })
      },[params.id, produtos])
    
      console.log(url)
    
      useEffect(() =>{
        const values = `${detalhe.img1}${url}${detalhe.img2}`;
        setImages(values) 
      },[url, params.id])
    
      const handleInput = (e) =>{
      const number = e.target.value.toString().padStart(2,'01')
       setUrl(number)
      }
    
      if(detalhe.length < 1) return null;

    return(
        <>
        <Header/>
        <Container>
        {
        <div className="detalhes">
          <h2>{detalhe.title}</h2>
          <p className="price">${detalhe.price}</p>
          <div className="grid">
          <p className="novo">Novo</p>
          <div className="tamanho">
            <select placeholder="Tamanho" >
              <option value="1">31</option>
              <option value="1">32</option>
              <option value="1">33</option>
              <option value="1">34</option>
              <option value="1">35</option>
              <option value="1">36</option>
              <option value="1">37</option>
              <option value="1">38</option>
            </select>
            <p>Tamanho</p>
          </div>
          </div>
          <button onClick={() => addCart(detalhe.id)}>
            Adicionar ao Carrinho
          </button>
          
          {
            url ? <img src={images} alt={detalhe.title}/> : <img src={detalhe.image.default} alt={detalhe.title}/>
          }
          <input type="range" min="1" max="36" step="1" value={url} onChange={handleInput} />
          <div className="description">
          <p><b>description: </b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum necessitatibus soluta alias porro, saepe facere expedita asperiores quos fugit inventore ex, itaque sapiente quae pariatur beatae optio repellat aperiam quia possimus mollitia repellendus? Illo natus quam eaque impedit omnis pariatur!</p>
          <br/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vitae accusantium omnis, facere laudantium ipsa hic reprehenderit blanditiis quibusdam quos repellendus id illo reiciendis magni, aliquid beatae, consequatur sapiente! Sequi facere itaque,</p>
          </div>
          
        </div>
   
    }
    <h2 className="relacionados">Productos relacionados</h2>
    
    <ProductsContainer>
    <div className="products">
      {
          
        produtos.map((produto)=>{
          if((item < 6)&&(detalhe.category === produto.category)){
            item++;
          return <Product
          key={produto.id}
          title={produto.title}
          image={produto.image}
          category={produto.category}
          price={produto.price}
          id={produto.id}
          />
          }
        })
      }
     
    </div>
    </ProductsContainer>
        </Container>
        </>
    )
}

const Container = styled.div`
.detalhes{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 13rem 1rem 0 1rem;
    box-sizing: border-box;
}
.detalhes h2{
    font-size: 3.5rem;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    font-family:Helvetica, sans-serif;
    color: #1a202c;
}
.detalhes .price{
    font-size: 2.5rem;
    font-weight: 700;
    color: #08a05c;
}
.detalhes button{
    max-width: 300px;
    margin: 1rem 0 0 0;
    padding: 1rem 1rem;
    border: none;
    outline: 0;
    background-color: #3033d3;
    font-size: 1.6rem;
    color: white;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
}
.detalhes .grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem 1rem;
    max-width: 350px;
}
.detalhes .grid > .novo, .tamanho{
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 2rem;
    font-weight: 600;
    color: white;
   
}
.detalhes .grid .novo{
    background-color:#08a05c;
    
}
.detalhes .grid .tamanho{
    background-color:#f1365b;
    display: flex;
}
.detalhes .grid .tamanho select{
    border: none;
    outline: 0;
    font-size: 2rem;
    background-color:#f1365b;
    color: white;
    cursor: pointer;
}
.detalhes img{
    min-height: 300px;
    object-fit: contain;
    margin-top:  -7rem;
    z-index: -1;
}
.detalhes input{
    max-width: 700px;
    margin: 0 auto;
    width: 100%;
    margin-bottom: 2rem;
}
.detalhes .description{
    font-size: 1.1rem;
    max-width: 1300px;
    width: 100%;
    letter-spacing: 1px;
    color: #5f5d5d;
    margin: 0 auto;
    font-weight: 500;
}
.detalhes .description b{
    font-size: 1.4rem;
    color: #30333a;
}

.relacionados{
    text-align: center;
    background-color: #2e2e2e;
    color: white;
    max-width: 350px;
    width: 100%;
    margin: 5rem auto -2rem auto;
    padding: .5rem 1rem;
    font-size: 18px;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-family: Helvetica, sans-serif
    ;
}
`

const ProductsContainer = styled.header`
    z-index: 0;
  .title{
      font-size: 2.4rem;
      padding: 10rem 0 0 0;
      color: #08a05c;
      font-family: 'Bebas Neue', cursive;
      margin-left: 35px;
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
        height: 55px;
        margin: 2px;
        grid-template-columns: 2fr 1fr;
        gap: 1 rem 2rem;
    }

    button{
        border: none;
        outline:0;
        cursor: pointer;
        border-radius: 5px;
    }

    .buttom button{
        max-width: 250px;
        margin-left: 20px;
        font-size: 1.2rem;
        color: white;
        font-weight: 600;
        border-radius: 5px;
    }

    .buttom{
        display: flex;
        align-items: center;
        justify-content: center;
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

    .btn1{
        background-color: #3033d3;
        cursor: pointer;
        border: none;
    }

    .btn2{
        background-color:  #08a05c;
        cursor: pointer;
        border: none;
        margin-top: 15px;
    }

`;