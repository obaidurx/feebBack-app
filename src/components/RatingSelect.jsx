import React,{useState} from 'react';

const RatingSelect = ({select}) => {
    const [selected,setSelected]=useState(2)
    const handleChange=(e)=>{
        setSelected(+e.target.value);
        select(+e.target.value)
    }
    return (
        <div className='rating'>
            <ul>
                <li>
                <input 
                type="radio"
                id='num1'
                name='rating'
                value='1'
                onChange={handleChange}
                checked={selected===1}
                />
                <label htmlFor="num1">1</label>
                </li>
                <li>
                <input 
                type="radio"
                id='num2'
                name='rating'
                value='2'
                onChange={handleChange}
                checked={selected===2}
                />
                <label htmlFor="num2">2</label>
                </li>
            </ul>
        </div>
    );
};

export default RatingSelect;