"use client";

import EditorJS, { OutputData } from "@editorjs/editorjs";

import React, { memo, useEffect, useId, useRef } from "react";

import { EDITOR_JS_TOOLS } from "shared/configs/editor.config";

const Editor = ({
  data,
  onChange,
  placeholder,
}: {
  data?: OutputData;
  onChange: (data: any) => void;
  placeholder: string;
}) => {
  const ref = useRef<EditorJS | null>();
  const id = useId();
  const holder = `editorjs-${id}`;

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: EDITOR_JS_TOOLS,
        inlineToolbar: true,
        placeholder: placeholder,
        data: data,
        async onChange(api) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div id={holder} />;
};

export default memo(Editor);
