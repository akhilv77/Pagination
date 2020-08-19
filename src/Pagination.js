import React from "react";

const Pagination = ({totalPosts,postsPerPage,paginate}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ display: "flex" }}>
      {pageNumbers.map((number) => {
        return (
          <a onClick={()=>paginate(number)} href='!#'>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "blue",
              width:"40px",
              height:"40px"
            }}
          >
            {number}
          </div>
          </a>
        );
      })}
    </div>
  );
};
export default Pagination;
