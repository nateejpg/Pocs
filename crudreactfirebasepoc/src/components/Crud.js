import React, {useState, useEffect} from 'react'

const Crud = () => {

    const [quotes, setQuotes] = useState([]);


    useEffect(() => {

        const fetchData = async () => {

            try {

                 const response = await fetch("https://quotesapi-c04u.onrender.com/");         
                  const data = await response.json();

                  const singleQuoteIndex = Math.floor(Math.random() * data.length)
                  const singleQuote = data[singleQuoteIndex];

                  setQuotes(singleQuote);

                  console.log("Selected Index", singleQuoteIndex);

            } catch(error){

                console.log("Couldnt load the API", error);

            }
        }

        fetchData();

    },[])

  return (
    <div className='component'>
        <div className='inputContainer'>
            <h1>Crud</h1>
            <div className='inputBx'>
               <input type='text' placeholder='enter your text'/>
               <button>New Task</button>
            </div>
        </div>
        <div className='tasksContainer'>TEST</div>
            <div className='quotesContainer'>
                <div className='quotesBx'>
                    {quotes && <h1>{quotes.text}</h1>}
                    {quotes && <p>{quotes.author}</p>}
                 </div>
            </div>
    </div>
  )
}

export default Crud