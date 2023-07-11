import React from 'react'

const SearchForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
  return (
      <div className='w-lg-50 mx-auto my-2'>
          <form onSubmit={handleSubmit} className='w-100 mx-auto'>
              <label
                  htmlFor="name"
                  className='form- text-success fw-bold fs-4 text-center'>
                  Search for your favorite meal
              </label>
             <input type="text" className='form-control outline-0' id='name' /> 
          </form>
    </div>
  )
}

export default SearchForm