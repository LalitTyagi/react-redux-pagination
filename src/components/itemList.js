import React, { Component, Fragment } from "react";

class ItemList extends Component {
  render() {
    const code2 = this.props.country.alpha2Code;
    const region = this.props.country.region;
    const name = this.props.country.name;

    return (
      <Fragment>
        <div className="col-sm-6 col-md-4 country-card">
          <div className="country-card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
            <div className="h-100 position-relative border-gray border-right px-2 bg-white rounded-left">
              <img
                src={`http://www.countryflags.io/${code2.toLowerCase()}/flat/64.png`}
                className="d-block h-100"
                alt={`${code2} Flag`}
              />
            </div>
            <div className="px-3">
              <span className="country-name text-dark d-block font-weight-bold">
                {name}
              </span>
              <br />
              <span className="country-region text-secondary text-uppercase">
                {region}
              </span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ItemList;
