import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div id="heading">
                <div className="grid-x grid-margin-x align-center">
                    <div>
                        <h1>Email Button Generator</h1>
                    </div>
                </div>
                <div className="grid-x grid-margin-x align-center">
                    <div className="cell medium-4 align-center">
                        <p className="text-center">
                            Design gorgeous buttons and use them in your emails.
                        </p>
                    </div>
                    
                </div>
            </div>
            
        );
    }
}

export default Header;