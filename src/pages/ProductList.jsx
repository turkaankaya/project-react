import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Menu,
  Table,
} from 'semantic-ui-react';
//import ProductService from "../services/productService";

export default function ProductList() {
const [data,setData]= useState([]);
  useEffect(()  =>{
    const getData= () =>{
    fetch('http://localhost:3000/products')
 
      .then(response => response.json())
     .then(data => setData(data));
   }
  getData()
    },[]);
  /*const [products, setProducts] = useState([]);
  useEffect(() => {
   let productService = new ProductService()
    productService.getProducts().then(response => setProducts(response.products.results))
   
  })*/

  return (
    <div>
      <Table celled >
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Ürün adı</TableHeaderCell>
            <TableHeaderCell>tedarikci kimligi</TableHeaderCell>
            <TableHeaderCell>kategori kimligi</TableHeaderCell>
            <TableHeaderCell>Birim miktar</TableHeaderCell>
            <TableHeaderCell>Birim fiyat</TableHeaderCell>
            <TableHeaderCell>Ürün stoku</TableHeaderCell>
           <TableHeaderCell>Yeniden sipariş</TableHeaderCell>
           

          </TableRow>
        </TableHeader>

<TableBody>
  {
    data.map(product=>(

      <TableRow key={product.id}>
        <TableCell><Link to={`products/${product.name}`} >{product.name} </Link></TableCell>
       
        <TableCell>{product.supplierId}</TableCell>
        <TableCell>{product.categoryId}</TableCell>
        <TableCell>{product.quantityPerUnit}</TableCell>
        <TableCell>{product.unitPrice}</TableCell>
        <TableCell>{product.unitsOnOrder}</TableCell>
        <TableCell>{product.reorderLevel}</TableCell>
        
      </TableRow>
    ))}

</TableBody>
<TableFooter>
  <TableRow>
    <TableHeaderCell colSpan='9'>
      <Menu floated='right' pagination>
        <MenuItem as='a' icon>
          <Icon name='chevron left' />
        </MenuItem>
        <MenuItem as='a'>1</MenuItem>
        <MenuItem as='a'>2</MenuItem>
        <MenuItem as='a'>3</MenuItem>
        <MenuItem as='a'>4</MenuItem>
        <MenuItem as='a' icon>
          <Icon name='chevron right' />
        </MenuItem>
      </Menu>
    </TableHeaderCell>
  </TableRow>
</TableFooter>
</Table>
</div>
)
}
