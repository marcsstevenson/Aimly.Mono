// The purpose of this hook to provide a default TipTap editor

import React from 'react';
import { useEditor, EditorContent, Editor, Content } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';

const useDefaultEditor = (content: string | null | undefined) => {
  return useEditor({
    extensions: [
      StarterKit,
      Image,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: content,
  });
};

export default useDefaultEditor;
