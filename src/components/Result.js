import React from 'react';
import PropTypes from 'prop-types';
import '../components/App.css';

const Result = ({value}) =>(
      <div className="result">
        {value}
      </div>
    )

Result.propType = {
    value: PropTypes.string.isRequired
}
Result.defaultProps= {
    value:"0"
}

export default Result;