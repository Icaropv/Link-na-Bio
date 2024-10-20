import React from 'react'

const Button = ({ nome, icone }) => {
  return (
    <button className='bg-white w-[300px] flex text-center  rounded-md  m-auto mt-[30px]
    h-[50px] items-center justify-start gap-[70px] p-3'>
      
      
      {icone}
      {nome}
    </button>





  )
}

export default Button