import React from "react"
import { ThemeProvider } from "styled-components"
import useTheme from "./useTheme"
import ToggleMode from "./ToggleMode"
import GlobalStyle from "./GlobalStyle"
import logo from "./logo.svg"
import "./App.css"

function App() {
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <ToggleMode />
          </header>
          <main className='App-body'>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              laborum voluptatem consequatur. Rerum saepe, voluptatem itaque
              pariatur incidunt nam esse soluta totam maxime, inventore aliquid
              numquam expedita quas debitis quae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              rem quis, voluptatibus repudiandae officia, cum, porro veritatis
              voluptatem ipsa nihil explicabo delectus facilis. Ab animi
              tempora, quasi ipsum ratione consequuntur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, consequatur nulla odit quaerat cum doloremque cumque
              est repudiandae debitis, libero ducimus aut voluptatibus nihil
              eos. Laboriosam iste ipsam quidem magnam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, illo accusantium? Eaque, sed accusamus sint tempora
              nisi, laudantium corporis, explicabo voluptatibus numquam porro
              voluptas perferendis. Ducimus placeat quod labore veniam!
            </p>
          </main>
        </div>
      </>
    </ThemeProvider>
  )
}

export default App
