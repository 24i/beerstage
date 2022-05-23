import React, { useState } from 'react';
import beerStyles from '../utils/styles';

export default ({
    onNextStep,
    value = {}
}) => {

    const [ name, setName ] = useState(value.name ?? '');
    const [ favoriteStyle, setFavoriteStyle ] = useState(value.favoriteStyle ?? '');
    const [ alcoholic, setAlcoholic ] = useState(true);

    const onChangeName = (e) => { setName(e.target.value) };
    const onChangeFavoriteStyle = (e) => { setFavoriteStyle(e.target.value); }
    const onNext = () => onNextStep({ name, favoriteStyle, alcoholic });

    return (
        <div>

            <div className='mb-4'>
                <h2 className='text-4xl font-bold text-xl text-white'>Beer Evaluation</h2>
            </div>

            <div className='mb-4'>
                <label className='block w-full font-bold text-xl text-white pb-2'>Your name:</label>
                <input value={name} className='block w-full text-white rounded-full p-4 px-6' style={{ background: 'rgba(97, 98, 100, 0.6)' }} type="text" onChange={onChangeName} />
            </div>

            <div className='mb-4'>
                <label className='block w-full font-bold text-xl text-white pb-2'>Your favourite beer style:</label>
                <input list='styles' value={favoriteStyle} type='text' className='block w-full form-select text-white rounded-full p-4 px-6' style={{ background: 'rgba(97, 98, 100, 0.6)' }}  onChange={onChangeFavoriteStyle}  />
                <datalist id='styles'>
                    {beerStyles.map(style => <option key={style} value={style} />)}
                </datalist>
            </div>

            <div className='mb-8'>
                <label className='block w-full font-bold text-xl text-white pb-2'>Alcoholic</label>
                <button className={`btn ${alcoholic ? 'btn-primary': 'btn-ghost border border-primary hover:border-primary'} p-4 rounded-l-full`} onClick={() => setAlcoholic(true)}>Alcoholic</button>
                <button className={`btn ${!alcoholic ? 'btn-primary': 'btn-ghost border border-primary hover:border-primary'} p-4 rounded-r-full`} onClick={() => setAlcoholic(false)}>Non-Alcoholic</button>
            </div>

            <div>
            <button className='btn btn-primary btn-block rounded-full' onClick={onNext}>Next</button>
            </div>

        </div>
    )

};