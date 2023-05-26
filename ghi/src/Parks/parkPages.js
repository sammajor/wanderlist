// import { useState } from "react";
// import Pagination from "./ParkPagination";


// const ParkPages = ({dataFromParkList}) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [maxPageLimit, setMaxPageLimit] = useState(30);
//   const [minPageLimit, setMinPageLimit] = useState(0);
//   const onPageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   }
//   const onPrevClick = () => {
//     if((currentPage-1) % pageNumberLimit === 0){
//       setMaxPageLimit(maxPageLimit - pageNumberLimit);
//       setMinPageLimit(minPageLimit - pageNumberLimit);
//     }
//     setCurrentPage(prev=> prev-1)
//   }

//   const onNextClick = () => {
//     if(currentPage+1 > maxPageLimit){
//       setMaxPageLimit(maxPageLimit + pageNumberLimit);
//       setMinPageLimit(minPageLimit + pageNumberLimit);
//     }
//     setCurrentPage(prev=> prev+1)
//   }

//   const paginationAttributes = {
//     currentPage,
//     maxPageLimit,
//     minPageLimit,
//     response: data,
//   }
//   return(
//     <div>
//         <h2>Park List</h2>
//         {!loading ? <Pagination {...dataFromParkList={dataFromParkPages}} {...paginationAttributes}
//                           onPrevClick={onPrevClick}
//                           onNextClick={onNextClick}
//                           onPageChange={onPageChange}/>
//         : <div> Loading... </div>
//         }
//     </div>
//   )
// }

// export default ParkPages;
