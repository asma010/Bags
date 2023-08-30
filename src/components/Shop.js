import { dataAtom } from "../recoil/Atoms";
import { useRecoilValue } from "recoil";
import Products from "./Products";
import OutOfStock from "./OutOfStock";
import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";

function Items() {
  const [isLoading, setIsLoading] = useState(true);
  const data = useRecoilValue(dataAtom);
  useEffect(() => {
    if (data)
      setIsLoading(false)
  }, [data])
  if(isLoading)
  return <LoadingPage/>
  return (
    <div className="grid-container">
      {data && data.map((item) => {
        return item.available > 0
          ? <Products item={item} key={item.id} />
          : <OutOfStock item={item} key={item.id} />;
      })}
    </div>
  );
}

export default Items;
