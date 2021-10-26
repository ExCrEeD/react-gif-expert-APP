import React,{useState} from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertAPP = () => {

    //const categories = ['one punch','one piece','full metal'];
    const [categories, setCategories] = useState(['one piece']);

    // const handleAdd =() =>{
    //     setCategories([...categories,'HunterxHunter']); 
    // }

    return (
        <>
            <h2>GifExpertAPP</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            <ol>
                {
                    categories.map(category =>
                        <GifGrid key={category} category = {category}/>)
                }
            </ol>
        </>
    )
}
