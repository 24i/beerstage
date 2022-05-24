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

    const [ sensations, setSensations ] = useState([]);
    const onSensationsKeyDown = e => {
        if (e.keyCode === 13) {
            const updatedSensations = [ ...sensations, e.target.value ];

            e.target.value = '';
            setSensations(updatedAromas);
        }
    }

    const onRemoveSensation = sensation => {
        setSensations(sensations.filter(item => item !== sensation));
    }


    return (
        <div>

            <div className='mb-4'>
                <h2 className='text-4xl font-bold text-xl text-white'>Mouthfeel</h2>
            </div>

            <div className='mb-4'>
                <label className='block w-full text-md text-white pb-2'>Body:</label>
                <div className='w-full grid grid-cols-3 text-xs text-white/50 mb-1'>
                    <div>Light</div>
                    <div className='text-center'>Medium</div>
                    <div className='text-right'>Full</div>
                </div>
                <input type='range' min='0' max='100' className='w-full range range-primary range-xs' />
            </div>

            <div className='mb-4'>
                <label className='block w-full text-md text-white pb-2'>Carbonation:</label>
                <div className='w-full grid grid-cols-3 text-xs text-white/50 mb-1'>
                    <div>Light</div>
                    <div className='text-center'>Lively</div>
                    <div className='text-right'>Excessive</div>
                </div>
                <input type='range' min='0' max='100' className='w-full range range-primary range-xs' />
            </div>


            <div className='mb-8'>
                <label className='block w-full text-md text-white pb-2'>Which sensations do you feel:</label>
                <input className='input w-full bg-secondary rounded-full' type="text" onKeyDown={onSensationsKeyDown} />
                <div className='mt-4'>
                    {sensations.map(sensation => <div className='badge badge-primary p-4 mr-2' key={sensation}>{sensation} <Close onClick={() => onRemoveSensation(sensation)} /></div>)}
                </div>
            </div>

            <div>
                <button className='btn btn-primary btn-block rounded-full'>Next</button>
            </div>

        </div>
    )

};