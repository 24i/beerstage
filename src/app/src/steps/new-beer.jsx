import React from "react";

export default ({ onPreviousStep, onNextStep, nth, visible = false }) => {

    if (!visible) {
        return null;
    }

    if (nth === 'third') {
        return (
            <div className='text-center mt-8'>
                <h2 className="text-4xl text-white mb-4"><button onClick={onPreviousStep} className='float-left absolute block'>&#8249;</button>You finished the {nth} beer!</h2>
                <p className="text-white/75">That was the last one.</p>
                <div className="mt-8">
                    <button className='btn btn-primary btn-block rounded-full' onClick={onNextStep}>Continue</button>
                </div>
            </div>
        )
    }

    return (
        <div className='text-center mt-8'>
            <h2 className="text-4xl text-white mb-4"><button onClick={onPreviousStep} className='float-left absolute block'>&#8249;</button>You finished the {nth} beer!</h2>
            <p className="text-white/75">On to the next one.</p>
            <div className="mt-8">
                <button className='btn btn-primary btn-block rounded-full' onClick={onNextStep}>Continue</button>
            </div>
        </div>
    )

}