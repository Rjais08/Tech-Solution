import React from 'react'
import {Card} from 'react-bootstrap'
function Cards({img,title}) {
    return (
      <div>
        <Card className="bg-light text-black">
          <Card.Img src={img} alt="Card image" height="300px"/>
          <Card.ImgOverlay>
            <Card.Title className='text-center'>{title}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
}

export default Cards
