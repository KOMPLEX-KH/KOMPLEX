import type { AxiosInstance } from "axios";
import type { UploadUrlResponse } from "../types/api-types/uploadUrl";
import axios from "axios";
import { ApiWrapper } from "@core-types/api-types/apiWrapper";

export const createUploadService = (api: AxiosInstance) => {
  return {
    // UPLOAD HELPERS ==============================================================

    // Get presigned URL for file upload
    getUploadUrl: async (
      fileName: string,
      fileType: string
    ) => {
      try {
        const response = await api.post<ApiWrapper<UploadUrlResponse>>(`/upload/upload-url`, {
          fileName,
          fileType,
        }, { withCredentials: true });
        return response.data;
      } catch (error) {
        throw new Error("Failed to get upload URL");
      }
    },

    // Upload file to R2 using presigned URL
    uploadFileToR2: async (signedUrl: string, file: File) => {
      try {
        await axios.put(signedUrl, file, {
          headers: {
            "Content-Type": file.type,
          },
        });
      } catch (error) {
        throw new Error("Failed to upload file");
      }
    },

    // UPLOAD OPERATIONS ===========================================================

    // Complete file upload process (get URL + upload)
    uploadFile: async (file: File) => {
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
    uploadMultipleFiles: async (files: File[]) => {
      try {
        const uploadPromises = files.map((file) => {
          return api
            .post<ApiWrapper<UploadUrlResponse>>(`/upload/upload-url`, {
              fileName: file.name,
              fileType: file.type,
            }, { withCredentials: true })
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
        throw new Error("Failed to upload files");
      }
    },

    //   // Upload file with progress callback
    //   uploadFileWithProgress: async (
    //     file: File,
    //     onProgress?: (progress: number) => void
    //   ) => {
    //     try {
    //       const response = await api.post<ApiWrapper<UploadUrlResponse>>(`/upload/upload-url`, {
    //         fileName: file.name,
    //         fileType: file.type,
    //       }, { withCredentials: true });

    //       const { signedUrl, key } = response.data.data;

    //       await api.put(signedUrl, file, {
    //         headers: {
    //           "Content-Type": file.type,
    //         },
    //         onUploadProgress: (progressEvent) => {
    //           if (onProgress && progressEvent.total) {
    //             const progress = Math.round(
    //               (progressEvent.loaded * 100) / progressEvent.total
    //             );
    //             onProgress(progress);
    //           }
    //         },
    //       });

    //       return key;
    //     } catch (error) {
    //       throw new Error("Failed to upload file with progress");
    //     }
    //   },
    // };
  }
};
