import React from 'react';
import './pricing.scss';
const plans = [
    {
        title: 'Free',
        price: '$0',
        subtitle: 'Capture ideas and find them quickly',
        features: ['Sync unlimited devices',
                   '10 GB monthly uploads',
                   '200 MB max. note size',
                   'Customize Home dashboard and access extra widgets',
                   'Connect primary Google Calendar account',
                   'Add due dates, reminders, and notifications to your tasks',
],
        btn: 'Get Started',
        highlight: false,
    },
    {
        title: 'Personal',
        price: '$11.99',
        subtitle: 'Keep home and family on track',
        features: ['Sync unlimited devices',
                   '10 GB monthly uploads',
                   '200 MB max. note size',
                   'Customize Home dashboard and access extra widgets',
                   'Connect primary Google Calendar account',
                   'Add due dates, reminders, and notifications to your tasks',],
        btn: 'Get Started',
        highlight: true,
    },
    {
        title: 'Organization',
        price: '$49.99',
        subtitle: 'Capture ideas and find them quickly',
        features: ['Sync unlimited devices',
                   '10 GB monthly uploads',
                   '200 MB max. note size',
                   'Customize Home dashboard and access extra widgets',
                   'Connect primary Google Calendar account',
                   'Add due dates, reminders, and notifications to your tasks',],
        btn: 'Get Started',
        highlight: false,
    },
]
const Pricing = () => {
    return (
    <section className="pricing">
        <h2 className = "pricing_title">Choose <span className='highlighted-text'>Your Plan</span></h2>
        <p className = "pricing_subtitle">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
        <div className = "pricing_cards">
            {plans.map((plan) => (
                <div className = {`pricing_card ${plan.highlight ? 'highlight' : ''}`}>
                    <h3>{plan.title}</h3>
                    <p className = "price">{plan.price}</p>
                    <p className = "pricesub">{plan.subtitle}</p>
                    <ul>
                        {plan.features.map((feature) => (
                            <li key={Math.random()}>{feature}</li>
                        ))}
                    </ul>
                    <button className = "btn">{plan.btn}</button>
                </div>
            ))}
        </div>
    </section>
    );
}
export default Pricing;