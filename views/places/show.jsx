const React = require('react')
const places = require('../../models/places')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={data.place.pic} class="img-fluid" alt="..."/>
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className='col-sm-6'>
                        <h1>{data.place.name}</h1>
                        <h2>Rating</h2>
                        <p>Not rated</p>
                        <h2>Description</h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                        <a href={`${data.id}/edit`} className="btn btn-warning"> 
                        Edit
                        </a>  
                        <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>     

                    </div>
                </div>
                
                <div>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>
            
                
            </main>
        </Def>
    )
}

module.exports = show