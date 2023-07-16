import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/index.ts'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Layout } from './components/Sections/index.ts'
import theme from './components/theme/index.ts'
import { ThemeProvider } from "@mui/material/styles";;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
