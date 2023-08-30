import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { amountAtom, selectedItemsAtom } from "../recoil/Atoms";

function useAddToCartHandler() {
  const [amount, setAmount] = useRecoilState(amountAtom);
  const setSelectedItems = useSetRecoilState(selectedItemsAtom);
  const selectedItems = useRecoilValue(selectedItemsAtom);

  const addToCart = (item) => {
    const itemExists = selectedItems.some(
      (selectedItem) => selectedItem.id === item.id
    );
    if (!itemExists) {
      setAmount(amount + 1);
      setSelectedItems([
        ...selectedItems,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          url: item.url,
        },
      ]);
    }else{
      alert('Please note that each item can only be added to your cart once.');
    }
  };

  return addToCart;
}

export default useAddToCartHandler;
