import React from 'react';
const Product = () => {
  return (
    <div className="col-lg-3 col-md-12 col-sm-12 m-2 border">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="text-left mb-1">
            <img
              className="border border-primary m-1"
              src="https://raw.githubusercontent.com/webstore/react-js-tut1/main/src/assets/images/download.jpg"
              width="100"
            />
          </div>
        </div>
        <div className="col-lg-8 col-md-5 col-sm-6">
          <h6 className="text-left">Entertainment equipment</h6>
        </div>
        <div className="col-lg-12 col-md-5 col-sm-6">
          <div className="text-left text-secondary">
            In marketing, a product is an object, or system, or service made
            available for consumer use as of the consumer demand
          </div>
          <div className=" h6 text-primary">
            <span>$ 550</span>
            <button className="ml-4 btn btn-primary btn-xs">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
