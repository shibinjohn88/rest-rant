const React = require('react')
const places = require('../../models/places')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet ! 
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map( c => {
            return (
                <div className='border col-sm-6'>
                    <h2 className='rant'>{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>{ c.content }</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={data.place.pic} className="img-fluid" alt="..."/>
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
                        <a href={`${data.place.id}/edit`} className="btn btn-warning"> 
                        Edit
                        </a>  
                        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>     

                    </div>
                </div>
                
                <div className='row'>
                    <h2>Comments</h2>
                    { comments }
                </div>
                <h2>Got your Own Rant or Rave?</h2>
                <form method="POST" action={ `/places/${data.place.id}/comment` }> 
                <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="content">Content</label>
                  <textarea id="content" name="content" className='form-control'></textarea>
                </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-4">
                    <label htmlFor="author">Author</label>
                    <input id="author" name="author"/>
                    </div>
                    <div className="form-group col-sm-4">
                    <label htmlFor="stars">Star Rating</label>
                    <input type="range" step="0.5" min="1" max="5" id="stars" name="stars"/>
                    </div>
                    <div className="form-group col-sm-2">
                    <label htmlFor="rant">Rant?</label>
                    <input type="checkbox" id="rant" name="rant"/>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary" value="Add Comment" />
                </form> 
            
                
            </main>
        </Def>
    )
}

module.exports = show