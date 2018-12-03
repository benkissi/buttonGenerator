import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/BaseAttr.scss';


class Button extends Component {
    render () {
        var buttonStyle = {
            width: `${this.props.width}rem`,
            height: `${this.props.height}rem`,
            backgroundColor: `${this.props.bg}`,
            color: `${this.props.font}`,
            fontWeight: `${this.props.bold? 'bold': 'normal'}`,
            border:`2px solid ${this.props.border}`
        }
        return (
            <div className="callout secondary large">
                <div className="grid-x grid-margin-x align-center">
                    <a href={this.props.url} className="align-center" style={buttonStyle} className="align-center button">{this.props.text}</a>
                </div>
            </div>
        )
    }
}

Button.defaultProps = {
    text: 'empty',
    bg: 'none'
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
