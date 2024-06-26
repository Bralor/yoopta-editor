import React, { useMemo, useState } from 'react';
import YooptaEditor, { createYooptaEditor } from '@yoopta/editor';
import Paragraph from '@yoopta/paragraph';
import Blockquote from '@yoopta/blockquote';
import { deserializeMarkdown } from './markdownUtils';
import { serializeToHTML } from './htmlUtils';
import './index.css';


const plugins = [Paragraph, Blockquote];

const Editor = () => {
    const editor = useMemo(() => createYooptaEditor(), []);
    const [htmlOutput, setHtmlOutput] = useState('');


    const handleSerializerHTMLString = () => {
        const markdownString = '# Lesson UUID: 486e19b1-577e-465f-b72f-57913364ea7a\n## Widget Type: markdown\n\nProměnná (angl. *variable*) je nějaký popisek, nebo také odkaz.'

        // Deserializujeme markdown obsah
        const deserializedContent = deserializeMarkdown(editor, markdownString);
        editor.setEditorValue(deserializedContent);

        // Serializujeme deserializovaný obsah jako HTML string
        const htmlString = serializeToHTML(editor);
        setHtmlOutput(htmlString)
    }

    return (
        <div>
            <button onClick={handleSerializerHTMLString}>
                Deserialize from markdown to content
            </button>

            <YooptaEditor editor={editor} plugins={plugins} />
        {htmlOutput && (
            <div>
                <h2>HTML Output</h2>
                <pre>{htmlOutput}</pre>
            </div>
            )}
        </div>
    );
};

export default Editor;
