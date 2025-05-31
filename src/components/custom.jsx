import React from 'react';
import './custom.scss';


const Custom = () => {
    return(
        <section className = "custom">
            <div className = "container">
                <div className = "bluebox">
                </div>
                <div className = "text-box-container">
                    <div className = "text-box">
                        <h3>Customise it to <span className = "highlighted-text">your needs</span></h3>
                        <p>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                    </div>
                    <div>
                        <button className = "btn">Let's Go →</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Custom;