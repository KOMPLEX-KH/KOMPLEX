export interface UploadUrlResponse {
  signedUrl: string; //used for uploading file to R2
  key: string; //used for deletion and database reference
  publicUrl: string; //used to render in img tag for profile image
}
