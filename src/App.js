
import './App.css';
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";
import React,{useState,useEffect} from 'react';
function App() {

  const [books,setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
   useEffect(()=>{
    async function handleSearch(query){ 
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${query}`
        );
        const data = await response.json();
        const searchResult = data.items; 
        setBooks(searchResult);
      } catch (error) {
        console.error('Error: ', error);
      }
    };
    console.log(searchQuery,"showww")
    handleSearch({searchQuery})
  },[searchQuery])
  

  useEffect(()=>{
    async function DataFetch(){
      try{
        const responseHerry = await fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter");
        const resultsHerry = await responseHerry.json();
        const responseSharelock = await fetch("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes");
        const  resultsSharelock = await responseSharelock.json()
        const AllData = resultsHerry.items.concat(resultsSharelock.items)
        // console.log(AllData)
        setBooks(()=>AllData);
      }
      catch(error){console.log("Fetching time error: ", error)}
    }
    DataFetch()
  },[]);
  
  return (
    <div className="App">   
      <Navbar onSearch={setSearchQuery}/>
      {books.length>0&&
        <BookList books={books}/>
      }
    </div>
  );
}

export default App;
