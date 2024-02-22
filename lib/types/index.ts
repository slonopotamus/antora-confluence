export type ConfluencePage = {
  title: string;
  content: string;
  parentPageId?: string;
};

export type ConfluenceAttachment = {
  pageId: string;
  fileName: string;
  file: Buffer;
  comment: string;
  attachmentId?: string;
};

export type PageRepresentation = {
  title: string;
  content: string;
  attachments: any[];
  hash: string;
};

export type AttachmentRepresentation = {
  fileName: string;
  filePath: string;
  comment: string;
};
