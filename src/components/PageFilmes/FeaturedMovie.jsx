import React from "react";
import './FeaturedMovie.css';

function FeaturedMovie({item}){

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    let description = item.overview;
    if(description.length > 200) {
        description = description.substring(0, 200)+ '...';
    }



    return(
        <div>
            <section className="featured" style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}>
                <div className="featured_vertical">
                    <div className="featured_horizontal">
                        <div className="featured_name">{item.original_name}</div>
                        <div className="featured_info">
                            <div className="featured_points">{item.vote_average} pontos</div>
                            <div className="featured_year">{firstDate.getFullYear()}</div>
                            <div className="featured_seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1? 's' : ''}</div>
                        </div>
                        <div className="featured_description">{description}</div>
                        <div className="featured_buttons">
                            <a href='#' className="btn-watch"> ► Assistir</a>
                            <a href='#' className="btn-list">+ Minha lista</a>
                        </div>
                        <div className="featured_genres">
                            <strong>Gêneros:</strong> {genres.join(', ')}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturedMovie;