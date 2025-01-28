import { useForm } from "react-hook-form";

export default function ListPage() {
  const {
    register,
    handleSubmit,  
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "預設email",
      city: "",
    },
    mode: "onChange", //表單驗證時機
  });
  const startSubmit = (data) => {
    console.log(data);
  };
  const city = ["台北", "台中", "高雄"];
  return (
    <form action="" onSubmit={handleSubmit(startSubmit)}>
      <label htmlFor="email">帳號</label>
      <input
        id="email"
        type="email"
        {...register("email", {
          required:"email為必填",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Email 格式不正確",
          },
        })}
      />
      <div className="text-danger">{errors.email ? errors.email.message : ""}</div>
        <label htmlFor="password">密碼</label>
        <input id="password" type="password" {...register("password",{
            required:true,
            maxLength:{
                value:10,
                message:"不得超過10"
            },
            minLength:{
                value:6,
                message:"不得小於6"
            }
        })}/>
        <p className="text-danger">{errors.password?errors.password.message:""}</p>



      <label htmlFor="area">地點</label>
      <select id="area" {...register("city")}>
        <option value="" disabled>
          請選擇
        </option>
        {city.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      {/* 單選 Checkbox */}
      <input id="single" type="checkbox" {...register("isSingle")} />
      <label htmlFor="single">是否單身</label>
      <hr />
      {/* 多選 Checkbox */}
      <input id="food1" type="checkbox" {...register("food")} value="鍋燒意麵"/>
      <label htmlFor="food1">鍋燒意麵</label>
      <input id="food2" type="checkbox" {...register("food")} value="炒麵" />
      <label htmlFor="food2">炒麵</label>
      <input id="food3" type="checkbox" {...register("food")} value="漢堡" />
      <label htmlFor="food3">漢堡</label>
<hr />
      {/* 單選 Radio */}
      <label htmlFor="man">男</label>
      <input id="man" type="radio" {...register("gender")} value="男" />
      <label htmlFor="woman">女</label>
      <input id="woman" type="radio" {...register("gender")} value="女" />
      <hr />
      <button type="submit">提交</button>
    </form>
  );
}
