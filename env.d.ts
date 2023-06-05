declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CV_PDF_FORMAT_DOWNLOAD_URL: string;
      NEXT_PUBLIC_CV_DOCX_FORMAT_DOWNLOAD_URL: string;
      NEXT_PUBLIC_CV_PDF_FILENAME: string;
      NEXT_PUBLIC_CV_DOCX_FILENAME: string;
    }
  }
}

export {};
