import React from "react";

const FlexBox: React.FC = () => {
  return (
    <>
      {/* <!-- Flex and alignment --> */}
      <div className="flex flex-wrap h-72 w-100 bg-gray-100 justify-around items-center">
        <div className="p-10 border border-blue-600 bg-blue-100">01</div>
        <div className="p-10 border border-blue-600 bg-blue-100">02</div>
        <div className="self-start p-10 border border-blue-600 bg-blue-100">
          03
        </div>
        <div className="self-end p-10 border border-blue-600 bg-blue-100">
          04
        </div>
      </div>

      {/* <!-- Flex Column, Gap and Order --> */}
      <div className="flex flex-col gap-4 w-100 bg-gray-200 justify-around items-center">
        <div className="order-4 p-10 border border-blue-600 bg-blue-100">
          01
        </div>
        <div className="order-1 p-10 border border-blue-600 bg-blue-100">
          02
        </div>
        <div className="p-10 border border-blue-600 bg-blue-100">03</div>
        <div className="p-10 border border-blue-600 bg-blue-100">04</div>
      </div>

      {/* <!-- Grow and shrink --> */}
      <div className="flex w-100 bg-gray-300">
        {/* <!-- flex-none: Prevent item from growing or shrinking --> */}
        <div className="w-64 flex-none p-10 border border-blue-600 bg-blue-100">
          01
        </div>
        {/* <!-- flex-initial:  Allow item to shrink but not grow, taking into account its initial size  --> */}
        <div className="w-64 flex-initial p-10 border border-blue-600 bg-blue-100">
          02
        </div>
        {/* <!-- flex-auto: Allow item to grow and shrink, taking into account its initial size --> */}
        <div className="w-64 flex-auto p-10 border border-blue-600 bg-blue-100">
          03
        </div>
        {/* <!-- flex-1: Allow item to grow and shrink as needed, ignoring its initial size --> */}
        <div className="w-64 flex-1 p-10 border border-blue-600 bg-blue-100">
          04
        </div>
        <div className="p-10 border border-blue-600 bg-blue-100">05</div>
        <div className="p-10 border border-blue-600 bg-blue-100">06</div>
        <div className="p-10 border border-blue-600 bg-blue-100">07</div>
      </div>
    </>
  );
};

export default FlexBox;

// <!-- Justify Content
//       justify-start	      justify-content: flex-start;
//       justify-end	        justify-content: flex-end;
//       justify-center	    justify-content: center;
//       justify-between	    justify-content: space-between;
//       justify-around	    justify-content: space-around;
//       justify-evenly	    justify-content: space-evenly;
//     -->

// <!--
//       items-start	align-items: flex-start;
//       items-end	align-items: flex-end;
//       items-center	align-items: center;
//       items-baseline	align-items: baseline;
//       items-stretch	align-items: stretch;
//      -->

// <!-- Flex Direction
//       flex-row	        flex-direction: row;
//       flex-row-reverse	flex-direction: row-reverse;
//       flex-col	        flex-direction: column;
//       flex-col-reverse	flex-direction: column-reverse;
//     -->

// <!--
//       flex-wrap	        flex-wrap: wrap;
//       flex-wrap-reverse	flex-wrap: wrap-reverse;
//       flex-nowrap	      flex-wrap: nowrap;
//      -->

// <!-- Flex Properties
//       flex-none	    flex: none;
//       Prevent item from growing or shrinking

//       flex-initial	flex: 0 1 auto;
//       Allow item to shrink but not grow, taking into account its initial size

//       flex-auto	    flex: 1 1 auto;
//       Allow item to grow and shrink, taking into account its initial size

//       flex-1	      flex: 1 1 0%;
//       Allow item to grow and shrink as needed, ignoring its initial size
//     -->
