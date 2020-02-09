// package: protocol
// file: core/Discover.proto

import * as jspb from "google-protobuf";

export class Endpoint extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): void;

  getPort(): number;
  setPort(value: number): void;

  getNodeid(): Uint8Array | string;
  getNodeid_asU8(): Uint8Array;
  getNodeid_asB64(): string;
  setNodeid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Endpoint.AsObject;
  static toObject(includeInstance: boolean, msg: Endpoint): Endpoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Endpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Endpoint;
  static deserializeBinaryFromReader(message: Endpoint, reader: jspb.BinaryReader): Endpoint;
}

export namespace Endpoint {
  export type AsObject = {
    address: Uint8Array | string,
    port: number,
    nodeid: Uint8Array | string,
  }
}

export class PingMessage extends jspb.Message {
  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): Endpoint | undefined;
  setFrom(value?: Endpoint): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): Endpoint | undefined;
  setTo(value?: Endpoint): void;

  getVersion(): number;
  setVersion(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PingMessage): PingMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingMessage;
  static deserializeBinaryFromReader(message: PingMessage, reader: jspb.BinaryReader): PingMessage;
}

export namespace PingMessage {
  export type AsObject = {
    from?: Endpoint.AsObject,
    to?: Endpoint.AsObject,
    version: number,
    timestamp: number,
  }
}

export class PongMessage extends jspb.Message {
  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): Endpoint | undefined;
  setFrom(value?: Endpoint): void;

  getEcho(): number;
  setEcho(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PongMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PongMessage): PongMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PongMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PongMessage;
  static deserializeBinaryFromReader(message: PongMessage, reader: jspb.BinaryReader): PongMessage;
}

export namespace PongMessage {
  export type AsObject = {
    from?: Endpoint.AsObject,
    echo: number,
    timestamp: number,
  }
}

export class FindNeighbours extends jspb.Message {
  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): Endpoint | undefined;
  setFrom(value?: Endpoint): void;

  getTargetid(): Uint8Array | string;
  getTargetid_asU8(): Uint8Array;
  getTargetid_asB64(): string;
  setTargetid(value: Uint8Array | string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindNeighbours.AsObject;
  static toObject(includeInstance: boolean, msg: FindNeighbours): FindNeighbours.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindNeighbours, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindNeighbours;
  static deserializeBinaryFromReader(message: FindNeighbours, reader: jspb.BinaryReader): FindNeighbours;
}

export namespace FindNeighbours {
  export type AsObject = {
    from?: Endpoint.AsObject,
    targetid: Uint8Array | string,
    timestamp: number,
  }
}

export class Neighbours extends jspb.Message {
  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): Endpoint | undefined;
  setFrom(value?: Endpoint): void;

  clearNeighboursList(): void;
  getNeighboursList(): Array<Endpoint>;
  setNeighboursList(value: Array<Endpoint>): void;
  addNeighbours(value?: Endpoint, index?: number): Endpoint;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Neighbours.AsObject;
  static toObject(includeInstance: boolean, msg: Neighbours): Neighbours.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Neighbours, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Neighbours;
  static deserializeBinaryFromReader(message: Neighbours, reader: jspb.BinaryReader): Neighbours;
}

export namespace Neighbours {
  export type AsObject = {
    from?: Endpoint.AsObject,
    neighboursList: Array<Endpoint.AsObject>,
    timestamp: number,
  }
}

export class BackupMessage extends jspb.Message {
  getFlag(): boolean;
  setFlag(value: boolean): void;

  getPriority(): number;
  setPriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackupMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BackupMessage): BackupMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BackupMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackupMessage;
  static deserializeBinaryFromReader(message: BackupMessage, reader: jspb.BinaryReader): BackupMessage;
}

export namespace BackupMessage {
  export type AsObject = {
    flag: boolean,
    priority: number,
  }
}

