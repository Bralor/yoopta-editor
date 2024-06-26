import { markdown } from '@yoopta/exports';

export const deserializeMarkdown = (editor, markdownString) => {
    const value = markdown.deserialize(editor, markdownString);
    editor.setEditorValue(value);
    return value;
};

export const serializeMarkdown = (editor) => {
    const data = editor.getEditorValue();
    return markdown.serialize(editor, data);
};
