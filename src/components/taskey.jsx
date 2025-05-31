import React from 'react';
import './taskey.scss'
const Taskey = () => {
    return (
        <section className = "section">
            <div className = "image">
            </div>
            <div className = 'text-box'>
                <div className = 'containertb'>
                    <h3>Your work, everywhere <span>you are</span></h3>
                    <p>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                </div>
                <div classNmae = 'btn-container'>
                    <button className = "btn">Try Taskey →</button>
                </div>
            </div>
        </section>
    );
}
export default Taskey;