import { useState } from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'


function App() {
  const data = [{ image: "https://i1.sndcdn.com/artworks-hHRNAPyoL1gTPNV7-mUwz9A-t500x500.jpg", name: "Shape of you", Artist: "Ed Sheeran", added: false },
  { image: "https://images.unsplash.com/photo-1711645372528-cddb2c6eb565?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "One Love", Artist: "Subh", added: false },
  { image: "https://images.unsplash.com/photo-1710598586974-a2acd673c04e?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Flowers", Artist: "Miley Cyrus", added: false },
  { image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSqoSEuV0lmNrEVLwJ6q75DaOWQjorN0b2G_BLJr4OScCX0YSZ", name: "Company", Artist: "Justin Bieber", added: false },
  ]
  const [val, setval] = useState(data)
  const handleClick = (curindex) => {
    setval((prev) => {
      return prev.map((item, index) => {
        if (index == curindex) {
          return { ...item, added: !item.added }
        }
        return item
      })
    })
  }

  return (
    <div className='w-full h-screen  bg-slate-300'>

      <Navbar data={val} />
      <div className='flex gap-10 flex-wrap justify-center items-center'>
        {
          val.map((obj, index) => (
            <Card handleClick={handleClick} key={index} index={index} data={obj} />
          ))
        }


      </div>
    </div>
  )
}

export default App
