import React, { useState, useRef, useEffect } from "react";
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './styles.css';

const Toolbar = ({ onBold, onItalic, onLink, onQuote }) => (
    <div className="toolbar">
        <button onClick={onBold}>Negrito</button>
        <button onClick={onItalic}>Itálico</button>
        <button onClick={onLink}>Link</button>
        <button onClick={onQuote}>Citação</button>
    </div>
);

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('');
    const [html, setHtml] = useState('');
    const textAreaRef = useRef(null);

    useEffect(() => {
        const rawHTML = marked(markdown);
        const sanitizedHTML = DOMPurify.sanitize(rawHTML);
        setHtml(sanitizedHTML);
    }, [markdown]);

    const handleBold = () => {
        setMarkdown(markdown + '****');
    };

    const handleItalic = () => {
        setMarkdown(markdown + '**');
    };

    const handleLink = () => {
        setMarkdown(markdown + '[link](url)');
    };

    const handleQuote = () => {
        const quoteMarkdown = `<blockquote>
        <p>Testes</p>
        <footer><strong>Autor</strong>, <em>Título</em></footer>
    </blockquote>`;

        setMarkdown(markdown + '\n\n' + quoteMarkdown);
        textAreaRef.current.focus();
    };

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    }

    return (
        <div className="markdown-editor">
            <div className="container">
                <div className="textareaContainer">
                    <Toolbar
                        onBold={handleBold}
                        onItalic={handleItalic}
                        onLink={handleLink}
                        onQuote={handleQuote}
                    />
                    <textarea
                        ref={textAreaRef}
                        value={markdown}
                        onChange={handleChange}
                        placeholder="Digite aqui..."
                    />
                </div>
                <div
                    className="preview"
                    dangerouslySetInnerHTML={{ __html: html }}
                >
                </div>
            </div>
        </div>
    );
}

export default MarkdownEditor;
