import React from "react";

const Grid: React.FC = () => {
  return (
    <>
      {/* <!-- Grid cols and rows --> */}
      <div className="grid grid-cols-3 grid-rows-4 gap-4 w-100 bg-red-100">
        <div className="p-10 border border-blue-600 bg-blue-100">01</div>
        <div className="p-10 border border-blue-600 bg-blue-100">02</div>
        <div className="p-10 border border-blue-600 bg-blue-100">03</div>
        <div className="p-10 border border-blue-600 bg-blue-100">04</div>
        <div className="p-10 border border-blue-600 bg-blue-100">05</div>
        <div className="p-10 border border-blue-600 bg-blue-100">06</div>
        <div className="p-10 border border-blue-600 bg-blue-100">07</div>
        <div className="p-10 border border-blue-600 bg-blue-100">08</div>
        <div className="p-10 border border-blue-600 bg-blue-100">09</div>
      </div>

      {/* <!-- Col and row span --> */}
      <div className="grid grid-cols-3 gap-4 w-100 bg-green-100">
        <div className="col-span-2 row-span-2 p-10 border border-blue-600 bg-blue-100">
          01
        </div>
        <div className="p-10 border border-blue-600 bg-blue-100">02</div>
        <div className="p-10 border border-blue-600 bg-blue-100">03</div>
        <div className="p-10 border border-blue-600 bg-blue-100">04</div>
        <div className="p-10 border border-blue-600 bg-blue-100">05</div>
        <div className="p-10 border border-blue-600 bg-blue-100">06</div>
        <div className="col-span-3 p-10 border border-blue-600 bg-blue-100">
          07
        </div>
        <div className="p-10 border border-blue-600 bg-blue-100">08</div>
        <div className="col-span-2 p-10 border border-blue-600 bg-blue-100">
          09
        </div>
      </div>
    </>
  );
};

export default Grid;

// <!--
//   Grid Template Columns
//   grid-cols-1	    grid-template-columns: repeat(1, minmax(0, 1fr));
//   grid-cols-2	    grid-template-columns: repeat(2, minmax(0, 1fr));
//   grid-cols-3	    grid-template-columns: repeat(3, minmax(0, 1fr));
//   grid-cols-4	    grid-template-columns: repeat(4, minmax(0, 1fr));
//   grid-cols-5	    grid-template-columns: repeat(5, minmax(0, 1fr));
//   grid-cols-6	    grid-template-columns: repeat(6, minmax(0, 1fr));
//   grid-cols-7	    grid-template-columns: repeat(7, minmax(0, 1fr));
//   grid-cols-8	    grid-template-columns: repeat(8, minmax(0, 1fr));
//   grid-cols-9	    grid-template-columns: repeat(9, minmax(0, 1fr));
//   grid-cols-10	  grid-template-columns: repeat(10, minmax(0, 1fr));
//   grid-cols-11	  grid-template-columns: repeat(11, minmax(0, 1fr));
//   grid-cols-12	  grid-template-columns: repeat(12, minmax(0, 1fr));
//   grid-cols-none	grid-template-columns: none;
//  -->

// <!-- Grid Template Rows
//   grid-rows-1	    grid-template-rows: repeat(1, minmax(0, 1fr));
//   grid-rows-2	    grid-template-rows: repeat(2, minmax(0, 1fr));
//   grid-rows-3	    grid-template-rows: repeat(3, minmax(0, 1fr));
//   grid-rows-4	    grid-template-rows: repeat(4, minmax(0, 1fr));
//   grid-rows-5	    grid-template-rows: repeat(5, minmax(0, 1fr));
//   grid-rows-6	    grid-template-rows: repeat(6, minmax(0, 1fr));
//   grid-rows-none	grid-template-rows: none;
//   -->
