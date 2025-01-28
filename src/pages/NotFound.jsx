import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function NotFound(){
    const navigate = useNavigate(); //轉往哪裡
    // 設定2秒鐘後轉為首頁
    useEffect(()=>{
        setTimeout(() => {
            navigate("/home")
        }, 2000);
    },[])

    return (
        <>
            這是不存在的頁面
        </>
    )
}