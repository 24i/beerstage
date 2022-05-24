import React from "react";

export default ({ onPreviousStep, visible = false }) => {

    if (!visible) {
        return null;
    }

    return (
        <div className='text-center mt-8'>
            <h2 className="text-4xl text-white mb-4"><button onClick={onPreviousStep} className='float-left absolute block'>&#8249;</button>Awesome!</h2>
            <p className="text-white/75">You just finished tasting 3 great beers (hopefully), check back soon for how this all stacked up.</p>
        </div>
    )

}