import axios from "axios";
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"; //useSearchParams
import List from "../components/List";

const api ="https://api.unsplash.com/search/photos";
const accessId = import.meta.env.VITE_REACT_APP_PICTURE;

export default function AlbumSearch (){
    const [search ,setSearch] = useState('');
    const [list,setList] = useState([]);
    const [searchParams,setSearchParams] = useSearchParams();
    // 傳遞網址參數給search
    useEffect(()=>{
        setSearch(searchParams.get('query')); //搜尋結果網址參數存到search結果
    },[searchParams])
    // 網址跟著搜尋結果做變化
    useEffect(()=>{
        if(search !== ""){
            (async()=>{
                const response = await axios.get(`${api}?client_id=${accessId}&query=${search}`,);
                const { results } = response.data;
                setList(results)
            })();
        }
    },[search])//search變動會跟著更新
    return (<>
    搜尋頁面 {search}
    {/* 搜尋框 */}
    <input type="text" className="form-control" defaultValue={search}
    onKeyUp={(e)=>{
        if(e.code==="Enter" || e.code==="NumpadEnter"){
            setSearchParams({query:e.target.value}) //搜尋結果帶到網址上參數
        }
    }}/>   
    {/* 顯示搜尋結果圖片 */}
    <List list={list}/>
    </>)
}