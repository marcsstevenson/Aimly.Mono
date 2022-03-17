import React, { useCallback } from 'react';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { classNames } from 'utils/classNames';
// import OrderedList from '@tiptap/extension-ordered-list';
// import BulletList from '@tiptap/extension-bullet-list';
// import ListItem from '@tiptap/extension-list-item';
// import './ProseMirror.scss';
import Image from '@tiptap/extension-image';
import Dropcursor from '@tiptap/extension-dropcursor';

interface EditorProps {
  editor: Editor;
}

const MenuBar = ({ editor }: EditorProps) => {
  const getButtonCss = useCallback((isActive: boolean) => {
    const bgActive = 'bg-white bg-secondary-600 hover:bg-secondary-700 text-white';
    const bgInActive =
      'bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 hover:dark:bg-gray-900 dark:text-gray-200';
    return (
      (isActive ? bgActive : bgInActive) +
      ' focus:ring-secondary-500 mr-1 inline-flex justify-center rounded-md border border-gray-300 py-1 px-2 text-sm font-small text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2'
    );
  }, []);

  if (!editor) {
    return null;
  }
  const addImage = () => {
    const url = window.prompt('Paste your image URL here:');

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <>
      <button onClick={addImage} className={classNames(getButtonCss(false))}>
        add image from URL
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={classNames(getButtonCss(editor.isActive('bold')))}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={classNames(getButtonCss(editor.isActive('italic')))}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={classNames(getButtonCss(editor.isActive('strike')))}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={classNames(getButtonCss(editor.isActive('code')))}
      >
        code
      </button>
      <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className={classNames(getButtonCss(false))}
      >
        clear marks
      </button>
      <button
        onClick={() => editor.chain().focus().clearNodes().run()}
        className={classNames(getButtonCss(false))}
      >
        clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={classNames(getButtonCss(editor.isActive('paragraph')))}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={classNames(getButtonCss(editor.isActive('heading', { level: 1 })))}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={classNames(getButtonCss(editor.isActive('heading', { level: 2 })))}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={classNames(getButtonCss(editor.isActive('heading', { level: 3 })))}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={classNames(getButtonCss(editor.isActive('heading', { level: 4 })))}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={classNames(getButtonCss(editor.isActive('heading', { level: 5 })))}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={classNames(getButtonCss(editor.isActive('heading', { level: 6 })))}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={classNames(getButtonCss(editor.isActive('bulletList')))}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={classNames(getButtonCss(editor.isActive('orderedList')))}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={classNames(getButtonCss(editor.isActive('codeBlock')))}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={classNames(getButtonCss(editor.isActive('blockquote')))}
      >
        blockquote
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={classNames(getButtonCss(false))}
      >
        horizontal rule
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className={classNames(getButtonCss(false))}
      >
        hard break
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        className={classNames(getButtonCss(false))}
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        className={classNames(getButtonCss(false))}
      >
        redo
      </button>
    </>
  );
};

const ContentEdit = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: `<h1>Aimly Content Editor</h1>
    <img src="https://aimlyappcatallyzeprod.blob.core.windows.net/images/Aimly-Static.svg?sp=r&amp;st=2022-03-16T22:38:44Z&amp;se=3022-03-17T06:38:44Z&amp;sv=2020-08-04&amp;sr=b&amp;sig=cLF64H6P5NhMPeqkmmepTZKT0glzKzgdXio6tlZBHgo%3D">
    <ol>
    <li>
    <p>Hello World!</p>
    </li>
    <li>
    <p>Hello World!</p>
    </li>
    </ol>
    <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />
    <img src="https://source.unsplash.com/K9QHL52rE2k/800x400" />`,
    // editable: false,
  });

  if (!editor) return <></>;

  const runTest = () => {
    if (!editor) return;

    console.log('getJSON', editor.getHTML());
  };

  return (
    <div className="m-4 space-y-4">
      <div>
        <button type="button" onClick={runTest} className="form-button-flat ml-0">
          Test
        </button>
      </div>
      <MenuBar editor={editor} />
      {/* border-2 p-2 */}
      <EditorContent editor={editor} className="prose dark:prose-invert" />
    </div>
  );
};

export default ContentEdit;
