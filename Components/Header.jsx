import React,{useState} from 'react'

export default function Header(props) {
  const[isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
  if(isDark){
    document.body.classList.add('dark')
  }else{
    document.body.classList.remove('dark')
  }
  return (
    <header >
        <div className="container">
            <div className="head" >
                <h1 className="heading"><a href="/2.Rest Countries/index.html">Where is world?</a></h1>
                <h3 className="dark-mode" onClick={() =>{
                  setIsDark(!isDark)
                  localStorage.setItem('isDarkMode', !isDark)
                }}><i className={`fa-solid fa-${isDark? 'sun': 'moon' }`}></i>&nbsp;&nbsp;{ isDark? 'Light': 'Dark' } Mode</h3>
            </div>
        </div>
    </header>
  )
}
