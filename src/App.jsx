import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#00000");


  function randomColorUtility(length){
    return Math.floor(Math.floor(Math.random()*length))
  }
  
  function handleCreateRandomHexColor(){
    // #123456
    const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    
    let hexColor = "#";

    for(let i=0; i<6; i++){
        hexColor += hex[randomColorUtility(hex.length)]
    }

    setColor(hexColor);

  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor])


  function handleCreateRandomRgbColor(){
      const r = randomColorUtility(256)
      const g = randomColorUtility(256)
      const b  = randomColorUtility(256)

      setColor(`rgb(${r},${g},${b})`);
  }


  return (
    
    <div className='theMain'>
      <div className='theMain-sub absolute lg:w-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
      
        <div className='theBthRow justify-center flex gap-x-6'>
          <div><button className='bg-black text-white px-10 py-2 rounded hover:bg-gray-600' onClick={() => setTypeOfColor('hex') }>Hex Color</button></div>
          <div><button className='bg-black text-white px-10 py-2 rounded hover:bg-gray-600' onClick={() => setTypeOfColor('rgb') }>RGB Color</button></div>
          
        </div>

          <div className='colortype-row flex-col justify-center lg:flex-col py-16 gap-x-8 text-center w-9/12 lg:w-full m-auto'>
            <button className='bg-black text-white px-10 py-2 rounded hover:bg-gray-600' onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Change<br/> Color</button>
            <h1 className='text-3xl pt-4 font-bold text-center'>{typeOfColor === 'hex' ? "Hex Color" : "RGB Color" } <br/> {color}</h1>
          </div>
        

        <div className='flex justify-center'>
          <div className='theBox colorBox h-40 w-2/3 rounded' style={{background:color}}></div>
        </div>

      </div>

    </div>
  )
}

export default App
