"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UploadButton } from "@/lib/uploadthing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, Video } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(100),
  description: z.string().max(500).optional(),
  videoUrl: z.string().url("Please upload a video"),
  thumbnailUrl: z.string().url().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function UploadForm() {
  const router = useRouter();
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      videoUrl: "",
      thumbnailUrl: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      //await createVideo(data);
      toast.success("Dream video uploaded successfully!");
      reset();
      setVideoUrl("");
      setThumbnailUrl("");
      router.push("/dashboard");
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Failed to upload your dream video");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Share Your Dream</h2>
        <p className="text-muted-foreground">
          Upload a 1-minute video about your dream. Your video will be reviewed
          before being published.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Dream Title</Label>
          <Input
            id="title"
            placeholder="Enter a title for your dream"
            {...register("title")}
          />
          {errors.title && (
            <p className="text-destructive text-sm">{errors.title.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Dream Description (optional)</Label>
          <Textarea
            id="description"
            placeholder="Describe your dream in a few words..."
            rows={3}
            {...register("description")}
          />
          {errors.description && (
            <p className="text-destructive text-sm">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="space-y-4">
          <Label>Upload Your Dream Video (max 1 minute)</Label>

          {videoUrl ? (
            <div className="space-y-2">
              video preview
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setVideoUrl("");
                  setValue("videoUrl", "");
                }}
              >
                Remove Video
              </Button>
            </div>
          ) : (
            <div className="rounded-lg border p-8 text-center">
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  if (res && res.length > 0) {
                    const url = res[0].url;
                    setVideoUrl(url);
                    setValue("videoUrl", url);
                    toast.success("Video uploaded successfully!");
                  }
                }}
                onUploadError={(error) => {
                  toast.error(`Upload failed: ${error.message}`);
                }}
                content={{
                  button({ ready }) {
                    return ready ? "Upload Dream Video" : "Loading...";
                  },
                  allowedContent: "Videos up to 512MB, max 1 minute",
                }}
              />
            </div>
          )}
          {errors.videoUrl && (
            <p className="text-destructive text-sm">
              {errors.videoUrl.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Upload Thumbnail (optional)</Label>
          {thumbnailUrl ? (
            <div className="space-y-2">
              <img
                src={thumbnailUrl}
                alt="Thumbnail"
                className="h-auto w-full max-w-md rounded-md"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setThumbnailUrl("");
                  setValue("thumbnailUrl", "");
                }}
              >
                Remove Thumbnail
              </Button>
            </div>
          ) : (
            <div className="rounded-lg border p-8 text-center">
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  if (res && res.length > 0) {
                    const url = res[0].url;
                    setThumbnailUrl(url);
                    setValue("thumbnailUrl", url);
                    toast.success("Thumbnail uploaded successfully!");
                  }
                }}
                onUploadError={(error) => {
                  toast.error(`Upload failed: ${error.message}`);
                }}
                content={{
                  button({ ready }) {
                    return ready ? "Upload Thumbnail" : "Loading...";
                  },
                  allowedContent: "Images up to 4MB (JPG, PNG)",
                }}
              />
            </div>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting || !videoUrl}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Uploading Dream...
            </>
          ) : (
            "Submit Dream Video"
          )}
        </Button>
      </form>
    </div>
  );
}
