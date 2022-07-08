import React, { useState } from "react";
import './MovieRow.css';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default function MovieRow({title, items}) {

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }

        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if(window.innerWidth - listW > x){
                x = window.innerWidth - listW - 60
        }
        setScrollX(x)
    }



    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow_left" onClick={handleLeftArrow}>
                <FaAngleLeft style={{fontSize: 50}} />
            </div>
            <div className="movieRow_right" onClick={handleRightArrow}>
                <FaAngleRight style={{fontSize: 50}} />
            </div>

            <div className="movieRow_listarea">

                <div className="movieRow_list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>

                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow_item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}
                </div>

                
            </div>
            
        </div>
    )
}