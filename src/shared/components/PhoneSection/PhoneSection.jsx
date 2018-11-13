import React from 'react';

const PhonesSection = ({ phoneInfo = {} }) => {
  const objProps = Object.keys(phoneInfo);

  return(
    <ul className="list-group list-group-flush">
      {
        objProps.map((p, idx) => {
          return(
            <li key={idx} className={`phoneInfo_${p} list-group-item`}>
              <label for=''>PHONE:</label>
              <span>
                {phoneInfo[p]}
              </span>
              <span>
                {p.toUpperCase()}
              </span>
            </li>
          );
        })
      }
    </ul>
      
  );
}

export default PhonesSection;