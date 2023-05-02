import { dataAtom } from "../recoil/Atoms";
import { useRecoilValue } from "recoil";
import Products from "./Products";
import OutOfStock from "./OutOfStock";

function Items() {
  const data = useRecoilValue(dataAtom);
  return (
    <div className="grid-container">
    {data && data.map((item) => {
      return item.available >0
        ? <Products item={item} key={item.id} />
        : <OutOfStock item={item} key={item.id} />;
    })}
  </div>
  );
}

export default Items;
