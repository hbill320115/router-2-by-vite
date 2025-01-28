import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
const api ="https://api.unsplash.com/photos";
const accessId = import.meta.env.VITE_REACT_APP_PICTURE;

export default function AlbumPhoto(){
    const {id} = useParams();
    const [photo,setPhoto] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        (async()=>{
            const response = await axios.get(`${api}/${id}?client_id=${accessId}`)
            setPhoto(response.data)
        })()
    },[id])//id改變時，會重新取得遠端資料
    return (
        <div>
            {/* 製作回到上一頁按鈕 (-1)是上一頁 */}
            <button type="button" onClick={
                ()=>{navigate(-1)}
            }>回到上一頁</button>

            這是單張圖片{id}
            <p>{photo.description}</p>
            <img src={photo?.urls?.small} className="img-fluid" alt="" />
        </div>
    )
}