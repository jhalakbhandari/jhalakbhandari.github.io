import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useState } from "react";
import ResumePDF from "../Resume.pdf";
function Resume() {
  const [numPage, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPage }) {
    setNumPages(numPage);
    setPageNumber(1);
  }
  return (
    <div>
      <Document file={ResumePDF} onLoadSuccess={onDocumentLoadSuccess}>
        <Page height="600" pageNumber={pageNumber} />
      </Document>
    </div>
  );
}

export default Resume;
