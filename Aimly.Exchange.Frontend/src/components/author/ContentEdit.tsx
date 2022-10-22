import React, { useEffect } from 'react';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import MenuBar from 'components/author/MenuBar';
import { classNames } from 'utils/classNames';
import useDefaultEditor from './useDefaultEditor';

interface Props {
  content?: string;
  onChange?: (content: string) => void;
  required?: boolean;
  inputEditor?: Editor | undefined | null;
}

const ContentEdit = ({ content, onChange, required, inputEditor }: Props) => {
  if (required === undefined) {
    required = false;
  }

  const [valid, setValid] = React.useState(true);
  const [lastValue, setLastValue] = React.useState(null);

  const defaultEditor = useDefaultEditor(content);

  const editor = inputEditor ?? defaultEditor;

  // let filterTimeout: any;
  // useEffect(() => {
  //   // this will clear filterTimeout when component unmounts
  //   return () => {
  //     clearTimeout(filterTimeout);
  //   };
  // }, []);

  if (!editor) return <></>;

  // editor.on('blur', ({ editor }) => {
  //   if (!onChange) return;

  //   const html = editor.getHTML();

  //   // if (lastValue == html) {
  //   //   return;
  //   // }

  //   // Update lastValue
  //   // setLastValue(lastValue);
  //   setUpdates(updates + 1);

  //   // // clearTimeout(filterTimeout);
  //   // // // The content has changed.
  //   // // filterTimeout = setTimeout(() => {
  //   // // Is the input valid?
  //   setValid(!required || editor.getText().length > 0);

  //   // // Bubble the value back up
  //   onChange(editor.getHTML());
  //   // }, 100);
  // });

  // Add required check and error class if required and empty

  return (
    <>
      <MenuBar editor={editor} />
      {/* border-2 p-2 */}
      <EditorContent
        editor={editor}
        // onChange={handleChange}

        className={classNames(
          'prose dark:prose-invert max-w-none border',
          valid
            ? 'border-gray-300 text-gray-600 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white'
            : 'error border-validation-500 bg-validation-50 focus:ring-validation-500 dark:bg-gray-900 dark:text-white'
        )}
        // className="prose dark:prose-invert max-w-none border border-gray-300 text-gray-600 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
        //className="prose dark:prose-invert max-w-none"
      />
    </>
  );
};

export default ContentEdit;
