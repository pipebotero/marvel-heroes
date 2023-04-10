import { IDeserializable } from 'src/app/shared/models/deserializable.model';
import { CharacterElementGeneric } from './character-element-generic.model';

export class Character implements IDeserializable {
  id: number;
  name: string;
  description: string;
  resourceURI: string;
  comics: any;
  events: any;
  series: any;
  stories: any;
  thumbnail: any;
  urls: any;
  modified: string;

  public deserialize(input: any): this {
    Object.assign(this, input);
    this.comics =  new CharacterElementGeneric().deserialize(input.comics);
    this.events =  new CharacterElementGeneric().deserialize(input.events);
    this.series =  new CharacterElementGeneric().deserialize(input.series);
    this.stories =  new CharacterElementGeneric().deserialize(input.stories);
    return this;
  }

  public getThumbnail(): string {
    return `${this.thumbnail.path}.${this.thumbnail.extension}`;
  }
}