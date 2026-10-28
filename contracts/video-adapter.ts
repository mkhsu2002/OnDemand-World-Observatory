/** Design-only interface. No provider calls or hardware implementation. */
export type VideoJobState = "queued" | "generating" | "ready" | "failed";
export interface ApprovedVideoRequest {
  requestId: string;
  prompt: string;
  referenceAssetIds: string[];
  rightsApprovalId: string;
}
export interface VideoJob {
  jobId: string;
  state: VideoJobState;
  clipUrl?: string;
  modelVersion?: string;
  error?: string;
}
export interface VideoAdapter {
  submit(request: ApprovedVideoRequest): Promise<VideoJob>;
  poll(jobId: string): Promise<VideoJob>;
}
