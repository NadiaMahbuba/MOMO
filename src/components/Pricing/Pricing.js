import React from 'react';
import PricingOption from '../PricingOption/PricingOption';



const Pricing = () => {
    const PricingOptions = [
        {
            id: 1, name: "Free", price: 0, benefits: [
                'lifetime free', 'unlimited object', 'localized deals', 'fantastic deals', 'crazy deals'
            ]
        },
        {
            id: 2, name: "Regular", price: 9.99, benefits: [
                'EveryThing on free', 'unlimited object', 'localized deals', 'fantastic deals', 'crazy deals'
            ]
        },
        {
            id: 3, name: "Medium", price: 19.99, benefits: [
                'lifetime free', 'unlimited object', 'localized deals', 'fantastic deals', 'crazy deals'
            ]
        }
    ]
    return (
        <div className='bg-red-300 p-4 mt-4 text-white font-mono'>
            <h1 className='text-6xl'>Best Deal of the town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto blanditiis possimus? Repellendus ut nobis error libero debitis quo perspiciatis, optio non. Harum placeat rem recusandae distinctio tempore odio ullam.</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    PricingOptions.map(pricingoption => <PricingOption pricingoption={pricingoption}
                        key={pricingoption.id}
                    ></PricingOption>)
                }

            </div>
        </div >
    );
};

export default Pricing;