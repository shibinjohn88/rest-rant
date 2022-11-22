const React = require('react')
const places = require('../../models/places')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <div className='container'>
                    <div className='row'>
                        <div className='imageholder col'>
                            <img src={data.place.pic} class="img-fluid" alt="..."/>
                        </div>
                        <div className='placedescription col'>
                            <h1>{data.place.name}</h1>
                            <h2>Rating</h2>
                            <p>Not rated</p>
                            <h2>Description</h2>
                            <p>Located in {data.place.city},{data.place.state} and serving {data.place.cuisines}</p>
                        </div>
                    </div>
                    
                    <div>
                        <h2>Comments</h2>
                        <p>No comments yet!</p>
                    </div>
                </div>
                
            </main>
        </Def>
    )
}

module.exports = show