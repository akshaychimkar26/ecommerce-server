import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Search() {
    const location = useLocation();
    const navigate = useNavigate()
    const searchResults = location.state && location.state.searchResults;
    console.log(searchResults);
    const handleimg = (d) => {
        navigate(`/${d.category}/${d.id}`, { state: d })
    }
    return (
        <div>
            <div ><Link className='back' to='/'>Back</Link></div>
            <div className='flex1'>
                {searchResults && searchResults.map(d => (
                    <div className='box'>
                        <img className='img1' onClick={() => handleimg(d)} src={d.img} />
                        <p className='p1'>{d.name}</p >
                        <p className='p2'>price:{d.price}</p>
                        <p className='p3'>MRP:{d.MRP}</p>
                        <p className='p1'>discount:{d.discount}%</p>
                    </div>
                    // Adjust the property names based on your response.data structure
                ))}

            </div>
        </div>
    );
}

export default Search;