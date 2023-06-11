import React from 'react'
import spiner from "./spiner.gif"

const loading = () => {
    return (
      <div className='text-center'>
        <img src={spiner} alt="loading" style={{height: "50px",width: "50px", margin: "5px 0"}}/>
      </div>
    )
}

export default loading