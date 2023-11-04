import CodeEditor from "../components/code-editor/CodeEditor.component";

const ProblemDetails = () => {
  return (
    <div className="grid grid-cols-2 bg-gray-900">
      <div className="bg-gray-800 m-4 rounded-md">TeST 1</div>
      <CodeEditor />
    </div>
  );
};

export default ProblemDetails;
