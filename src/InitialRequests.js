import { useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, listAll } from "firebase/storage";
import { dataAtom } from "./recoil/Atoms";
import { useSetRecoilState } from "recoil";
// import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default function InitialRequests() {
  const setData = useSetRecoilState(dataAtom);

  useEffect(() => {
    const getAllData = async () => {
      const collectionRef = collection(db, "data");
      const snapshot = await getDocs(collectionRef);
      const tempArray = [];
      for (const d of snapshot.docs) {//snapshot.forEach((d) => {
        const tempArr=await getAllPhotos(d.data().folder);
        // console.log(d.data().name);
        tempArray.push({ ...d.data(), id: d.id ,url:tempArr});
      }
      // console.log(tempArray);
      setData(tempArray);
    };
    setData(null);
    getAllData();
  }, [setData, getDocs]);

  const getAllPhotos = async (folder) => {
    const tempArr = [];
    const subStorageRef = ref(getStorage(), folder);

    const subRes = await listAll(subStorageRef);
    for (const itemRef of subRes.items) {
      const url =
        "https://firebasestorage.googleapis.com/v0/b/" +
        itemRef.bucket +
        "/o/" +
        folder +
        "%2F" +
        itemRef.name +
        "?alt=media&token=28ab3c2e-07f1-4483-8531-7c8842fec6d4";
      tempArr.push({ url });
    }
    return tempArr;
  };

  return null;
}
