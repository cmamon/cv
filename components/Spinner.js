import React from 'react'

class Spinner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="lds-hourglass">
          <div /><div /><div /><div />
        </div>
        <style jsx>
          {`
            .lds-hourglass {
              display: inline-block;
              width: 45px;
              height: 45px;
            }
            
            .lds-hourglass:after {
              content: " ";
              display: block;
              border-radius: 50%;
              width: 0;
              height: 0;
              margin: 10px;
              box-sizing: border-box;
              border: 10px solid yellowgreen;
              border-color: yellowgreen transparent yellowgreen transparent;
              animation: lds-hourglass 2.7s infinite;
            }
            
            @keyframes lds-hourglass {
              0% {
                transform: rotate(0);
                animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
              }
              50% {
                transform: rotate(900deg);
                animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
              }
              100% {
                transform: rotate(1800deg);
              }
            }            
          `}
          </style>
      </>
    );
  }
}
  
  export default Spinner