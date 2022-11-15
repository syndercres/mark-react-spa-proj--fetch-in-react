import { useState } from "react";


interface Dog {
  message: string;
  status: string;
}
//{"message":"https:\/\/images.dog.ceo\/breeds\/terrier-westhighland\/n02098286_577.jpg","status":"success"} response

function App() {

  const [manyDogUrl,setManyDogUrl] = useState<string[]>([]);
  const addDog = (newDog: string) => {
    setManyDogUrl(prev => [...prev,newDog]);
  }
  
  
  
  const [dogUrl,setDogUrl] = useState<string>();

  const handleGetDog = async () => {
    const response = await fetch(
      "https://dog.ceo/api/breeds/image/random"

    );
    const returnedObject: Dog = await response.json();
    setDogUrl(returnedObject.message);
    addDog(returnedObject.message);
  };

 
    return (
      <div>
        <h1>Joke app</h1>
        <details>{ dogUrl &&
          <img src={dogUrl} alt="dog" />
}
          </details>

        <details>
          {
            manyDogUrl.map(doggy => {
              return(
              <div>
                <img src={doggy} alt="dog" />
              </div>
            )})
          }
        </details>
        <hr />
        <button onClick={handleGetDog}>Get another joke</button>
      </div>
    );
  } 


export default App;
