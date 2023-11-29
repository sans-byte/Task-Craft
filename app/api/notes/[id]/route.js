import app from "@app/firebase";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";

const db = getFirestore(app);

export async function GET(request, { params: { id } }) {
  try {
    const docRef = doc(db, "notes", id);
    const res = await getDoc(docRef);
    console.log("getDoc", res.data());
    return new Response(JSON.stringify(res.data()), {
      status: 200,
    });
  } catch (err) {
    return new Response(err, {
      status: 500,
    });
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const payload = await request.json();
    const docRef = doc(db, "notes", id);
    await updateDoc(docRef, payload);
    return new Response(JSON.stringify(docRef));
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify(error));
  }
}
