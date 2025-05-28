import { useEffect, useState } from 'react'

const Preloader = () => {
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = 'Cake Crazy'
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Typing animation
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        // Start fade out after typing is complete
        setTimeout(() => {
          setIsVisible(false)
        }, 500)
      }
    }, 150)

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-500">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-500 font-display">
          {text}
          <span className={`inline-block w-[4px] h-8 md:h-12 bg-primary-500 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
        </h1>
      </div>
    </div>
  )
}

export default Preloader