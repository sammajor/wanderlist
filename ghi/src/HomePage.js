import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <div>
                <div>
                <div fluid="true" id="Hero-Image">
                    <h1 className='d-flex justify-content-center text-center'>
                        Welcome to WanderList! <br></br>
                        Plan Your Next Trip to a National Park!
                    </h1>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                    <Link to="/parks">
                    <button
                    value=""
                    type="button"
                    className="btn btn-success btn-lg">
                    Click Here to Get Started!</button>
                    </Link>
                  </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
