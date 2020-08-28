import React, {useContext} from 'react'
import {ThemeContext, UserContext} from "../Context";

export default function UseContextPage() {
  const {themeColor} = useContext(ThemeContext)
  const {name} = useContext(UserContext)
  return (
    <div>
      <div className="border">
        <h3 className={themeColor}>UseContextPage, {name}</h3>
      </div>
    </div>
  )
}
