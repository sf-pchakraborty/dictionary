import { Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from './components/Header/Header';
import Definitions from "./components/Definitions/Definitions";


const App = () => {
  const [word,setWord] = useState('');
  const [meanings,setMeanings] = useState([])
  const [category,setCategory] = useState ('en');
  const API = async() =>{
    try{
   const data = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
    console.log(data.datamat);
    setMeanings(data.data)
    }
    catch(error){
      console.log(error);
    }
  }
  // console.log(meanings)

    useEffect(()=>{
     API();
    },[word, category]);
  
  return (
  
    <div style={{
      height:'100vh',
      backgroundColor:'#282c34', 
      color:'white'}}>
   
    <Container maxWidth='md' style={{
      display:'flex', 
      flexDirection:'column',
      height:'100vh',
      justifyContent:'space-evenly'
      }}>
    <Header 
    category={category} 
    setCategory={setCategory}
    word={word}
    setWord={setWord} />
    {meanings && 
    <Definitions word={word} meanings={meanings} category={category} />}
    </Container>

    </div>
  );
}

export default App;
