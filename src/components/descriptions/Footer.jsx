import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="grid-x grid-margin-x align-center">
                    <div className="cell medium-6 text-center">
                        <p>Created by Ben Kissi</p>
                    </div>
                    <div className="cell medium-6 text-center">
                    <div className="grid-x grid-margin-x align-center">
                        <div className="cell medium-6 text-center">
                            <a target="_blank" href="https://twitter.com/bfkissi">Twitter</a>
                        </div>
                        <div className="cell medium-6 text-center">
                            <a target="_blank" href="https://github.com/benkissi">Github</a>
                        </div>
                    </div>
                    
                    </div>
                </div>
                
            </div>
            
        );
    }
}

export default Footer;