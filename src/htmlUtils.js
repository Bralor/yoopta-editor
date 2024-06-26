import { html } from '@yoopta/exports';

export const serializeToHTML = (editor) => {
    const data = editor.getEditorValue();
    const htmlString = html.serialize(editor, data);
    console.log('html string >> ', htmlString);
};
