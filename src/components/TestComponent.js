import { useState, useEffect } from "react";

// mockdata/API
import { useParams } from "react-router-dom";

// API 
import { GET_PRODUCTS_API } from "../config";

function TestComponent () {
  const [products, setProducts] = useState([]);

  const params = useParams();
  const productId = params.id;

  // api get request -> GET_PRODUCTS_API
  useEffect(() => {
    const asyncGetProduct = async () => {
      try {
        const response = await fetch(GET_PRODUCTS_API);
        const data = await response.json();

        // console.log(data[0].image_url);   // /images/tayback.jpg
        
        data.forEach((each) => {
          setProducts(products => [...products, each]);
        });

      } catch(error) {
        console.log("error => ", error);
      }
    };

    asyncGetProduct();
  }, []);


  return (
    <div>
      <img src={"../../public" + products[0].image_url} width="500px" height="500px" alt="테스트 이미지" style={{backgroundColor: "#eee", minWidth: "500px", minHeight: "500px"}} />
    </div>
  )
} 

export default TestComponent;