import { IDeserializable } from 'src/app/shared/models/deserializable.model';

export class ItemGeneric implements IDeserializable {
  name: string;
  resourceURI: string;

  public deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
