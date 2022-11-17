import { Builder, builder } from "@builder.io/react";
import React, {useState, useEffect} from 'react';

const ProductGrid = (props: { collection: string; max: number; }) => {


    
  const [products, setProducts] = useState([] as any);

  builder.init('f5329e4d268247c0a0f00e29aa17c788')

  useEffect( () => {

    
    const getData = async () =>{
      let result = await builder.getAll(`${props.collection ? props.collection.toLowerCase() : 'fabric'}-shoes`);
      return result
    } 

    getData().then((value)=>{
      let result = value;
      
      let shortenedData = result.map(entry => entry.data)
      setProducts(shortenedData)});
    


  },[props.collection])

  return(
    <div id='productGrid'>
     {products.map((product : any)=> {

      return(
        <div id='productItem'>
          <img src={product.image} width='100%'></img>
          <p><strong>{product.title}</strong></p>
          <p>${product.price}</p>
          <button id="shopButton">Shop Now</button>
        </div>
      )
     })}
    </div>
  )
}

Builder.registerComponent(ProductGrid, {
  name: "ProductGrid",
  inputs: [
    {
      name: "collection",
      type: "text",
      defaultValue: 'Fabric',
      required: true,
      enum: ['Fabric', 'Marble', 'Matte']
    },
    {
      name: "max",
      type: "number",
      defaultValue: 4,
    }
  ],
});

export default ProductGrid;