import React from "react"
import ReactDOM from "react-dom"

import "normalize.css/normalize.css"
import "./site.css"

import TopBlockedDomains from "./TopBlockedDomains"
import TopBlockedProviders from "./TopBlockedProviders"

ReactDOM.render(
  <TopBlockedDomains />,
  document.getElementById("top-blocked-domains")
)

ReactDOM.render(
  <TopBlockedProviders />,
  document.getElementById("top-blocked-providers")
)
