
import React, {useState} from "react";
import { createRoot } from 'react-dom/client';



const SearchBox =()=> {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState('');

    const handleInputChange = (e) =>{
        setSearchValue(e.target.value);
    }

    const handleSearch =()=>{
        const apiUrl = 'https://www.baidu.com/s?wd=${searchValue}';
        fetch(apiUrl).then(res => res.text())
        .then(data =>{
            setSearchResult(data);
        })
        .catch(err => console.log(err));
    };

    return(
        <div className="search-box">
            <input 
                type="text"
                placeholder="请输入搜索关键字"
                value={searchValue}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>搜索</button>
            <div className="search-result" dangerouslySetInnerHTML={{__html:searchResult}}></div>
        </div>
    );

};

export default SearchBox;





const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<SearchBox />);
