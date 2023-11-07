"use client";
import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Table from "@editorjs/table";
import LinkTool from "@editorjs/link";
import CodeTool from "@editorjs/code";
import "@styles/notes.css";

function Editor({ setData }) {
  const ref = useRef();
  const isReady = useRef(false); //prevent making mulitple editors
  let editor = { isReady: false };
  const initializeEditor = async () => {
    const Header = (await import("@editorjs/header")).default;
    const List = (await import("@editorjs/list")).default;
    const NestedList = (await import("@editorjs/nested-list")).default;
    const Image = (await import("@editorjs/image")).default;
    const editor = new EditorJS({
      holder: "editorjs",
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
              uploadByFile: () => {
                console.log("upload by file");
              },
              uploadByUrl: () => {
                console.log("upload by url");
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

    ref.current = editor;
    setData(ref.current);
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
      if (ref.current) {
        ref.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="border-2 rounded-md my-2 p-1">
        <div id="editorjs" className="flex w-full"></div>
      </div>
    </>
  );
}

export default Editor;
