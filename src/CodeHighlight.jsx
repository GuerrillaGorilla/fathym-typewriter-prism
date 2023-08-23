import React from "react";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";

const CodeHighlight = ({ language, code }) => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${language}`}>
        {code.trim()}
      </code>
    </pre>
  );
};

export default CodeHighlight;