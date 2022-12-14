 const React = require('react')

 function Def (html) {
    return(
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"></link>
                <link rel='stylesheet' href='/style.css'></link>
            </head>
            <body>
                <nav className='navbar'>
                    <div className='container-fluid'>
                        <ul>
                            <li className='nav-item'>
                            <a href="/">Home</a>
                            </li>
                            <li className='nav-item'>
                            <a href="/places">Places</a>
                            </li>
                            <li className='nav-item'>
                            <a href="/places/new">Add Place</a>
                            </li>
                        </ul>
                    </div>
                    
                </nav>

                {html.children}
            </body>
        </html>
    )
 }

 module.exports = Def