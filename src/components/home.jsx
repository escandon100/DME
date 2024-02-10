import Nav from "./nav"
function Home(){

    return(
        <div>
            <div className="container">  
                <div className="brandimgdiv">
                    <img class="brandimg" src="/images/simplemodel.jpg"  alt="brandimg"></img>
                </div>
                <Nav />
                <div className="brandnamediv">
                    <h1 className="brandname">D.M.E</h1>
                    <h3 className="motto">Drip made Easy</h3>
                </div>
                
            </div>
        </div>
    )
    
}

export default Home