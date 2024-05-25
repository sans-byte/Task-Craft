import {
  getFirestore,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
} from "firebase/firestore";
import app from "@app/firebase";
import { doc } from "firebase/firestore";

const db = getFirestore(app);

export async function GET(request, response) {
  try {
    const querySnapshot = await getDocs(collection(db, "folders"));
    const data = querySnapshot.docs.map((doc) => doc.data());
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export async function POST(request, response) {
  try {
    const data = await request.json();
    const docRef = await addDoc(collection(db, "folders"), {
      ...data,
    });
    console.log("Document written with ID: ", docRef.id);
    return new Response(JSON.stringify(docRef.id));
  } catch (e) {
    console.error("Error adding document: ", e);
    return new Response(JSON.stringify(e));
  }
}

// export async function PUT(request, response) {
//   try {
//     const noteId = await request.json();
//     const docRef = doc(db, "users");
//     console.log("this put mapping logged");
//     await updateDoc(docRef, {
//       first: "Sanskar",
//       last: "Lovelace",
//       born: 1815,
//     });
//     return new Response(JSON.stringify(docRef));
//   } catch (error) {
//     console.error(error);
//     return new Response(JSON.stringify(error));
//   }
// }

// export async function DELETE(request, response) {
//   try {
//     const docRef = doc(db, "users", "boe8pzXNzu14cRkV5a7b");
//     await deleteDoc(docRef);
//     return new Response(JSON.stringify(docRef));
//   } catch (error) {
//     console.error(error);
//     return new Response(JSON.stringify(error));
//   }
// }
