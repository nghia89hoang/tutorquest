import '../css/CommonItem.css'
import React, { Component } from 'react'
import {Link} from 'react-router'
import { Row, Col, Label, Glyphicon, Image } from 'react-bootstrap'
import store from '../store'

class RatingItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {rating} = this.props
    let stars = []
    for(let i = 0; i < rating.stars; i++) {
      stars.push(<Glyphicon key={i} glyph="star" />)
    }    
    return (            
      <div className='CardItem'>
        <Row>          
          <Col md={12}>            
            <Image src={rating.author.facebook.avatar} rounded className="SmallAvatar"/>
            <Link to={`/profile/${rating.author._id}`}>
              { rating.author.facebook.name}
            </Link>                  
          </Col> 
          <Col md={12}>
            {stars}
          </Col>
          <Col md={12}>
            {rating.comment}
          </Col>
        </Row>
      </div>      
    )
  }
}

export default RatingItem