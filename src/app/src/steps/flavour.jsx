import React, { useState } from 'react';

const Close = props => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>;

export default ({
    onNextStep,
    value = {},
    visible = false
}) => {
    
    if (!visible) {
        return null;
    }

    const [ flavours, setFlavours ] = useState([]);
    const onFlavoursKeyDown = e => {
        if (e.keyCode === 13) {
            const updatedFlavours = [ ...flavours, e.target.value ];

            e.target.value = '';
            setFlavours(updatedFlavours);
        }
    }

    const onRemoveFlavour = flavour => {
        setFlavours(flavours.filter(item => item !== flavour));
    }


    return (
        <div>

            <div className='mb-4'>
                <h2 className='text-4xl font-bold text-xl text-white'>Flavour</h2>
            </div>

            <div className='mb-4'>
                <label className='block w-full text-md text-white pb-2'>Intensity:</label>
                <div className='w-full grid grid-cols-2 text-xs text-white/50 mb-1'>
                    <div>Faint</div>
                    <div className='text-right'>Strong</div>
                </div>
                <input type='range' min='0' max='100' className='w-full range range-primary range-xs' />
            </div>

            <div className='mb-4'>
                <label className='block w-full text-md text-white pb-2'>Balance:</label>
                <div className='w-full grid grid-cols-2 text-xs text-white/50 mb-1'>
                    <div>Sweet</div>
                    <div className='text-right'>Bitter</div>
                </div>
                <input type='range' min='0' max='100' className='w-full range range-primary range-xs' />
            </div>

            <div className='mb-4'>
                <label className='block w-full text-md text-white pb-2'>Impression:</label>
                <div className='w-full grid grid-cols-3 text-xs text-white/50 mb-1'>
                    <div>Off</div>
                    <div className='text-center'>Neutral</div>
                    <div className='text-right'>Nice</div>
                </div>
                <input type='range' min='0' max='100' className='w-full range range-primary range-xs' />
            </div>


            <div className='mb-8'>
                <label className='block w-full text-md text-white pb-2'>Which flavours do you taste:</label>
                <input className='input w-full bg-secondary rounded-full' type="text" onKeyDown={onFlavoursKeyDown} />
                <div className='mt-4'>
                    {flavours.map(flavour => <div className='badge badge-primary p-4 mr-2' key={flavour}>{flavour} <Close onClick={() => onRemoveFlavour(flavour)} /></div>)}
                </div>
            </div>

            <div>
                <button className='btn btn-primary btn-block rounded-full'>Next</button>
            </div>

        </div>
    )

};