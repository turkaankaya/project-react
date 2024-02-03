
import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  Image,
} from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
export default function ProductDetails() {
  let { name } = useParams()//  parametreleri obje olarak getirir.
 /* const [data,setData]= useState({});
  useEffect(()  =>{
    const getData= () =>{
    fetch('http://localhost:3000/products')
 
      .then(response => response.json())
     .then(data => setData(data));
   }
  getData()
    },[name])*/
    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('api/db.json');
        const json = await response.json();
        setData(json);
      }
      fetchData();
    }, []);
    
  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='/images/avatar/large/steve.jpg'
            />
            <Card.Header>{data.name}</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Approve
              </Button>
              <Button basic color='red'>
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
       </Card.Group>
    </div>
  )
}
