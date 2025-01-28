import { Outlet, Link } from "react-router-dom" //匯入Outlet
import axios from "axios"
import { useEffect,useState } from "react"
import List from "../components/List";

const api ="https://api.unsplash.com/search/photos";
const accessId = import.meta.env.VITE_REACT_APP_PICTURE;


export default function AlbumLayout(){
    const [list,setList] = useState([]);
    useEffect(()=>{
        (async()=>{
            const response = await axios.get(`${api}?client_id=${accessId}&query=animal`,);
            const { results } = response.data;
            setList(results)
        })();
    },[])
    return (
        <div className="row">
            <div className="col-4">
                左側列表
                <p>
                    <Link to="search">搜尋頁面</Link>
                </p>
                <List list={list}></List>
            </div>
            <div className="col-8">
                <Outlet context={list}/> 
                {/* context是Outlet的方法 */}
            </div>
        </div>
    )
}