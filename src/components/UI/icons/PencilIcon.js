import React from "react";

const PencilIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      fill="none"
      viewBox="0 0 11 11"
      {...props}
    >
      <path
        fill="currentColor"
        d="M.97 11a.771.771 0 0 1-.716-1.058l1.543-3.857a.776.776 0 0 1 .171-.259l5.4-5.4a.77.77 0 0 1 1.09 0l2.315 2.315a.77.77 0 0 1 0 1.09L7.687 6.917a.77.77 0 1 1-1.09-1.09l2.54-2.541-1.224-1.223-4.741 4.742-.817 2.039 2.04-.815.113-.115-.226-.226a.77.77 0 1 1 1.091-1.09l.772.771a.77.77 0 0 1 0 1.09l-.772.772a.78.78 0 0 1-.259.171l-3.857 1.543A.77.77 0 0 1 .97 11Z"
      />
    </svg>
  );
};

export default PencilIcon;