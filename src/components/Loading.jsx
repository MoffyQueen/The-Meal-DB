import React from 'react'

const Loading = () => {
    return (
      <div className="d-flex justify-content align-items vh-100">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
}

export default Loading