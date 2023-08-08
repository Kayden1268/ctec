import React, { useEffect, useState } from 'react';

const Home = () => {
    const [cards, setCards] = useState([])


    const getData = async () => {
        await fetch("https://co8xhcw1m7.execute-api.us-east-1.amazonaws.com/default/getItems")
        .then((response) => response.json())
        .then((data) => {
            setCards(data)
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
        <div>
            {cards.map((item, index) => (
                // <div>
            ))}
        </div>
        </>
        
        
    )
}

export default Home;