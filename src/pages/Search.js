import React, { useEffect } from 'react';
import Card from '../components/Card';
import useFetch from '../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';


const Search = ({apiPath}) => {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get('q')
    const {data : movies} = useFetch(apiPath , queryTerm);
    useEffect(() =>{
        document.title = `Results for ${queryTerm} /Cinemate`;
    })
    return(
    <main>
           
            <section className='p-4'>
              <p className='text-2xl text-black dark:text-white font-bold'>{movies.length === 0 ? `Sorry no results found for '${queryTerm}'` : `Results for '${queryTerm}'`}</p>
            </section>
            <section className='max-w-7xl mx-auto p-3'>
            <div className='flex  justify-start flex-wrap '>
            {movies.map((movie) => (
                <Card key={movie.id} movie={movie}/>
            ))}

        </div>
    </section>
        </main>
    );
 };
 export default Search;