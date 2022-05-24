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

    const [ aromas, setAromas ] = useState([]);
    const onAromasKeyDown = e => {
        if (e.keyCode === 13) {
            const updatedAromas = [ ...aromas, e.target.value ];

            e.target.value = '';
            setAromas(updatedAromas);
        }
    }

    const onRemoveAroma = aroma => {
        setAromas(aromas.filter(item => item !== aroma));
    }


    return (
        <div>

            <div className='mb-4'>
                <h2 className='text-4xl font-bold text-xl text-white'>Aroma</h2>
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
                <label className='block w-full text-md text-white pb-2'>Impression:</label>
                <div className='w-full grid grid-cols-3 text-xs text-white/50 mb-1'>
                    <div>Off</div>
                    <div className='text-center'>Neutral</div>
                    <div className='text-right'>Nice</div>
                </div>
                <input type='range' min='0' max='100' className='w-full range range-primary range-xs' />
            </div>


            <div className='mb-8'>
                <label className='block w-full text-md text-white pb-2'>Which aromas do you smell:</label>
                <input className='input w-full bg-secondary rounded-full' type="text" onKeyDown={onAromasKeyDown} />
                <div className='mt-4'>
                    {aromas.map(aroma => <div className='badge badge-primary p-4 mr-2' key={aroma}>{aroma} <Close onClick={() => onRemoveAroma(aroma)} /></div>)}
                </div>
            </div>

            <div>
                <button className='btn btn-primary btn-block rounded-full'>Next</button>
            </div>

        </div>
    )

};