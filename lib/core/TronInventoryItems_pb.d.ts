// package: protocol
// file: core/TronInventoryItems.proto

import * as jspb from "google-protobuf";

export class InventoryItems extends jspb.Message {
  getType(): number;
  setType(value: number): void;

  clearItemsList(): void;
  getItemsList(): Array<Uint8Array | string>;
  getItemsList_asU8(): Array<Uint8Array>;
  getItemsList_asB64(): Array<string>;
  setItemsList(value: Array<Uint8Array | string>): void;
  addItems(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InventoryItems.AsObject;
  static toObject(includeInstance: boolean, msg: InventoryItems): InventoryItems.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InventoryItems, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InventoryItems;
  static deserializeBinaryFromReader(message: InventoryItems, reader: jspb.BinaryReader): InventoryItems;
}

export namespace InventoryItems {
  export type AsObject = {
    type: number,
    itemsList: Array<Uint8Array | string>,
  }
}

