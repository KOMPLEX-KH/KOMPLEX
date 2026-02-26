import type { AxiosInstance } from "axios";
import type { UploadUrlResponse } from "../types/uploadUrl";
import axios from "axios";

export const createUploadService = (api: AxiosInstance) => {
  return {
    // UPLOAD HELPERS ==============================================================

    // Get presigned URL for file upload
    getUploadUrl: async (
      fileName: string,
      fileType: string
    ): Promise<UploadUrlResponse> => {
      try {
        const response = await api.post<{ data: UploadUrlResponse }>(
          `/upload/upload-url`,
          {
            fileName,
            fileType,
          },
          { withCredentials: true }
        );
        return response.data.data;
      } catch (error) {
        console.error("Error getting upload URL:", error);
        throw new Error("Failed to get upload URL");
      }
    },

    // Upload file to R2 using presigned URL
    uploadFileToR2: async (signedUrl: string, file: File): Promise<void> => {
      try {
        await axios.put(signedUrl, file, {
          headers: {
            "Content-Type": file.type,
          },
        });
      } catch (error) {
        console.error("Error uploading file to R2:", error);
        throw new Error("Failed to upload file");
      }
    },

    // UPLOAD OPERATIONS ===========================================================

    // Complete file upload process (get URL + upload)
    uploadFile: async (file: File): Promise<string> => {
      try {
        const response = await api.post<{ data: UploadUrlResponse }>(
          `/upload/upload-url`,
          {
            fileName: file.name,
            fileType: file.type,
          },
          { withCredentials: true }
        );

        const { signedUrl, key } = response.data.data;

        await axios.put(signedUrl, file, {
          headers: {
            "Content-Type": file.type,
          },
        });

        return key;
      } catch (error) {
        console.error("Error uploading file:", error);
        throw new Error("Failed to upload file");
      }
    },

    // Upload file and return both key and public URL (used for profile image)
    uploadFileForProfile: async (file: File): Promise<{ key: string; publicUrl: string }> => {
      try {
        const response = await api.post<{ data: UploadUrlResponse }>(
          `/upload/upload-url`,
          {
            fileName: file.name,
            fileType: file.type,
          },
          { withCredentials: true }
        );

        const { signedUrl, key, publicUrl } = response.data.data;

        await axios.put(signedUrl, file, {
          headers: {
            "Content-Type": file.type,
          },
        });

        return { key, publicUrl };
      } catch (error) {
        console.error("Error uploading profile file:", error);
        throw new Error("Failed to upload profile image");
      }
    },

    // Upload multiple files
    uploadMultipleFiles: async (files: File[]): Promise<string[]> => {
      try {
        const uploadPromises = files.map((file) => {
          return api
            .post<{ data: UploadUrlResponse }>(
              `/upload/upload-url`,
              {
                fileName: file.name,
                fileType: file.type,
              },
              { withCredentials: true }
            )
            .then(async (response) => {
              const { signedUrl, key } = response.data.data;
              await axios.put(signedUrl, file, {
                headers: {
                  "Content-Type": file.type,
                },
              });
              return key;
            });
        });
        return await Promise.all(uploadPromises);
      } catch (error) {
        console.error("Error uploading multiple files:", error);
        throw new Error("Failed to upload files");
      }
    },

    // Upload file with progress callback
    uploadFileWithProgress: async (
      file: File,
      onProgress?: (progress: number) => void
    ): Promise<string> => {
      try {
        const response = await api.post<{ data: UploadUrlResponse }>(
          `/upload/upload-url`,
          {
            fileName: file.name,
            fileType: file.type,
          },
          { withCredentials: true }
        );

        const { signedUrl, key } = response.data.data;

        await api.put(signedUrl, file, {
          headers: {
            "Content-Type": file.type,
          },
          onUploadProgress: (progressEvent) => {
            if (onProgress && progressEvent.total) {
              const progress = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              onProgress(progress);
            }
          },
        });

        return key;
      } catch (error) {
        console.error("Error uploading file with progress:", error);
        throw new Error("Failed to upload file");
      }
    },
  };
};
