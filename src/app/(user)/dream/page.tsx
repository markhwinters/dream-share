"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { Video } from "lucide-react";
import VideoUpload from "@/components/UploadDropzone";

export default function DreamPage() {
  const { user } = useUser();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  if (!user) {
    return <div>Please sign in to continue.</div>;
  }

  return (
    <div className="justify-center max-w-5xl mx-auto w-full py-10 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold">Share Your Dream</h1>
        <p className="text-muted-foreground">
          Upload a 1-minute video about your dream. Your video will be reviewed
          before being shared.
        </p>
      </div>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Upload Your Dream</CardTitle>
          <CardDescription>
            Share a 1-minute video describing your dream
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Give your dream a title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your dream in a few words..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[120px]"
            />
          </div>
          <div className="border rounded-lg p-4 bg-muted/40">
            <VideoUpload
              endpoint="videoUploader"
              value={""}
              onChange={(url) => {
                //setImageUrl(url);
                //if (!url) setShowImageUpload(false);
              }}
            />
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Your video will be reviewed by our admins before being published
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
