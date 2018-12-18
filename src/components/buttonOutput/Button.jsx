import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/BaseAttr.scss';


class Button extends Component {
    render () {
        var buttonStyle = {
            verticalAlign: 'middle',
            width: `${this.props.width}rem`,
            height: `${this.props.height}rem`,
            backgroundColor: `${this.props.bg}`,
            lineHeight: '1',
            color: `${this.props.font}`,
            fontWeight: `${this.props.bold? 'bold': 'normal'}`,
            border:`${this.props.border !== '' ? '2px solid '+this.props.border : '1px solid transparent' }`
        }
        return (
            <div className="callout secondary large">
                <div className="grid-x grid-margin-x align-center">
                    <a href={this.props.url} style={buttonStyle} className="center button">{this.props.text}</a>
                </div>
            </div>
        )
    }
}

Button.defaultProps = {
    text: 'empty',
    bg: '#1779ba',
    width: 10,
    height: 2,
    border: '',
}

Button.propTypes = {
    text: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
    font: PropTypes.string,
    border: PropTypes.string,
    bold: PropTypes.bool,
    url: PropTypes.string

}

export default Button;
