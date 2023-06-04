declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CV_PDF_FORMAT_DOWNLOAD_URL: string;
      CV_DOCX_FORMAT_DOWNLOAD_URL: string;
      CV_PDF_FILENAME: string;
      CV_DOCX_FILENAME: string;
    }
  }
}

export {};
