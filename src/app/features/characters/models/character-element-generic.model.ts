import { IDeserializable } from 'src/app/shared/models/deserializable.model';
import { ItemGeneric } from './item-generic.model';

export class CharacterElementGeneric implements IDeserializable {
  available: number;
  collectionURI: string;
  items: ItemGeneric[];
  returned: number;

  public deserialize(input: any): this {
    Object.assign(this, input);
    this.items = input.items.map(item => new ItemGeneric().deserialize(item));
    return this;
  }
}