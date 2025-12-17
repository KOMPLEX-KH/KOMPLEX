export interface LastAccessed {
  lastTopic: { id: number; name: string } | null;
  lastVideo: { id: number; title: string } | null;
  lastAiTab: { id: number; name: string } | null;
}