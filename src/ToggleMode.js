import React from "react"
import { ThemeConsumer } from "styled-components"
import Switch from "react-switch"

export default function ToggleMode() {
  return (
    <ThemeConsumer>
      {(theme) => {
        return (
          <Switch
            onChange={() =>
              theme.setTheme(
                theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
              )
            }
            checked={theme.mode === "dark"}
            checkedIcon={
              <span role='img' aria-label=''>
                🌜
              </span>
            }
            uncheckedIcon={
              <span role='img' aria-label=''>
                &nbsp;🌞
              </span>
            }
            className='react-switch'
          />
        )
      }}
    </ThemeConsumer>
  )
}
