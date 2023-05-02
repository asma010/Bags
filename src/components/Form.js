import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { amountAtom, selectedItemsAtom, dataAtom } from "../recoil/Atoms";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

function Form() {
  const form = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const totalPrice = location.state?.totalPrice;

  const setAmount = useSetRecoilState(amountAtom);
  const setData = useSetRecoilState(selectedItemsAtom);
  const selectedItems = useRecoilValue(selectedItemsAtom);
  const setAvailable = useRecoilState(dataAtom);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm( 
        "service_da6d8ts",
        "template_axeck4f",
        form.current,
        "3CdMUjD3JwFzfEg-Y"
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
    setAmount(0);
    setData([]);
    ordered();
    navigate("/orderSuccessPage", { state: { totalPrice } });
  }
  const ordered = async () => {
    const promises = selectedItems.map(async (d) => {
      const docRef = doc(db, "data", d.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        updateDoc(docRef, { available: docSnap.data().available - 1 });
        //we need to fix the availability in the atom
      }
    });

    await Promise.all(promises);
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Email</label>
      <input name="email" type="email" required />
      <br></br>
      <label>First name</label>
      <input name="fname" type="text" required />
      <br></br>
      <label>Last name</label>
      <input name="lname" type="text" required />
      <br></br>
      <label>Phone number</label>
      <input name="number" type="number" required />
      <br></br>
      <label>City</label>
      <input name="city" type="text" required />
      <br></br>
      <label>Street Address</label>
      <input name="street" type="text" required />
      <br></br>
      <label>Building Name| Number</label>
      <input name="buildingName" type="text" required />
      <br></br>
      <label>Floor</label>
      <input name="floor" type="number" required />
      <input name="price" value={totalPrice} hidden readOnly />
      <input value="submit" type="submit" />
    </form>
  );
}

export default Form;
