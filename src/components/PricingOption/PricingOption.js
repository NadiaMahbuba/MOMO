import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';
//import { CheckCircleIcon } from '@heroicons/react/solid'
const PricingOption = (props) => {
    const { name, price, benefits } = props.pricingoption;
    return (
        <div className='bg-white p-4 text-black rounded-lg'>
            <h2 className='bg-red-300 py-2 rounded text-xl font-bold'>{name}</h2>
            <p ><span className='text-5xl font-bold'>{price}</span>

                <span className='text-xl font-bold text-gray-500'>/mo</span></p>
            <div>
                <h3 className='text-xl font-bold'>Benefits:</h3>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
            </div>
            <button className='bg-green-500 flex justify-center w-full text-white py-2 rounded hover:text-green-700 font-bold'>Buy now <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon></button>
        </div>
    );
};

export default PricingOption;