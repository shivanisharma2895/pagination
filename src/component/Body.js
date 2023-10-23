import { useEffect } from "react";
import { useState } from "react";
import Table from "./Table";

const Body = () => {
    const [tablecontent, setTableContent] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        const json = await data.json();
        setTableContent(json.game_indices.version);
        console.log(json)

    }


    return (
        <div className="body-container">
            <div className="search-box">
                <input type="text" />
                <button>Search</button>
            </div>
            <div className="table">
                {tablecontent.map((tablecont) => (<Table tableData={tablecont} />))}
            </div>

        </div>
    );
}

export default Body;