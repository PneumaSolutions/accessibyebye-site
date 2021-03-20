import React from "react"
import ReactDOM from "react-dom"

import "normalize.css/normalize.css"
import "./site.css"

import TopBlockedDomains from "./TopBlockedDomains"

ReactDOM.render(
  <TopBlockedDomains />,
  document.getElementById("top-blocked-domains")
)
