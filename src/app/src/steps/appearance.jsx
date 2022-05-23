import React, { useState } from 'react';
import { ColorTranslator } from 'colortranslator';
import srmColors from '../utils/srm';

export default ({
    onNextStep,
    value = {}
}) => {

    const [ colour, setColour ] = useState(10);
    const onChangeColour = e => setColour(e.target.value);


    const srmColor = new ColorTranslator(srmColors[colour]);
    const colourSliderBackground = `${srmColor.H} ${srmColor.S}% ${srmColor.L}%`;


    return (
        <div>

            <div className='mb-4'>
                <h2 className='text-4xl font-bold text-xl text-white'>Appearance</h2>
            </div>

            <div className='mb-4'>
                <label className='block w-full text-md text-white pb-2'>Colour:</label>
                <input type='range' min='0' max='40' value={colour} className='w-full range range-primary range-lg h-8' onChange={onChangeColour} style={{'--range-shdw': colourSliderBackground}} />
            </div>

            <div className='mb-4'>
                <label className='block w-full text-md text-white pb-2'>Clarity:</label>
                <div className='w-full grid grid-cols-3 text-xs text-white/50 mb-1'>
                    <div>Brilliant</div>
                    <div className='text-center'>Dull</div>
                    <div className='text-right'>Cloudy</div>
                </div>
                <input type='range' min='0' max='100' className='w-full range range-primary range-xs' />
            </div>

            <div className='mb-8'>
                <label className='block w-full text-md text-white pb-2'>Head retention:</label>
                <div className='w-full grid grid-cols-3 text-xs text-white/50 mb-1'>
                    <div>Poor</div>
                    <div className='text-center'>Good</div>
                    <div className='text-right'>Persistent</div>
                </div>
                <input type='range' min='0' max='100' className='w-full range range-primary range-xs' />
            </div>

            <div>
                <button className='btn btn-primary btn-block rounded-full'>Next</button>
            </div>

        </div>
    )

};