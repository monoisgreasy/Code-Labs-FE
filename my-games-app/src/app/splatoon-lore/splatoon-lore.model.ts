export class Lore {
  public topic: string;
  public description: string;
  public imagePath: string;

  constructor(topic: string, description: string, imagePath: string) {
    this.topic = topic;
    this.description = description;
    this.imagePath = imagePath;
  }
}
