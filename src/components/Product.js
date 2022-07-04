import React from 'react';
const Product = () => {
  return (
    <article className="m-5 p-2">
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-1">
          <img src="" width="250" />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-5">
          <h3 className="text-left">Entertainment equipment</h3>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3">
          <div className="text-left">
            In marketing, a product is an object, or system, or service made
            available for consumer use as of the consumer demand
          </div>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1">
          <span>$ 250</span>
        </div>
      </div>
    </article>
  );
};

export default Product;
