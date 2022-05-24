import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { v4 as uuidv4 } from 'uuid';

import Register from './steps/register';
import Appearance from './steps/appearance';
import Aroma from './steps/aroma';
import Flavour from './steps/flavour';
import Mouthfeel from './steps/mouthfeel';
import Finished from './steps/finished';

import { get, set} from './utils/storage';

const beers = ['wit', 'trappist', 'ipa/tripel'];

const App = () => {

    const [ activeStep, setActiveStep ] = useState(0);
    const [ beerValues, setBeerValues ] = useState(get('beers', [{},{},{}]));
    const [ user, setUser ] = useState(get('user', {}));

    const id = get('id');
    if (!id) {
        set('id', uuidv4());
    }

    const onCompletedRegister = values => {
        setUser(values);
        setActiveStep(activeStep + 1);
        set('user', values);
    }

    const onCompletedStep = (beer, step) => {
        const idx = beers.indexOf(beer);

        return (values) => {
            const currentBeerValues = [ ...beerValues ];
            currentBeerValues[idx][step] = values;
            setBeerValues(currentBeerValues);
            set('beers', currentBeerValues);
            setActiveStep(activeStep + 1);
        }
    }

    const onPreviousStep = () => {
        setActiveStep(activeStep - 1);
    }

    // We're on the finish page, send all data to the API
    if (activeStep === 13) {
        fetch('http://localhost:8000/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                user,
                beerValues
            })
        })
    }

    return (
        <div className='w-full p-8'>
            <Register visible={activeStep === 0} value={user} onNextStep={onCompletedRegister} />

            {beers.map((beer, activeIndex) => {

                // Detract register step
                const idx = activeStep - 1;

                return (
                    <div key={beer}>
                        <Appearance value={beerValues[activeIndex]['appearance']} onPreviousStep={onPreviousStep} onNextStep={onCompletedStep(beer, 'appearance')} visible={idx === (activeIndex * 4)} />
                        <Aroma value={beerValues[activeIndex]['aroma']} onPreviousStep={onPreviousStep} onNextStep={onCompletedStep(beer, 'aroma')} visible={idx === (activeIndex * 4) + 1} />
                        <Flavour value={beerValues[activeIndex]['flavour']} onPreviousStep={onPreviousStep} onNextStep={onCompletedStep(beer, 'flavour')} visible={idx === (activeIndex * 4) + 2} />
                        <Mouthfeel isFinal={idx === 11} value={beerValues[activeIndex]['mouthfeel']} onPreviousStep={onPreviousStep} onNextStep={onCompletedStep(beer, 'mouthfeel')} visible={idx === (activeIndex * 4) + 3} />
                    </div>
                );
            })}

            <Finished onPreviousStep={onPreviousStep} visible={activeStep === 13} />

        </div>
    );

}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
