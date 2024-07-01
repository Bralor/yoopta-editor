import { useMemo } from 'react';
import { html } from '@yoopta/exports';
import { marked } from 'marked';
import { createYooptaEditor } from '@yoopta/editor';
import { readFile, writeFile } from 'fs/promises';
import { DOMParser } from 'xmldom';


//const Editor = () => {
//    const editor = useMemo(() => createYooptaEditor(), []);
//}

const readMDContent = async (filePath) => {
    try {
        const fileContent = await readFile(filePath, 'utf8');
        console.log(fileContent);
        return fileContent;
    } catch (error) {
        console.error('Error reading the file:', error);
    }
}

const writeMDContent = async(filePath, fileContent) => {
        try {
            await writeFile(filePath, fileContent, 'utf8');
            console.log('Content written to', filePath);
        } catch (error) {
            console.error('Error writing the file:', error);
            throw error;
        }
    }

const deserializeMarkdown = (markdownString) => {
    const html = marked.parse(markdownString, { gfm: true, breaks: true, pedantic: false });
    console.log(html)
    return html;
};

//const deserializeHTML = (editor, currentHtml) => {
//    const yooptaContent = html.deserialize(editor, currentHtml);
//    console.log(yooptaContent)
//    return yooptaContent;
//}

const processMDFiles = async () => {
    const filePath = 'attempt_1.md';
    const newFilePath = 'test_file.html';
    try {
        const contentMD = await readMDContent(filePath);
        const deserializedHtml = deserializeMarkdown(contentMD)
        // Issue #1: const deserializedYoopta = deserializeHTML(Editor, deserializedHtml)
        await writeMDContent(newFilePath, deserializedHtml);
    } catch (error) {
        console.error('Test failed:', error);
    }
}

processMDFiles();
