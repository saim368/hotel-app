import React from 'react'

const Footer = () => {
    return (
        <div className= "main-footer">
            <div className= "container">
                <div className= "row">
                    {/* Column 1 */}

                    <div className= "col">
                        <h4>Hill Resort Contact</h4>
                        <ul className= "list-unstyled">
                            <li>0333-1234567</li>
                            <li>Islamabad, Pakistan</li>
                            <li>Margalla Hills</li>
                        </ul>
                    </div>

                    {/* Column 2 */}

                    <div className= "col">
                        <h4>Stuff</h4>
                        <ul className= "list-unstyled">
                            <li>Home</li>
                            <li>Room</li>
                            <li>Menu</li>
                        </ul>
                    </div>

                    {/* Column 3 */}

                    <div className= "col">
                        <h4>About Us</h4>
                        <ul className= "list-unstyled">
                            <li>Who we are</li>
                            <li>Privacy Policy</li>
                            <li>Term and condition</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;