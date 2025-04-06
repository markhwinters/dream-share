"use client";
import { UploadDropzone } from "@/lib/uploadthing";
import { XIcon } from "lucide-react";

interface DreamUploadProps {
  onChange: (url: string) => void;
  value: string;
  endpoint: "dreamUpload";
}

function DreamUpload({ endpoint, onChange, value }: DreamUploadProps) {
  return (
    <div>
      <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].ufsUrl);
        }}
        onUploadError={(error: Error) => {
          console.log(error);
        }}
      />
    </div>
  );
}

export default DreamUpload;
