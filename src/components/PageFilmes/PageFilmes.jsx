import React, { useEffect, useState } from 'react';
import Tmdb from '../../Tmdb';
import MovieRow from './MovieRow';
import FeaturedMovie from './FeaturedMovie';
import Header from './Header';
import Footer from './Footer';

function PageFilmes(){

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() =>{
        const loadlAll = async () => {
        let list = await Tmdb.getHomeList();
        setMovieList(list)

        let originals = list.filter(i =>i.slug === 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
        let chosen = originals[0].items.results[randomChosen]
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
        setFeaturedData(chosenInfo);
        }

        loadlAll();
    }, []);


    useEffect(() =>{
        const scrollListener = () => {
            if(window.scrollY > 10) {
            setBlackHeader(true);
            }else {
            setBlackHeader(false)
            }
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
        window.removeEventListener('scroll', scrollListener);
        }

    }, []);

    return(
        <div className='page'>
        <Header black={blackHeader}/>

        {featuredData && 
        <FeaturedMovie item={featuredData} />
        }

        <section className='lists'>
        {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
        </section>

        <Footer />
            {movieList.length <= 0 && 
            <div className='loading'>
            <img src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif' alt='Carregando' />
            </div>
            
            }
        
        </div> 
    )

}

export default PageFilmes;