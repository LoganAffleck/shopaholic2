import { Builder, builder } from "@builder.io/react";
import React, {useState, useEffect} from 'react';



const ProductGrid = (props: { title: string; color: string; }) => {
  
  
  const [collection, setCollection] = useState(0);


  builder.init('f5329e4d268247c0a0f00e29aa17c788')

  useEffect(() => {

    builder.get('fabric-shoes').promise().then(({ data }) => {
      // Do something with the data
      setCollection(data)
    })
  
  },[])

  if(collection){
  console.log(collection);
  }
    
  
  return(
    <h1 style={{
        'color': props.color,
        'fontFamily': 'sans-serif',
    }}>
        {props.title}
    </h1>
  )
}

Builder.registerComponent(ProductGrid, {
  name: "ProductGrid",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: 'I am a heading!',
      required: true,
    },
    {
      name: "color",
      type: "color",
      defaultValue: '#AC7EF4',
    },
  ],
});

export default ProductGrid;