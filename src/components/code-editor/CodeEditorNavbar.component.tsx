import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";

import { Language } from "./CodeEditor.component";

interface ICodeEditorNavbar {
  language: Language;
  setLanguage: (value: Language) => void;
}

const supportedLanguages: Language[] = [
  {
    display: "Python",
    value: "python",
  },
  {
    display: "C++",
    value: "cpp",
  },
  {
    display: "Javascript",
    value: "javascript",
  },
];

const CodeEditorNavbar: React.FC<ICodeEditorNavbar> = ({
  language,
  setLanguage,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-900">
      <div className="relative flex flex-col items-center w-[98px]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full text-white flex items-center gap-2"
        >
          {language.display} <BiChevronDown />
        </button>
        {isOpen && (
          <div
            id="dropdownUsers"
            className="absolute z-10 top-7 bg-white rounded-lg shadow w-40 dark:bg-gray-700"
          >
            <ul
              className="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownUsersButton"
            >
              {supportedLanguages.map((item) => (
                <li>
                  <a
                    href="#"
                    onClick={() => {
                      setLanguage(item);
                      setIsOpen(!isOpen);
                    }}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeEditorNavbar;
