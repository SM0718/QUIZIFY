import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Quiz, {catagoryLoader} from './components/quizzes/Quiz.jsx'
import Layout from './components/layout/Layout.jsx'
import Questions from './components/quizzes/Questions.jsx'
import { Provider } from 'react-redux'
import {store} from './app/store'
import Register from './components/register/Register.jsx'
import Results from './components/results/Results.jsx'
import About from './components/about/About.jsx'
import Login from './components/Login.jsx'
import Leaderboard from './components/Leaderboard.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route loader={catagoryLoader} path='quiz' element={<Quiz />} />
      <Route path='questions/:qid' element={<Questions />}/>
      <Route path='about' element={<About />}/>
      <Route path='register' element={<Register />} />
      <Route path='results' element={<Results />} />
      <Route path='login' element={<Login />} />
      <Route path='leaderboard' element={<Leaderboard />} />
    </Route>
  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
    
)
