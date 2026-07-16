export interface UploadImageOptions {
  folder?: string;
  fileName?: string;
}

export interface ImageKitAuthResponse {
  publicKey: string;
  signature: string;
  token: string;
  expire: number;
}

export interface UploadResult {
  url: string;
  fileId: string | null;
}