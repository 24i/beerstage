import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import Register from './steps/register';
import Appearance from './steps/appearance';
import Aroma from './steps/aroma';
import Flavour from './steps/flavour';
import Mouthfeel from './steps/mouthfeel';

import { get, set} from './utils/storage';

const beers = ['wit', 'trappist', 'ipa/tripel'];

const App = () => {

    const [ activeStep, setActiveStep ] = useState(0);
    const [ beerValues, setBeerValues ] = useState(get('beers', [{},{},{}]));
    const [ registerValues, setRegisterValues ] = useState(get('user', {}));

    const onCompletedRegister = values => {
        setRegisterValues(values);
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

    return (
        <div className='container mx-auto py-4'>

            <Register visible={activeStep === 0} value={registerValues} onNextStep={onCompletedRegister} />

            {beers.map((beer, activeIndex) => {

                // Detract register step
                const idx = activeStep - 1;

                return (
                    <div key={beer}>
                        <Appearance value={beerValues[activeIndex]['appearance']} onNextStep={onCompletedStep(beer, 'appearance')} visible={idx === 0 + activeIndex * 3} />
                        <Aroma value={beerValues[activeIndex]['aroma']} onNextStep={onCompletedStep(beer, 'aroma')} visible={idx === 1 + activeIndex * 3} />
                        <Flavour value={beerValues[activeIndex]['flavour']} onNextStep={onCompletedStep(beer, 'flavour')} visible={idx === 2 + activeIndex * 3} />
                        <Mouthfeel value={beerValues[activeIndex]['mouthfeel']} onNextStep={onCompletedStep(beer, 'mouthfeel')} visible={idx === 3 + activeIndex * 3} />
                    </div>
                );
            })}

        </div>
    );

}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
