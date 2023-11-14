"use client";
import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Table from "@editorjs/table";
import LinkTool from "@editorjs/link";
import CodeTool from "@editorjs/code";
import "@styles/notes.css";

function Editor({ setData }) {
  const editorRef = useRef();
  const isReady = useRef(false); //prevent making mulitple editors
  let editor = { isReady: false };
  const initializeEditor = async () => {
    const Header = (await import("@editorjs/header")).default;
    const List = (await import("@editorjs/list")).default;
    const NestedList = (await import("@editorjs/nested-list")).default;
    const Image = (await import("@editorjs/image")).default;
    const editor = new EditorJS({
      holder: "editorjs",
      data:{},
      tools: {
        header: {
          class: Header,
          config: {
            placeholder: "Enter Header",
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 3,
          },
          inlineToolbar: true,
        },
        table: {
          class: Table,
          config: {
            rows: 2,
            cols: 3,
          },
        },
        list: {
          inlineToolbar: true,
          class: List,
          config: {
            placeholder: "Create List",
            defaultStyle: "unordered",
          },
        },
        nestedList: {
          inlineToolbar: true,
          class: NestedList,
          config: {
            placeholder: "Create nested List",
            defaultStyle: "unordered",
          },
        },
        //TODO: implement endpoint in backend which will fetch metadata like (title,image) for the provided URL
        linkTool: {
          class: LinkTool,
          config: {
            endpoint: "http://localhost:3000/api/link",
          },
        },
        // TODO:implement image upload refer: https://github.com/editor-js/image
        image: {
          class: Image,
          inlineToolbar: true,
          config: {
            endpoints: {
              byFile: "", // Your backend file uploader endpoint
              byUrl: "", // Your endpoint that provides uploading by Url
            },
            captionPlaceholder: "Add a caption",
            uploader: {
              uploadByFile: (file) => {
                // const imageRef = ref(imageDB, file.name + file.size.toString());
                // const snapshot = await uploadBytes(imageRef, file);
                // if (snapshot) {
                //   const url = await getDownloadURL(snapshot.ref);
                //   console.log(url);
                //   return {
                //     success: 1,
                //     file: {
                //       url: url,
                //     },
                //   };
                // }
                const blob = new Blob([file], { type: file.type });
                const url = URL.createObjectURL(blob);
                console.log(url);
                return {
                  success: 1,
                  file: {
                    url: url,
                  },
                };
              },
              uploadByUrl: async (url) => {
                console.log(url);
                return {
                  success: 1,
                  file: {
                    url: url,
                  },
                };
              },
            },
          },
        },
        code: {
          class: CodeTool,
          inlineToolbar: true,
          config: {
            placeholder: "Enter code",
          },
        },
      },
      onReady: () => {
        console.log("Editor is ready!");
      },

      onChange: (api, event) => {
        console.log("Editor is changed!", event);
      },

      autofocus: true,
      placeholder: "Let's write something good today!!",
      logLevel: "ERROR",
    });

    editorRef.current = editor;
    setData(editorRef.current);
  };

  useEffect(() => {
    const createEditor = async () => {
      await initializeEditor();
    };
    if (!isReady.current) {
      createEditor();
      isReady.current = true;
    }
    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="border-[1px] border-slate-300 bg-slate-100 rounded-md my-2 p-1">
        <div id="editorjs" className="flex w-full"></div>
      </div>
    </>
  );
}

export default Editor;
