import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Register from './steps/register';
import { get, set} from './utils/storage';

const App = () => {

    const [ registerValues, setRegisterValues ] = useState(get('storageStep', {}));
    const onCompletedRegister = values => {
        setRegisterValues(values);
        set('storageStep', values);
    }

    return (
        <div className='container mx-auto py-4'>

            <Register value={registerValues} onNextStep={onCompletedRegister} />

        </div>
    );

}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
