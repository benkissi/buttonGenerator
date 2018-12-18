import React, {Component} from 'react';


class ButtonCode extends Component {

    render() {
        var buttonStyle = {
            width: `${this.props.width}rem`,
            height: `${this.props.height}rem`,
            display: 'inline-block',
            'vertical-align': 'middle',
            margin: '0 0 1rem 0',
            padding: '.85em 1em',
            'border-radius': '0',
            transition: 'background-color .25s ease-out,color .25s ease-out',
            'font-family': 'inherit',
            'font-size': '.9rem',
            'font-weight': `${this.props.bold? 'bold': 'normal'}`,
            '-webkit-appearance': 'none',
            'line-height': '1',
            'text-align': 'center',
            cursor: 'pointer',
            'background-color': `${this.props.bg}`,
            border:`${this.props.border !== '' ? '2px solid '+this.props.border : '1px solid transparent' }`,
            color: `${this.props.font}`,
            'font-weight': `${this.props.bold? 'bold': 'normal'}`,
            '-webkit-text-size-adjust':'none',
            'mso-hide':'all',
            'v-text-anchor': 'middle'
        }

        var code = `<div><!--[if mso]>
        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://" style="height:40px;v-text-anchor:middle;width:200px;" arcsize="10%" strokecolor="#1e3650" fillcolor="#556270">
          <w:anchorlock/>
          <center style="color:#ffffff;font-family:sans-serif;font-size:.9rem;${this.props.bold? 'bold': 'normal'};">${this.props.text}</center>
        </v:roundrect>
      <![endif]--><a href="http://${this.props.url}"
      style="${Object.entries(buttonStyle).map( entry => {
            let key = entry[0];
            let value = entry[1];
            console.log( `${key}: ${value};`);
            return ( `${key}: ${value};`)
      }).join(' ')}">${this.props.text}</a></div>`
        return (
            <div className="callout success">
                <p>{code}</p>
            </div>
        )
    }
}

ButtonCode.defaultProps = {
    text: 'Button Text',
    width: '10',
    height: '2',     
    bg: '#1779ba',
    border: '',
    bold: false,
    url: '',
    font: '#ffffff'
}

export default ButtonCode