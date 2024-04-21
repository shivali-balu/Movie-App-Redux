import React from 'react';
import { BrowserRouter as Router , Route , Switch , Routes } from 'react-router-dom';
import './App.scss'; 
import Header from './components/Header/Header';  
import Footer from './components/Footer/Footer'; 
import Home from './components/Home/Home' ;  
import MovieDetail from './components/MovieDetail/MovieDetail' ;  
import PageNotFound from './components/PageNotFound/PageNotFound' ; 
import ShowDetail from './components/ShowDetail/ShowDetail';



function App() {
  return (
    <div className='App'>
      <Router>  
      <Header/>  
        <div className='container'>
        <Routes>
        <Route path='/' exact element = {<Home/>}/>  
        <Route path='/movie/:id' element = {<MovieDetail/>}/>  
        <Route path='/show/:id' element = {<ShowDetail/>}/>  
        <Route path= "*" element = {<PageNotFound/>}/>  
        </Routes> 
        </div>
        <Footer/> 
      </Router>
    </div>
  );
}

export default App; 
