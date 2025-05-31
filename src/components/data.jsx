import React from 'react';
import './data.scss'
const Data = () => {
    return (
        <section className = "sectiont">
            <div className = 'text-box'>
                <div className = 'containertb'>
                    <h3>100% <span className= 'highlighted-text'>your data</span></h3>
                    <p>The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>       
                </div>
                <div classNmae = 'btn-container'>
                    <button className = "btn">Read more →</button>   
                </div>      
            </div>
            <div className = "image">
            </div>
        </section>
    );
}
export default Data;