import '../css/App.css'
import React, {Component} from 'react'
import { InputGroup,
    FormControl,    
    Dropdown,  
    MenuItem    
    } from 'react-bootstrap'
class MyToggle extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    console.log('MyToggle clicked');
    e.preventDefault()
    this.props.onClick(e)
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        {this.props.children}        
      </div>
    )
  }
}

MyToggle.propTypes = {
  noCaret: React.PropTypes.bool,
  open: React.PropTypes.bool,
  title: React.PropTypes.string,
  useAnchor: React.PropTypes.bool
};

MyToggle.defaultProps = {
  open: false,
  useAnchor: false,
  bsRole: 'toggle'
};

class SearchHint extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      hints: this.props.dataSrc
    }
    this.handleOnSelectSubject = this.handleOnSelectSubject.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.filterValue = this.filterValue.bind(this)
  }
  filterValue(val) {
    const hints = this.state.hints
    hints.filter((h) => {
      
    })
  }
  handleOnChange(e) {
    console.log('Onchanged: ', e.target.value);
    this.setState({value: e.target.value})
  }
  handleOnSelectSubject(eK, e) {
    console.log('event key: ', eK)
    console.log('event obj: ', e.target)
    this.setState({value: eK})    
  }
  render() {

    return (
      <div >
        <Dropdown
                    
          componentClass={InputGroup.Button}          
          id="input-dropdown-hint"
          title=""
          onSelect={this.handleOnSelectSubject}
        >
          <MyToggle>            
            <FormControl type="text"                
              value={this.state.value}
              placeholder='Enter a subject...'
              onChange={this.handleOnChange}            
            >
            </FormControl>            
          </MyToggle>
          <Dropdown.Menu
            bsClass='dropdown-menu'
            bsRole='menu' 
            componentClass={InputGroup.Button}>
            { this.state.hints.map((hintItem, i) => (<MenuItem eventKey={hintItem} key={i}>{hintItem}</MenuItem>) ) }
          </Dropdown.Menu>
        </Dropdown>
      </div>      
    )
  }
}

export default SearchHint