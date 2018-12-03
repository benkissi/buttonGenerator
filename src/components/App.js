import React, { Component } from 'react';
import BaseAttr from './buttonAttributes/BaseAttr';
import Button from './buttonOutput/Button'
import '../styles/components/App.scss';
// import Foundation from 'foundation-sites';
import jquery from 'jquery';


window.$ = window.jQuery = jquery;
require('foundation-sites');


require('foundation-sites/dist/css/foundation.min.css');
require('foundation-sites/dist/js/foundation.min.js');

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      buttonText: 'Button Text',
      buttonURL: '#',
      buttonWidth: 0,
      buttonHeight: 0,
      bgColor:'',
      fontColor:'',
      borderColor:'',
      bold: false,
      renderPicker:''
    }
  }

  textChangeHandeler(currentInput) {
    this.setState({
      buttonText: currentInput
    });
  }

  URLChangeHandeler(currentInput) {
    this.setState({
      buttonURL: currentInput
    });
  }

  widthChangeHandeler(newWidth) {
    this.setState({
      buttonWidth: newWidth
    });
  }

  heightChangeHandeler(newHeight) {
    this.setState({
      buttonHeight: newHeight
    });
  }

  bgChangeHandeler(hex) {
    this.setState({
      bgColor: hex
    });
  }

  fontChangeHandeler(hex) {
    this.setState({
      fontColor: hex
    });
  }

  borderChangeHandeler(hex) {
    this.setState({
      borderColor: hex
    });
  }

  boldChangeHandeler() {
    this.setState({
      bold: !this.state.bold
    });
    console.log(this.state.bold)
  }

  renderPickerHandeler(pickerType) {
    this.setState({
      renderPicker: pickerType
    });

    console.log(pickerType)
  }

  render() {
    if(this.state.buttonWidth !== 0){
      var width = parseInt(this.state.buttonWidth);
    }
    if(this.state.buttonHeight !== 0){
      var height = parseInt(this.state.buttonHeight);
    }
    if(this.state.bgColor !== '') {
      var bgColor = this.state.bgColor;
      console.log(this.state.bgColor)
    }
    if(this.state.fontColor !== '') {
      var fontColor = this.state.fontColor;
      console.log(this.state.fontColor)
    }
    if(this.state.borderColor !== '') {
      var borderColor = this.state.borderColor;
      console.log(this.state.borderColor)
    }
    

    return (
      <div className="app">
        <div className="grid-conatiner">
          <div className="grid-x grid-margin-x align-center">
            <div className="cell medium-5">
              <BaseAttr onWidthInput={this.widthChangeHandeler.bind(this)} 
              onTextInput={this.textChangeHandeler.bind(this)}
              onHeightInput={this.heightChangeHandeler.bind(this)}
              onBgInput={this.bgChangeHandeler.bind(this)}
              onFontInput={this.fontChangeHandeler.bind(this)} 
              onBorderInput={this.borderChangeHandeler.bind(this)}
              onBoldInput= {this.boldChangeHandeler.bind(this)}
              bold={this.state.bold}
              color={bgColor}
              fColor={fontColor}
              border={borderColor}
              onURLInput={this.URLChangeHandeler.bind(this)}
              onInputFocus={this.renderPickerHandeler.bind(this)}
              picker={this.state.renderPicker}/>
            </div>
            <div className="cell medium-5">
                <Button 
                text={this.state.buttonText} 
                width={width} height={height} 
                bg={bgColor}
                border={borderColor}
                bold={this.state.bold}
                url={this.state.buttonURL}
                font={fontColor}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
