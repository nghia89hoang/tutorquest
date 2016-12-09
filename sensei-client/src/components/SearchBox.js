import '../css/App.css'
import React, {Component} from 'react'
import { FormGroup, Form,
    Col,
    FormControl,    
    Button } from 'react-bootstrap'
import cities from '../data/city'
import levels from '../data/level'
import priceRanges from '../data/pricerange'
import subjects from '../data/subjects'
import SearchHint from './SearchHint'
import Typeahead from 'react-bootstrap-typeahead'
const genders = ['Male', 'Female']
class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    // const form = document.forms
    // console.log('Onsubmit', form)
    // console.log('Event', e);
  }
  render() {
    return (
      <div className='panel'>
        <form className='form-horizontal'
          name='searchForm'           
          method='get' action='/api/courses/'
          onSubmit={this.handleSubmit}>
          <div className='form-group row' controlId='mandatorySearch'>
            <Col md={2}>
              <FormControl componentClass="select" placeholder="City">                                    
                { cities.map((city, i) => (<option key={i} value={city}>{city}</option>) ) }
              </FormControl>
            </Col>
            <Col md={3}>            
              <Typeahead
                placeholder='Enter a subject...'
                onChange={this._handleChange}
                options={subjects}
              />               
            </Col>
            <Col md={2}>
              <FormControl componentClass="select" placeholder="default">   
                <option value="default">Chose a level</option>
                { levels.map((level, i) => (<option key={i} value={level}>{level}</option>) ) }
              </FormControl>
            </Col>
          </div>          
          <div className='form-group row' controlId='moreFilter'>
            <Col md={2}>
              <FormControl componentClass="select" placeholder='default'>
                <option value="default">Teacher's gender</option>                                    
                { genders.map((gender, i) => (<option key={i} value={gender}>{gender}</option>) ) }
              </FormControl>
            </Col>
            <Col md={3}>
              <FormControl componentClass='select' placeholder='default'>
                <option value="default">Pick a price range</option>    
                { priceRanges.map((priceRange, i) => (<option key={i} value={priceRange}>{priceRange}</option>) ) }
              </FormControl>
            </Col>
            <Col md={3} display='block'>
              <button className='btn btn-danger InfoLink' type='submit'> Search </button>
            </Col>
          </div>
        </form>
      </div>
    )
  }
}
export default SearchBox

// <SearchHint style={{display: 'block'}} dataSrc={subjects}/>