import React, { useState } from 'react';
import beerStyles from '../utils/styles';

export default ({
    onNextStep,
    value = {},
    visible = false
}) => {

    if (!visible) {
        return null;
    }

    const [ name, setName ] = useState(value.name ?? '');
    const [ email, setEmail ] = useState(value.email ?? '');
    const [ favoriteStyle, setFavoriteStyle ] = useState(value.favoriteStyle ?? '');
    const [ alcoholic, setAlcoholic ] = useState(true);

    const onChangeName = (e) => { setName(e.target.value) };
    const onChangeFavoriteStyle = (e) => { setFavoriteStyle(e.target.value); }
    const onNext = () => onNextStep({ name, favoriteStyle, alcoholic });

    return (
        <div>

            <div className='mb-4'>
                <h2 className='text-4xl font-bold text-white text-center'>Beer Evaluation</h2>
            </div>

            <div className='mb-4'>
                <label className='block w-full font-bold text-xl text-white pb-2'>Your name:</label>
                <input value={name} className='input w-full bg-secondary rounded-full input-lg' type="text" onChange={e => setName(e.target.value)} />
            </div>

            <div className='mb-4'>
                <label className='block w-full font-bold text-xl text-white'>Email:</label>
                <label className='label px-0'><span className='label-text-alt text-white/50'>Optional, but we can send you your results afterwards.</span></label>
                <input value={email} className='input w-full bg-secondary rounded-full input-lg' type="email" onChange={e => setEmail(e.target.email)} />
            </div>

            <div className='mb-4'>
                <label className='block w-full font-bold text-xl text-white pb-2'>Your favourite beer style:</label>
                <input list='styles' value={favoriteStyle} type='text' className='input input-lg w-full bg-secondary rounded-full' onChange={onChangeFavoriteStyle}  />
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