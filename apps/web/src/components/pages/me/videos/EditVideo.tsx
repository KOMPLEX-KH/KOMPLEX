"use client";

import { useState, useEffect } from "react";
import { Save, Upload, Trash, Play } from "lucide-react";
import type {
  VideoPost,
  ExerciseQuestion as ApiExerciseQuestion,
} from "@/types/content/videos";
import { ExerciseQuestion } from "@core-types/docs/topic";
import { ExerciseCreationBox } from "@/components/pages/docs/boxes/ExerciseCreationBox";
import BlogEditor from "@/components/common/Editor";
import {
  meVideoService,
  uploadService,
  feedVideoService,
} from "@/services/index";

interface EditVideoProps {
  video: VideoPost;
  onSave: (updatedVideo: VideoPost) => void;
  onCancel: () => void;
}

interface EditVideoFormData {
  title: string;
  description: string;
  thumbnail: string;
  exercises: ExerciseQuestionWithChoiceIds[];
}

interface ExerciseQuestionWithChoiceIds extends ExerciseQuestion {
  choiceIds?: number[];
}

export default function EditVideo({ video, onSave, onCancel }: EditVideoProps) {
  const [formData, setFormData] = useState<EditVideoFormData>({
    title: video.title,
    description: video.description,
    thumbnail: video.thumbnailUrl,
    exercises: [],
  });

  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Initialize form with existing video data
  useEffect(() => {
    setFormData({
      title: video.title,
      description: video.description,
      thumbnail: video.thumbnailUrl,
      exercises: [],
    });
    setSelectedVideo(null);
    setVideoPreview(null);
    setError(null);
    setUploadProgress(0);
  }, [video]);

  // Convert API exercise format to ExerciseQuestion format
  const convertApiExerciseToExerciseQuestion = (
    apiExercise: ApiExerciseQuestion
  ): ExerciseQuestionWithChoiceIds => {
    const correctAnswerIndex = apiExercise.choices.findIndex(
      (choice) => choice.isCorrect
    );
    return {
      id: apiExercise.id.toString(),
      question: apiExercise.title,
      options: apiExercise.choices.map((choice) => choice.text),
      correctAnswer: correctAnswerIndex,
      choiceIds: apiExercise.choices.map((choice) => choice.id), // Store original choice IDs
    };
  };

  // Initialize exercises from video data
  useEffect(() => {
    if (video.exercises && video.exercises.length > 0) {
      // Get all questions from all exercises
      const allQuestions: ApiExerciseQuestion[] = [];
      video.exercises.forEach((exercise) => {
        allQuestions.push(...exercise.questions);
      });

      if (allQuestions.length > 0) {
        // Convert API format to ExerciseQuestion format
        const convertedExercises = allQuestions.map(
          convertApiExerciseToExerciseQuestion
        );
        setFormData((prev) => ({ ...prev, exercises: convertedExercises }));
      }
    }
  }, [video.exercises]);

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("video/")) {
        setError("សូមជ្រើសរើសឯកសារវីដេអូតែប៉ុណ្ណោះ");
        return;
      }

      // Validate file size (100MB limit)
      if (file.size > 100 * 1024 * 1024) {
        setError("ទំហំឯកសារមិនអាចលើស 100MB បានទេ");
        return;
      }

      setSelectedVideo(file);
      setError(null);

      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setVideoPreview(previewUrl);

      // Auto-generate thumbnail from new video
      generateThumbnail(previewUrl);
    }
  };

  const generateThumbnail = (videoUrl: string) => {
    const video = document.createElement("video");
    video.src = videoUrl;
    video.currentTime = 1; // Seek to 1 second

    video.addEventListener("loadeddata", () => {
      const canvas = document.createElement("canvas");
      canvas.width = 320;
      canvas.height = 180;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.drawImage(video, 0, 0, 320, 180);
        const thumbnailUrl = canvas.toDataURL("image/jpeg");
        setFormData((prev) => ({ ...prev, thumbnail: thumbnailUrl }));
      }
    });
  };

  const removeVideo = () => {
    setSelectedVideo(null);
    setVideoPreview(null);
    if (videoPreview) {
      URL.revokeObjectURL(videoPreview);
    }
    // Reset thumbnail to original
    setFormData((prev) => ({ ...prev, thumbnail: video.thumbnailUrl }));
  };

  // Handle form changes
  const handleInputChange = (
    field: keyof EditVideoFormData,
    value: string | ExerciseQuestion[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle MCQ exercises
  const handleExercisesChange = (newExercises: ExerciseQuestion[]) => {
    // Convert to ExerciseQuestionWithChoiceIds, preserving choiceIds where possible
    const exercisesWithChoiceIds: ExerciseQuestionWithChoiceIds[] =
      newExercises.map((exercise, exerciseIndex) => {
        const existingExercise = formData.exercises[exerciseIndex];
        return {
          ...exercise,
          choiceIds: existingExercise?.choiceIds || undefined,
        };
      });

    setFormData((prev) => ({
      ...prev,
      exercises: exercisesWithChoiceIds,
    }));
  };

  // Convert base64 thumbnail to blob for upload
  const base64ToBlob = (base64: string): Blob => {
    const byteString = atob(base64.split(",")[1]);
    const mimeString = base64.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  };

  // Convert ExerciseQuestion to the backend format
  const convertExercisesToBackendFormat = (
    exercises: ExerciseQuestionWithChoiceIds[]
  ) => {
    return exercises.map((exercise) => ({
      id: exercise.id !== "new" ? exercise.id : undefined, // Only include ID if it's not a new exercise
      title: String(exercise.question),
      choices: exercise.options.map((option, index) => ({
        id: exercise.choiceIds?.[index]
          ? exercise.choiceIds[index].toString()
          : undefined,
        text: String(option),
        isCorrect: index === exercise.correctAnswer,
      })),
    }));
  };

  const handleSave = async () => {
    if (!formData.title.trim() || !formData.description.trim()) {
      alert("សូមបំពេញចំណងជើងនិងការពិពណ៌នា");
      return;
    }

    try {
      setIsSaving(true);
      setUploadProgress(0);

      let videoKey = video.videoUrlForDeletion;
      let thumbnailKey = video.thumbnailUrlForDeletion;

      // If new video is selected, upload it
      if (selectedVideo) {
        setUploadProgress(20);
        videoKey = await uploadService.uploadFile(selectedVideo);
        setUploadProgress(40);
      }

      // If thumbnail changed, upload new thumbnail
      if (formData.thumbnail !== video.thumbnailUrl) {
        setUploadProgress(60);

        const thumbnailBlob = base64ToBlob(formData.thumbnail);
        const thumbnailFile = new File(
          [thumbnailBlob],
          `thumbnail_${Date.now()}.jpg`,
          {
            type: "image/jpeg",
          }
        );

        thumbnailKey = await uploadService.uploadFile(thumbnailFile);
        setUploadProgress(80);
      }

      // Update video data and exercises using the new API
      const updatePayload: {
        title: string;
        description: string;
        videoKey?: string;
        thumbnailKey?: string;
        questions?: {
          id?: string;
          title: string;
          choices: {
            id?: string;
            text: string;
            isCorrect: boolean;
          }[];
        }[];
      } = {
        title: formData.title,
        description: formData.description,
      };

      if (videoKey) {
        updatePayload.videoKey = videoKey;
      }

      if (thumbnailKey) {
        updatePayload.thumbnailKey = thumbnailKey;
      }

      if (formData.exercises.length > 0) {
        updatePayload.questions = convertExercisesToBackendFormat(
          formData.exercises
        );
      }

      await meVideoService.updateVideo(video.id.toString(), updatePayload);

      setUploadProgress(100);

      // Fetch updated video data
      const updatedVideo = await feedVideoService.getVideoById(
        video.id.toString()
      );
      onSave(updatedVideo);

      // Reset edit form states
      setSelectedVideo(null);
      setVideoPreview(null);
      if (videoPreview) {
        URL.revokeObjectURL(videoPreview);
      }
    } catch (error) {
      console.error("Error updating video:", error);
      alert("មានបញ្ហាកើតឡើងពេលរក្សាទុកវីដេអូ សូមព្យាយាមម្តងទៀត");
    } finally {
      setIsSaving(false);
      setUploadProgress(0);
    }
  };

  const resetEditForm = () => {
    setFormData({
      title: video.title,
      description: video.description,
      thumbnail: video.thumbnailUrl,
      exercises: [],
    });
    setSelectedVideo(null);
    setVideoPreview(null);
    setError(null);
    setUploadProgress(0);
    if (videoPreview) {
      URL.revokeObjectURL(videoPreview);
    }
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const isFormValid = () => {
    const hasValidTitle = formData.title.trim();
    const hasValidDescription = formData.description.trim();

    // If no exercises, that's fine - just need title and description
    if (formData.exercises.length === 0) {
      return hasValidTitle && hasValidDescription;
    }

    // If exercises exist, validate them
    const hasValidExercises = formData.exercises.every((ex) => {
      const questionText = typeof ex.question === "string" ? ex.question : "";
      const optionsText = ex.options.map((opt) =>
        typeof opt === "string" ? opt : ""
      );
      const correctAnswer =
        typeof ex.correctAnswer === "number" ? ex.correctAnswer : 0;

      return (
        questionText.trim() !== "" &&
        optionsText.every((opt) => opt.trim() !== "") &&
        correctAnswer >= 0 &&
        correctAnswer < ex.options.length
      );
    });

    return hasValidTitle && hasValidDescription && hasValidExercises;
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm p-8">
      <div className="space-y-8">
        {/* Title Input */}
        <div>
          <label className="block text-sm font-medium mb-3 text-gray-700">
            ចំណងជើង
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            placeholder="សរសេរចំណងជើងវីដេអូរបស់អ្នក..."
            className="w-full px-4 py-3 bg-white rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 border border-gray-200"
          />
        </div>

        {/* Video Replacement Section */}
        <div>
          <label className="block text-sm font-medium mb-4 text-gray-700">
            ជំនួសវីដេអូ
          </label>

          {/* Current Video Display */}
          <div className="mb-6 p-4 bg-gray-50 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Play className="w-5 h-5 text-indigo-600" />
              <span className="font-medium text-gray-900">
                វីដេអូបច្ចុប្បន្ន
              </span>
            </div>
            <div className="relative">
              <video
                src={video.videoUrl}
                poster={video.thumbnailUrl}
                className="w-full aspect-video object-cover rounded-3xl"
                controls
              />
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                {formatDuration(video.duration)}
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              ទំហំ: {video.title} • រយៈពេល: {formatDuration(video.duration)}
            </p>
          </div>

          {/* New Video Upload */}
          <div className="border-2 border-dashed border-gray-300 rounded-3xl p-8 text-center hover:border-indigo-400 transition-colors duration-200">
            {!selectedVideo ? (
              <div>
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">អូសវីដេអូឬជ្រើសរើសឯកសារ</p>
                <p className="text-sm text-gray-500 mb-4">
                  គាំទ្រទម្រង់ MP4, MOV, AVI • ទំហំអតិបរមា 100MB
                </p>
                <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-3xl hover:bg-indigo-700 transition-colors duration-200">
                  <Upload className="w-4 h-4 mr-2" />
                  ជ្រើសរើសវីដេអូ
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    className="hidden"
                  />
                </label>
              </div>
            ) : (
              <div>
                <div className="relative mb-4">
                  <video
                    src={videoPreview || ""}
                    className="w-full aspect-video object-cover rounded-3xl"
                    controls
                  />
                  <button
                    onClick={removeVideo}
                    className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  ឯកសារថ្មី: {selectedVideo.name}
                </p>
                <p className="text-sm text-gray-500">
                  ទំហំ: {(selectedVideo.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            )}
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-full">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-3 text-gray-700">
            មាតិកា
          </label>
          <BlogEditor
            value={formData.description}
            onChange={(value) => handleInputChange("description", value)}
            height="500px"
            toolbarOptions={[
              ["heading", "bold", "italic"],
              ["ul"],
              ["table", "link"],
            ]}
            showMathButton={true}
            compact={false}
          />
        </div>

        {/* MCQ Exercises */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">លំហាត់</h3>
            <span className="text-sm text-gray-500">(ជម្រើស)</span>
          </div>
          <ExerciseCreationBox
            questions={formData.exercises}
            onQuestionsChange={handleExercisesChange}
          />
        </div>

        {/* Upload Progress */}
        {isSaving && (
          <div className="p-6 bg-gray-50 rounded-full">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-700">
                កំពុងរក្សាទុក...
              </span>
              <span className="text-sm text-gray-500 font-medium">
                {uploadProgress}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
          <button
            onClick={() => {
              resetEditForm();
              onCancel();
            }}
            className="px-6 py-2 bg-gray-500 text-white rounded-full transition-colors duration-200 hover:bg-gray-600 font-medium"
          >
            បោះបង់
          </button>
          <button
            onClick={handleSave}
            disabled={!isFormValid() || isSaving}
            className="px-6 py-2 bg-indigo-500 text-white rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center gap-2"
          >
            {isSaving ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                កំពុងរក្សាទុក...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                រក្សាទុក
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
