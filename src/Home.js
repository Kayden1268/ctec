import React, { useEffect, useState } from 'react';

const Home = () => {
    const [cards, setCards] = useState([])


    const getData = async () => {
        await fetch("https://co8xhcw1m7.execute-api.us-east-1.amazonaws.com/default/getItems")
        .then((response) => response.json())
        .then((data) => {
            setCards(data)
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getData()
    }, []);
    


    return (
      // <div>
      //     This is the home page!
      // </div>
      <>
        {cards.map((item) => (
          <>
            <div key={item.ID} className="card">
              <h2>{item.hotelname}</h2>
              <p>
                Country: {item.Country}, {item.City}
              </p>
            </div>
          </>
        ))}
      </>
    );
}

export default Home;