import { Editor } from "@monaco-editor/react";
import "./CodeEditor.styles.scss";

import { useState } from "react";
import CodeEditorNavbar from "./CodeEditorNavbar.component";

export interface Language {
  display: string;
  value: string;
}

const defaultLanguage = {
  display: "Javascript",
  value: "javascript",
};

const CodeEditor = () => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  return (
    <div className="bg-gray-800 m-4 rounded-md">
      <div className="rounded-md ">
        <div className="py-2 px-4">
          <CodeEditorNavbar setLanguage={setLanguage} language={language} />
        </div>
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          theme="vs-dark"
          language={language.value}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
