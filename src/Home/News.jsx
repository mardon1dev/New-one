import React, { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
const url =
  "https://newsapi.org/v2/everything?q=apple&from=2023-03-20&to=2023-03-20&sortBy=popularity&apiKey=c733780456fe46dcbdd2d24fe4a40f03";

const Features = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="">
      <div className=" container">
     {
           data ? (
            <Row className='pb-5 pt-5 features'>{
                data.articles.slice(0,6).map((el)=>(
                    <Col md={4} className="gy-5">
                        <Card style={{ width: '100%' }} className="features__all border-0">
                            <Card.Img variant="top" src={el.urlToImage} style={{height: "350px"}} className="features__img"/>
                            <Card.Body style={{width: "70%"}} className="features__card justify-content-center">
                                <Card.Title className='features__card--title'>{el.title.split(" ").slice(0,4).join(" ")}</Card.Title>
                                <Card.Text className='features__card--text px-5 px-md-0'>
                                    {el.description.split(" ").slice(0,10).join(" ")}
                                </Card.Text>
                                <a href={el.url} className='d-block text-center features__card--span'>Read more</a>
                            </Card.Body>
                        </Card>
                    </Col>       
                    )
                )}
            </Row>
        ) : (
            <div className='text-center'>Loading...</div>
        )
     }
       
      </div>
    </div>
  );
};
export default Features;
