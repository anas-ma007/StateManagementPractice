// import randomColor from 'randomcolor'


const Footer = () => {
 
  const color = "black" // Change the color from "black" to randomColor(), then apply the action to the body component's color button.

  console.log(color, "color");
  return (
      <div className='flex justify-center items-center h-[15%] border-2 border-x-4 border-black'>
        <p style={{color: color}} className='text-base md:text-xl font-bold mr-3 border-2 border-black p-2 '> Footer - Count is 0</p>
      </div>
  )
}

export default Footer