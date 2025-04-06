"use client";
import DreamUpload from "@/components/dashboard/DreamUpload";
import { DashboardHeader } from "@/components/shared/DashboardHeader";
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
import React from "react";

function UserDashboard() {
  return (
    <div>
      <DashboardHeader
        heading="Share Your Dream"
        text="Upload a 1-minute video about your dream. Your video will be
            reviewed before being shared."
      />
      <div className="justify-center max-w-5xl mx-auto w-full py-10 space-y-8">
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
                value=""
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>

              <Textarea
                id="description"
                placeholder="Describe your dream in a few words..."
                value=""
                className="min-h-[120px]"
              />
            </div>

            <div className="border rounded-lg p-4 bg-muted/40">
              <DreamUpload
                endpoint="dreamUpload"
                value={""}
                onChange={(url) => null}
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
    </div>
  );
}

export default UserDashboard;
