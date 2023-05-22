import React, {useEffect, useState} from 'react';


function ParksList(props) {
    const [parks, setParksList] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8000/api/parks';

        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setParksList(data.parks)
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (

        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card">
                    <h1>All Parks</h1>
                        <img src="..." className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="..." className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="..." className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="..." className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParksList;
