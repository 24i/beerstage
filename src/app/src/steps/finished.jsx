import React from "react";

export default ({ visible = false }) => {

    if (!visible) {
        return null;
    }

    return (
        <div className='text-center mt-8'>
            <h2 className="text-4xl text-white mb-4">Awesome!</h2>
            <p className="text-white/75">You just finished tasting 3 great beers (hopefully), let's see what everyone thought!</p>
        </div>
    )

}