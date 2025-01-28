import { useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import ReactLoading from 'react-loading';
const promiseSetTimeout = (status) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve("成功");
      } else {
        reject("失敗");
      }
    }, 2000);
  });
};

export default function LoadingPage() {
  const [loadingState, setLoadingState] = useState(false);
  const [loadingState2, setLoadingState2] = useState(false);
  const [loadingState3, setLoadingState3] = useState(false);
  const [loadingState4, setLoadingState4] = useState([]);
  const fullLoading = async () => {
    setLoadingState(true); // 1.進入非同步前，加入loading
    try {
      await promiseSetTimeout(true);
    } catch (error) {
      alert("讀取失敗");
    } finally {
      setLoadingState(false); // 2.不管成功or失敗，皆關閉loading
    }
  };
  const fullLoading2 = async () => {
    setLoadingState2(true); // 1.進入非同步前，加入loading
    try {
      await promiseSetTimeout(true);
    } catch (error) {
      alert("讀取失敗");
    } finally {
        setLoadingState2(false); // 2.不管成功or失敗，皆關閉loading
    }
  };
  const fullLoading3 = async () => {
    setLoadingState3(true); // 1.進入非同步前，加入loading
    try {
      await promiseSetTimeout(true);
    } catch (error) {
      alert("讀取失敗");
    } finally {
        setLoadingState3(false); // 2.不管成功or失敗，皆關閉loading
    }
  };

  const fullLoading4 = async (btn) => {

    setLoadingState4((preState)=>{
        return [...preState,btn]
    })
        
    try {
      await promiseSetTimeout(true);
    } catch (error) {
      alert("讀取失敗");
    } finally{
        setLoadingState4((preState2)=>{

            return preState2.filter(item=> item !== btn )
        })
    }
  };

  const btnArray = ["按鈕1","按鈕2","按鈕3"]
  return (
    <>
      <h1>讀取效果</h1>

      {/* react-loading  */}
      <button type="button" onClick={fullLoading} className="btn btn-info">
      react-loading
      </button>
      {loadingState && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255,255,255,0.5)",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            zIndex:9999,
          }}
        >
          <ReactLoading
            type={"spinningBubbles"}
            color={"#000000"}
            height={100}
            width={100}
          />
        </div>
      )}

      {/* Spinners */}
      <button type="button" onClick={fullLoading2} className="btn btn-warning">
      Spinners
      </button>
      {loadingState2 && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255,255,255,0.5)",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            zIndex:9999,
          }}
        >
            <PacmanLoader
            color="#d9ee40"
            margin={0}
            size={100}
            />
        </div>
      )}

      {/* bootstrap */}
      <button type="button" onClick={fullLoading3} className="btn btn-primary" disabled={loadingState3}>
         bootstrap讀取
        {loadingState3 && (<span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>)}
      </button>

      {/* 多個按鈕讀取 */}
      {btnArray.map((item)=>{
        return (<div key={item}>
            <button className="btn btn-danger" onClick={()=>fullLoading4(item)} disabled={loadingState4.includes(item)}>
                {item}
                {loadingState4.includes(item) && (<span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>)}
            </button>
        </div>)
      })}
    </>
  );
}
