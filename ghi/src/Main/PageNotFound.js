//  NAVIGATES USER TO A CUSTOMIZED 404 PAGE NOT FOUND COMPONENT IF THERE IS AN ATTEMPT TO VISIT ENDPOINT THAT DOES NOT EXIST //
const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="page-not-found-text">
        <img
          src="https://resources.cdn.yaclass.in/f1ef52e1-509f-4c3d-a0e7-dc222f7f0c7d/shutterstock1797498436w400.jpg"
          alt="Error pic"
        />
        <h2 className="page-not-found-text">
          Oops! Looks Like This Page Does Not Exist!
        </h2>
      </div>
    </div>
  );
};
export default PageNotFound;
