import { useMemo } from 'react';
import { html } from '@yoopta/exports';
import { markdown } from '@yoopta/exports';
import { marked } from 'marked';
import { createYooptaEditor } from '@yoopta/editor';
//import { deserializeHTML } from '../html/deserialize';
import { readFile, writeFile } from 'fs/promises';


const Editor = () => {
    const editor = useMemo(() => createYooptaEditor(), [])
}

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

const myDeserializeHTML = (htmlContent) => {
    const yooptaObject = html.deserialize(Editor, htmlContent)
    console.log(yooptaObject)
    return yooptaObject;
}

export const deserializeMarkdown = (markdownString) => {
    const html = marked.parse(markdownString, { gfm: true, breaks: true, pedantic: false });
    console.log(html)
    return html;
};

const processMDFiles = async () => {
    const filePath = 'testMd.md';
    const newFilePath = 'test_file.md';
    try {
        const contentMD = await readMDContent(filePath);
        const deserializedHtml = deserializeMarkdown(contentMD)
        //const deserializedYoopta = deserializeHTML(deserializedHtml)
        await writeMDContent(newFilePath, deserializedHtml);
    } catch (error) {
        console.error('Test failed:', error);
    }
}

processMDFiles();
