import React from 'react'

const Card = ({id, name, email}) => {
    return (
        <div className='bg-navy dib br3 pa3 ma2 grow bw2 shadow-2 tc white'>
            <img src = {`https://robohash.org/${id}?200x200`} alt={`profile shot for ${name}`}/>
            <div className='helvetica'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    )

}

export default Card;