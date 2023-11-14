import {
  getFirestore,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
} from "firebase/firestore";
import app from "../../firebase";
import { doc } from "firebase/firestore";

const db = getFirestore(app);

export async function GET(request, response) {
  try {
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((element) => {
      console.log(element.id);
    });
    return new Response(JSON.stringify(querySnapshot.docs), {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify(error));
  }
}

export async function POST(request, response) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
    return new Response(JSON.stringify(docRef), {
      headers: new Headers(),
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function PUT(request, response) {
  try {
    const docRef = doc(db, "users", "dKrqY5zWAlEalGQdRFio");
    await updateDoc(docRef, {
      first: "Sanskar",
      last: "Lovelace",
      born: 1815,
    });
    return new Response(JSON.stringify(docRef));
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify(error));
  }
}

export async function DELETE(request, response) {
  try {
    const docRef = doc(db, "users", "boe8pzXNzu14cRkV5a7b");
    await deleteDoc(docRef);
    return new Response(JSON.stringify(docRef));
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify(error));
  }
}
