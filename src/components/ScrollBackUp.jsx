
import { useEffect, useState } from 'react'

function ScrollBackUp() {
    const [showButton, setShowButton] = useState(false)

    useEffect(()=>{

        const handleScroll =() => {
            if(window.scrollY >100 ) {
                setShowButton(true)
         }
         else{
            setShowButton (false)
         }
         }            
            window.addEventListener("scroll", handleScroll)

            return ()=> {
                window.removeEventListener("scroll", handleScroll)
            }
            
            
    }, [])


const handleScrollBackUp = () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

}

  return (
    (showButton && (
        <button className='scrollUpButton' onClick={handleScrollBackUp} > ▲</button>
    ))
  )
}

export default ScrollBackUp