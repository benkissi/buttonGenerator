import React, {Component} from 'react';
import { SketchPicker } from 'react-color';


class BaseAttr extends Component {

    onTextChange() {
        let text = this.refs.buttonText.value;
        this.props.onTextInput(text)
    }

    onURLChange() {
        let url =this.refs.buttonURL.value;
        this.props.onURLInput(url);
    }

    onWidthChange() {
        let width = this.refs.buttonWidth.value;
        this.props.onWidthInput(width);
    }

    onHeightChange() {
        let height = this.refs.buttonHeight.value;
        this.props.onHeightInput(height);
    }

    onHexChange(buttonPart) {
        if(buttonPart === 'bg'){
            let hex = this.refs.bgColor.value;
            this.props.onBgInput(hex);
        }else if (buttonPart === 'font') {
            let hex = this.refs.fontColor.value;
            this.props.onFontInput(hex);
        }else{
            let hex = this.refs.borderColor.value;
            this.props.onBorderInput(hex);
        }
    }

    onBoldChange() {
        this.props.onBoldInput();
    }

    handleBgPickerChange = (color, event) => {
        this.refs.bgColor.value = color.hex;
        this.props.onBgInput(color.hex);
    };

    handleFontPickerChange = (color, event) => {
        this.refs.fontColor.value = color.hex;
        this.props.onFontInput(color.hex);
    };

    handleBorderPickerChange = (color, event) => {
        this.refs.borderColor.value = color.hex;
        this.props.onBorderInput(color.hex);
    };

    renderPicker(pickerType, focus) {
        if(focus) {
            this.props.onInputFocus(pickerType);
        }else{
            this.props.onInputFocus('')
        }
           
    }


    render () {  

        return (
            <div className="grid-conatiner">
                <div className="grid-x grid-margin-x">
                    <div className="cell auto">
                        <label> Button Text
                            <input ref="buttonText" onInput={this.onTextChange.bind(this)} placeholder="Enter button text" type="text"/>
                        </label>
                    </div>
                </div>
                <div className="grid-x grid-margin-x">
                    <div className="cell medium-5">
                        <label>Button Width
                            <input type="number" onInput={this.onWidthChange.bind(this)} ref="buttonWidth" placeholder="Enter button width"/>
                        </label>
                    </div>
                    <div className="cell medium-5">
                        <label>Button Height
                            <input type="number" onInput={this.onHeightChange.bind(this)} ref="buttonHeight" placeholder="Enter button height"/>
                        </label>
                    </div>
                </div>
                <div className="grid-x grid-margin-x">
                    <div className="cell medium-5">
                        <label>Background color
                            <input type="text" ref="bgColor" placeholder="Enter button color"
                            onBlur={this.renderPicker.bind(this, 'picker1', false)} 
                            onFocus={this.renderPicker.bind(this, 'picker1', true)} 
                            onChange={this.onHexChange.bind(this, 'bg')}/>
                        </label>
                        {this.props.picker === 'picker1'?<SketchPicker color={this.props.color} 
                        onChangeComplete={this.handleBgPickerChange.bind(this)}/> : null}
                    </div>
                    <div className="cell medium-5">
                        <label>Font color
                            <input type="text" ref="fontColor" placeholder="Enter font color"
                            onBlur={this.renderPicker.bind(this, 'picker2', false)} 
                            onFocus={this.renderPicker.bind(this, 'picker2', true)}
                            onChange={this.onHexChange.bind(this, 'font')}/>
                        </label>
                        {this.props.picker === 'picker2'?<SketchPicker color={this.props.fColor} 
                        onChangeComplete={this.handleFontPickerChange.bind(this)}/> : null}
                    </div>
                </div>
                <div className="grid-x grid-margin-x">
                    <div className="cell medium-5">
                        <label>Border color
                            <input type="text" ref="borderColor" placeholder="Enter border color"
                            onBlur={this.renderPicker.bind(this, 'picker3', false)} 
                            onFocus={this.renderPicker.bind(this, 'picker3', true)}
                            onChange={this.onHexChange.bind(this, 'border')}/>
                        </label>
                        {this.props.picker === 'picker3'?<SketchPicker color={this.props.border} 
                        onChangeComplete={this.handleBorderPickerChange.bind(this)}/> : null}
                    </div>
                    <div id="bold-checkbox" className="cell medium-5">
                        <span><label><input checked={this.props.bold} onChange={this.onBoldChange.bind(this)} type="checkbox" ref="boldCheck" placeholder="Enter font color"/>Make font bold</label></span>
                    </div>
                </div>
                <div className="grid-conatiner">
                    <div className="grid-x grid-margin-x">
                        <div className="cell auto">
                            <label> Button URL
                                <input ref="buttonURL"  onInput={this. onURLChange.bind(this)} placeholder="Enter button URL" type="text"/>
                            </label>
                        </div>
                    </div>
                </div>
                
            </div>
            
        )
    }
}

export default BaseAttr;