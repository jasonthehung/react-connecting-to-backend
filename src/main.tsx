import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import AppFetchData from "./AppFetchData.tsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AppFetchData />
    </React.StrictMode>
)
