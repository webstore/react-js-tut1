import React from 'react';
const Product = () => {
  return (
    <article className="m-5 p-2">
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-2">
          <div className="text-left mb-1">
            <img
              className="border border-primary"
              src="https://raw.githubusercontent.com/webstore/react-js-tut1/main/src/assets/images/download.jpg"
              width="150"
            />
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-5">
          <h6 className="text-left ml-1">Entertainment equipment</h6>
          <div className="text-left ml-1 text-secondary">
            In marketing, a product is an object, or system, or service made
            available for consumer use as of the consumer demand
          </div>
        </div>

        <div className="col-lg-1 col-md-1 col-sm-1">
          <div className=" h6 text-primary  ml-1">$ 250</div>
        </div>
      </div>
    </article>
  );
};

export default Product;
