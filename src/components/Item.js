import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';

const Item = () => {
    const [meal,setMeal] = useState()
    useEffect(()=>{
        const fetchMeal = async()=>{
            const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
            setMeal(res.data)
            console.log(res.data)
        }
        fetchMeal()
    },[])
    return (
       
        <Fragment>
            <div className='mt-10'>
                <div className='text-center'>
                    <h1>Search Your Food</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint sed quisquam <br /> fugiat reiciendis voluptatum ut, cupiditate pariatur nemo tempora suscipit dignissimos <br /> nihil architecto necessitatibus?</p>
                </div>
            </div>
        </Fragment>
    );
};

export default Item;