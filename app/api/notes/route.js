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
    const querySnapshot = await getDocs(collection(db, "notes"));
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
    const data = await request.json();
    const docRef = await addDoc(collection(db, "notes"), {
      ...data,
    });
    console.log("Document written with ID: ", docRef.id);
    return new Response(JSON.stringify(docRef.id));
  } catch (e) {
    console.error("Error adding document: ", e);
    return new Response(JSON.stringify(e));
  }
}

export async function PUT(request, response) {
  try {
    const noteId = await request.json();
    const docRef = doc(db, "notes");
    console.log(docRef);
    // console.log("this put mapping logged");
    // await updateDoc(docRef, {
    //   first: "Sanskar",
    //   last: "Lovelace",
    //   born: 1815,
    // });
    // return new Response(JSON.stringify(docRef));
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
