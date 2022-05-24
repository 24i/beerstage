import React, { useState } from 'react';
import { ColorTranslator } from 'colortranslator';
import srmColors from '../utils/srm';

export default ({
    onNextStep,
    onPreviousStep,
    value = {},
    visible = false
}) => {

    if (!visible) {
        return null;
    }

    const [ colour, setColour ] = useState(value.colour ?? 10);
    const [ clarity, setClarity ] = useState(value.clarity ?? 50);
    const [ retention, setRetention ] = useState(value.retention ?? 50);

    const srmColor = new ColorTranslator(srmColors[colour]);
    const colourSliderBackground = `${srmColor.H} ${srmColor.S}% ${srmColor.L}%`;

    const onNext = () => onNextStep({ colour, clarity, retention });


    return (
        <div>

            <div className='mb-4'>
                <h2 className='text-4xl font-bold text-4xl text-white text-center'><button onClick={onPreviousStep} className='float-left absolute block'>&#8249;</button>Appearance</h2>
            </div>

            <div className='mb-4'>
                <label className='block w-full text-md text-white pb-2'>Colour:</label>
                <input type='range' min='0' max='40' value={colour} className='w-full range range-primary range-lg h-8' onChange={e => setColour(parseInt(e.target.value, 10))} style={{'--range-shdw': colourSliderBackground}} />
            </div>

            <div className='mb-4'>
                <label className='block w-full text-md text-white pb-2'>Clarity:</label>
                <label className='label px-0'><span className='label-text-alt text-white/50'>Can you see through the beer?</span></label>
                <div className='w-full grid grid-cols-3 text-xs text-white/50 mb-1'>
                    <div>Brilliant</div>
                    <div className='text-center'>Dull</div>
                    <div className='text-right'>Cloudy</div>
                </div>
                <input value={clarity} onChange={e => setClarity(parseInt(e.target.value, 10))} type='range' min='0' max='100' className='w-full range range-primary range-xs' />
            </div>

            <div className='mb-8'>
                <label className='block w-full text-md text-white pb-2'>Head retention:</label>
                <label className='label px-0'><span className='label-text-alt text-white/50'>How well does the head (foam) linger?</span></label>
                <div className='w-full grid grid-cols-3 text-xs text-white/50 mb-1'>
                    <div>Poor</div>
                    <div className='text-center'>Good</div>
                    <div className='text-right'>Persistent</div>
                </div>
                <input value={retention} onChange={e => setRetention(parseInt(e.target.value, 10))} type='range' min='0' max='100' className='w-full range range-primary range-xs' />
            </div>

            <div>
                <button className='btn btn-primary btn-block rounded-full' onClick={onNext}>Next</button>
            </div>

        </div>
    )

};