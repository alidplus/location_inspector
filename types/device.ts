export interface IDevice {
  id: string,
  title: string,
  thumbUrl: string,
  memory: number,
  offer: number,
  unlocked: boolean,
  quality: "flawless" | "good"
}