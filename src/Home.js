import React, { useEffect, useState } from 'react';

const Home = () => {
    const [card, setCard] = useState([])


    const getData = async () => {
        await fetch("https://co8xhcw1m7.execute-api.us-east-1.amazonaws.com/default/getItems")
        .then((response) => response.json())
        .then((data) => {
            
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getData()
    }, []);
    


    return (

        <div>
            This is the home page!
        </div>
    )
}

export default Home;