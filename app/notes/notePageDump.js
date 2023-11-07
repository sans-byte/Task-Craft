// "use client";

// import Image from "next/image";
// import noteBanner from "@assets/images/note-banner.jpg";
// import { BsFillPencilFill } from "react-icons/bs";
// import {
//   FaBold,
//   FaItalic,
//   FaUnderline,
//   FaStrikethrough,
//   FaListUl,
//   FaListOl,
//   FaFileImage,
// } from "react-icons/fa";
// import Input from "@components/Forms/Input";
// import Select from "@components/Forms/Select";
// import Button from "@components/Forms/Button";
// import ScrollToTopButton from "@components/ScrollToTopButton";
// import { useEffect, useRef, useState } from "react";

// const Notes = () => {
//   const create = true;
//   const list = [];
//   const textSizeList = ["Small", "Normal", "Medium", "Large", "Extra Large"];
//   const fontFamilyList = ["Sans Serif"];
//   const [note, setNote] = useState("");
//   const noteRef = useRef();
//   const boldRef = useRef();

//   const hadleBold = (e) => {
//     e.preventDefault();
//   };
//   const handleItalic = (e) => {
//     e.preventDefault();
//   };
//   const handleUnderLine = (e) => {
//     e.preventDefault();
//   };
//   const handleStrikeThrough = (e) => {
//     e.preventDefault();
//   };
//   const handleListUl = (e) => {
//     e.preventDefault();
//   };
//   const handleListOl = (e) => {
//     e.preventDefault();
//   };

//   const handleImage = (e) => {
//     try {
//       const file = e.target.files[0];
//       if (file) {
//         const reader = new FileReader();
//         reader.onload = (event) => {
//           const base64String = event.target.result;
//           const imgTag = `
//           <div>
//           <img src="${base64String}" width ="400px"
//           draggable = "true" />
//           </div>`;
//           noteRef.current.innerHTML += imgTag;
//         };
//         reader.readAsDataURL(file);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     if (note.length === 0) {
//       boldRef.current.classList.remove("note-buttons");
//     }
//   }, [note]);

//   // TODO : remove execCommand and use someThing more robust
//   const handleFormat = (
//     e,
//     format,
//     aShowDefaultUI = false,
//     aValueArgument = null
//   ) => {
//     document.execCommand(format, aShowDefaultUI, aValueArgument);
//     const selectedOl = document.querySelectorAll("ol > li");
//     selectedOl.forEach((item) => {
//       item.style.listStyleType = "decimal";
//     });
//     const selectedUl = document.querySelectorAll("ul > li");
//     selectedUl.forEach((item) => {
//       item.style.listStyleType = "circle";
//     });
//     if (note.length === 0) e.currentTarget.classList.remove("note-buttons");
//     console.log(document.queryCommandState(format));
//     console.log("clicked");
//     e.currentTarget?.tagName === "BUTTON" &&
//       e.currentTarget.classList.toggle(
//         "note-buttons",
//         document.queryCommandState(format)
//       );
//     noteRef.current.focus();
//   };

//   return (
//     <main className="w-full">
//       <section className="relative">
//         <Image src={noteBanner} alt="note-banner" />
//         <Button
//           style={
//             "absolute bottom-0 sm:text-2xl bg-gradient-to-r from-indigo-500 to-pink-500 sm:p-5 m-3 mx-5 sm:mx-12 sm:my-5 p-3"
//           }
//           text={<BsFillPencilFill />}
//         />
//       </section>
//       <section className="container mx-auto my-4">
//         <h1 className="text-5xl font-family-bebas">NOTES</h1>
//       </section>
//       <section className="container mx-auto">
//         {create ? (
//           <div className="flex flex-col">
//             <div className="flex gap-4">
//               <Input label={"Title"} placeholder={"Black Hole"} type={"text"} />
//               <Select
//                 id={"folder"}
//                 label={"Folder"}
//                 list={list}
//                 displayText={"Select Folder"}
//                 border={"border-2"}
//               />
//             </div>
//             <nav className="my-4 p-3 border-slate-200 shadow-md flex flex-row gap-3 items-center pointer-cursor">
//               <Select
//                 defaultValue={"Sans Serif"}
//                 list={fontFamilyList}
//                 onChange={(e) => console.log(e.target.value)}
//               />
//               <Select
//                 defaultValue={"Normal"}
//                 list={textSizeList}
//                 onChange={(e) => {
//                   switch (e.target.value) {
//                     case "Normal":
//                       handleFormat(e, "fontSize", false, "4");
//                       break;
//                     case "Small":
//                       handleFormat(e, "fontSize", false, "2");
//                       break;
//                     case "Medium":
//                       handleFormat(e, "fontSize", false, "5");
//                       break;
//                     case "Large":
//                       handleFormat(e, "fontSize", false, "6");
//                       break;
//                     case "Extra Large":
//                       handleFormat(e, "fontSize", false, "7");
//                       break;

//                     default:
//                       handleFormat(e, "fontSize", false, "4");
//                       break;
//                   }
//                 }}
//               />
//               <button>
//                 <span className="text-gray-200"> | </span>
//               </button>
//               <button
//                 ref={boldRef}
//                 onClick={(e) => {
//                   handleFormat(e, "bold");
//                 }}
//               >
//                 <FaBold />
//               </button>
//               <button onClick={(e) => handleFormat(e, "italic")}>
//                 <FaItalic />
//               </button>
//               <button onClick={(e) => handleFormat(e, "underline")}>
//                 <FaUnderline />
//               </button>
//               <button onClick={(e) => handleFormat(e, "strikeThrough")}>
//                 <FaStrikethrough />
//               </button>
//               <span className="text-gray-200"> | </span>
//               <button
//                 onClick={(e) => {
//                   handleFormat(e, "insertUnorderedList");
//                 }}
//               >
//                 <FaListUl />
//               </button>
//               <button
//                 onClick={(e) => {
//                   handleFormat(e, "insertOrderedList");
//                 }}
//               >
//                 <FaListOl />
//               </button>
//               <span className="text-gray-200"> | </span>
//               <label>
//                 <input
//                   type="file"
//                   className="hidden"
//                   onChange={handleImage}
//                   accept="image/jpeg,image/png"
//                 />
//                 <FaFileImage />
//               </label>
//             </nav>
//             {note}
//             <seciton className="my-4">
//               <div>
//                 <div
//                   contentEditable={true}
//                   ref={noteRef}
//                   className="w-full min-h-screen p-5 rounded-md shadow-md focus:outline-none border-transparent"
//                   onInput={(e) => setNote(e.target.innerHTML)}
//                 />
//               </div>
//             </seciton>
//             <section className="mb-4">
//               <Button text={"Save"} size={"lg"} type={"submit"} />
//               <Button
//                 text={"Cancel"}
//                 size={"lg"}
//                 type={"reset"}
//                 color={"bg-slate-500"}
//               />
//             </section>
//           </div>
//         ) : (
//           <></>
//         )}
//       </section>
//       <ScrollToTopButton />
//     </main>
//   );
// };

// export default Notes;
