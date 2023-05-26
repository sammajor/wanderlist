import React from "react";
import { useState } from 'react';
import ParkCard from "./ParkCard";

const Pagination = (props) => {
    const { currentPage, onPrevClick, onNextClick, onPageChange, maxPageLimit, minPageLimit, data, filteredParks } = props;
    const [totalPages, setTotalPages] = useState(5);
    const pages = []
    const filtered =  filteredParks(data)
    for (let i=1 ; i<=totalPages; i++){
        pages.push(i);
    }
    const pageNumbers = pages.map(page => {
        if(page <= maxPageLimit && page > minPageLimit){
            return(
                <li key={page} id={page} onClick={onPageChange}
                className={currentPage===page ? 'active' : null}>
                {page}
                </li>
            );

        }else{
            return null;
    }
    });
    let pageIncrementEllipses = null;

    if (pages.length > maxPageLimit){
        pageIncrementEllipses = <li onClick={onNextClick}>&hellip;</li>
    }

    let pageDecrementEllipses = null;
    if (minPageLimit >=1){
        pageDecrementEllipses = <li onClick={onPrevClick}>&hellip;</li>
    }

    // const renderData = () => {
    //     {filtered.map(park => {
    //         return (
    //         <ul>
    //             <ParkCard key={park.park_id}
    //             image={park.park_image}
    //             name={park.full_name}
    //             city={park.city}
    //             state={park.state}
    //             description={park.description}/>
    //         </ul>
    //     )
    //     })
    //     }
    console.log(data)

    return(
        <div className="main">
            <div className="mainData">
                 {filtered.map(park => {
            return (
                <ParkCard key={park.park_id}
                park_image={park.park_image}
                full_name={park.full_name}
                city={park.city}
                state={park.state}
                description={park.description}/>
        )
        })
        }
            </div>
            <ul className="pageNumbers">
               <li>
                   <button onClick={onPrevClick} disabled={currentPage === pages[0]}>Prev</button>
               </li>
               {pageDecrementEllipses}
                {pageNumbers}
               {pageIncrementEllipses}
                <li>
                   <button onClick={onNextClick} disabled={currentPage === pages[pages.length-1]}>&gt;Next</button>
               </li>
            </ul>
        </div>
    )

};


export default Pagination;
