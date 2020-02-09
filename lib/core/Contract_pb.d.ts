// package: protocol
// file: core/Contract.proto

import * as jspb from "google-protobuf";
import * as core_Tron_pb from "../core/Tron_pb";

export class AccountCreateContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getAccountAddress(): Uint8Array | string;
  getAccountAddress_asU8(): Uint8Array;
  getAccountAddress_asB64(): string;
  setAccountAddress(value: Uint8Array | string): void;

  getType(): core_Tron_pb.AccountTypeMap[keyof core_Tron_pb.AccountTypeMap];
  setType(value: core_Tron_pb.AccountTypeMap[keyof core_Tron_pb.AccountTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountCreateContract.AsObject;
  static toObject(includeInstance: boolean, msg: AccountCreateContract): AccountCreateContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountCreateContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountCreateContract;
  static deserializeBinaryFromReader(message: AccountCreateContract, reader: jspb.BinaryReader): AccountCreateContract;
}

export namespace AccountCreateContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    accountAddress: Uint8Array | string,
    type: core_Tron_pb.AccountTypeMap[keyof core_Tron_pb.AccountTypeMap],
  }
}

export class AccountUpdateContract extends jspb.Message {
  getAccountName(): Uint8Array | string;
  getAccountName_asU8(): Uint8Array;
  getAccountName_asB64(): string;
  setAccountName(value: Uint8Array | string): void;

  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountUpdateContract.AsObject;
  static toObject(includeInstance: boolean, msg: AccountUpdateContract): AccountUpdateContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountUpdateContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountUpdateContract;
  static deserializeBinaryFromReader(message: AccountUpdateContract, reader: jspb.BinaryReader): AccountUpdateContract;
}

export namespace AccountUpdateContract {
  export type AsObject = {
    accountName: Uint8Array | string,
    ownerAddress: Uint8Array | string,
  }
}

export class SetAccountIdContract extends jspb.Message {
  getAccountId(): Uint8Array | string;
  getAccountId_asU8(): Uint8Array;
  getAccountId_asB64(): string;
  setAccountId(value: Uint8Array | string): void;

  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAccountIdContract.AsObject;
  static toObject(includeInstance: boolean, msg: SetAccountIdContract): SetAccountIdContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetAccountIdContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAccountIdContract;
  static deserializeBinaryFromReader(message: SetAccountIdContract, reader: jspb.BinaryReader): SetAccountIdContract;
}

export namespace SetAccountIdContract {
  export type AsObject = {
    accountId: Uint8Array | string,
    ownerAddress: Uint8Array | string,
  }
}

export class TransferContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getToAddress(): Uint8Array | string;
  getToAddress_asU8(): Uint8Array;
  getToAddress_asB64(): string;
  setToAddress(value: Uint8Array | string): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferContract.AsObject;
  static toObject(includeInstance: boolean, msg: TransferContract): TransferContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferContract;
  static deserializeBinaryFromReader(message: TransferContract, reader: jspb.BinaryReader): TransferContract;
}

export namespace TransferContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    toAddress: Uint8Array | string,
    amount: number,
  }
}

export class TransferAssetContract extends jspb.Message {
  getAssetName(): Uint8Array | string;
  getAssetName_asU8(): Uint8Array;
  getAssetName_asB64(): string;
  setAssetName(value: Uint8Array | string): void;

  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getToAddress(): Uint8Array | string;
  getToAddress_asU8(): Uint8Array;
  getToAddress_asB64(): string;
  setToAddress(value: Uint8Array | string): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferAssetContract.AsObject;
  static toObject(includeInstance: boolean, msg: TransferAssetContract): TransferAssetContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferAssetContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferAssetContract;
  static deserializeBinaryFromReader(message: TransferAssetContract, reader: jspb.BinaryReader): TransferAssetContract;
}

export namespace TransferAssetContract {
  export type AsObject = {
    assetName: Uint8Array | string,
    ownerAddress: Uint8Array | string,
    toAddress: Uint8Array | string,
    amount: number,
  }
}

export class VoteAssetContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  clearVoteAddressList(): void;
  getVoteAddressList(): Array<Uint8Array | string>;
  getVoteAddressList_asU8(): Array<Uint8Array>;
  getVoteAddressList_asB64(): Array<string>;
  setVoteAddressList(value: Array<Uint8Array | string>): void;
  addVoteAddress(value: Uint8Array | string, index?: number): Uint8Array | string;

  getSupport(): boolean;
  setSupport(value: boolean): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoteAssetContract.AsObject;
  static toObject(includeInstance: boolean, msg: VoteAssetContract): VoteAssetContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VoteAssetContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoteAssetContract;
  static deserializeBinaryFromReader(message: VoteAssetContract, reader: jspb.BinaryReader): VoteAssetContract;
}

export namespace VoteAssetContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    voteAddressList: Array<Uint8Array | string>,
    support: boolean,
    count: number,
  }
}

export class VoteWitnessContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  clearVotesList(): void;
  getVotesList(): Array<VoteWitnessContract.Vote>;
  setVotesList(value: Array<VoteWitnessContract.Vote>): void;
  addVotes(value?: VoteWitnessContract.Vote, index?: number): VoteWitnessContract.Vote;

  getSupport(): boolean;
  setSupport(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoteWitnessContract.AsObject;
  static toObject(includeInstance: boolean, msg: VoteWitnessContract): VoteWitnessContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VoteWitnessContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoteWitnessContract;
  static deserializeBinaryFromReader(message: VoteWitnessContract, reader: jspb.BinaryReader): VoteWitnessContract;
}

export namespace VoteWitnessContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    votesList: Array<VoteWitnessContract.Vote.AsObject>,
    support: boolean,
  }

  export class Vote extends jspb.Message {
    getVoteAddress(): Uint8Array | string;
    getVoteAddress_asU8(): Uint8Array;
    getVoteAddress_asB64(): string;
    setVoteAddress(value: Uint8Array | string): void;

    getVoteCount(): number;
    setVoteCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Vote.AsObject;
    static toObject(includeInstance: boolean, msg: Vote): Vote.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Vote, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Vote;
    static deserializeBinaryFromReader(message: Vote, reader: jspb.BinaryReader): Vote;
  }

  export namespace Vote {
    export type AsObject = {
      voteAddress: Uint8Array | string,
      voteCount: number,
    }
  }
}

export class UpdateSettingContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getContractAddress(): Uint8Array | string;
  getContractAddress_asU8(): Uint8Array;
  getContractAddress_asB64(): string;
  setContractAddress(value: Uint8Array | string): void;

  getConsumeUserResourcePercent(): number;
  setConsumeUserResourcePercent(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSettingContract.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSettingContract): UpdateSettingContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSettingContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSettingContract;
  static deserializeBinaryFromReader(message: UpdateSettingContract, reader: jspb.BinaryReader): UpdateSettingContract;
}

export namespace UpdateSettingContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    contractAddress: Uint8Array | string,
    consumeUserResourcePercent: number,
  }
}

export class UpdateEnergyLimitContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getContractAddress(): Uint8Array | string;
  getContractAddress_asU8(): Uint8Array;
  getContractAddress_asB64(): string;
  setContractAddress(value: Uint8Array | string): void;

  getOriginEnergyLimit(): number;
  setOriginEnergyLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEnergyLimitContract.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEnergyLimitContract): UpdateEnergyLimitContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEnergyLimitContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEnergyLimitContract;
  static deserializeBinaryFromReader(message: UpdateEnergyLimitContract, reader: jspb.BinaryReader): UpdateEnergyLimitContract;
}

export namespace UpdateEnergyLimitContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    contractAddress: Uint8Array | string,
    originEnergyLimit: number,
  }
}

export class ClearABIContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getContractAddress(): Uint8Array | string;
  getContractAddress_asU8(): Uint8Array;
  getContractAddress_asB64(): string;
  setContractAddress(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearABIContract.AsObject;
  static toObject(includeInstance: boolean, msg: ClearABIContract): ClearABIContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClearABIContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearABIContract;
  static deserializeBinaryFromReader(message: ClearABIContract, reader: jspb.BinaryReader): ClearABIContract;
}

export namespace ClearABIContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    contractAddress: Uint8Array | string,
  }
}

export class WitnessCreateContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getUrl(): Uint8Array | string;
  getUrl_asU8(): Uint8Array;
  getUrl_asB64(): string;
  setUrl(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WitnessCreateContract.AsObject;
  static toObject(includeInstance: boolean, msg: WitnessCreateContract): WitnessCreateContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WitnessCreateContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WitnessCreateContract;
  static deserializeBinaryFromReader(message: WitnessCreateContract, reader: jspb.BinaryReader): WitnessCreateContract;
}

export namespace WitnessCreateContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    url: Uint8Array | string,
  }
}

export class WitnessUpdateContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getUpdateUrl(): Uint8Array | string;
  getUpdateUrl_asU8(): Uint8Array;
  getUpdateUrl_asB64(): string;
  setUpdateUrl(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WitnessUpdateContract.AsObject;
  static toObject(includeInstance: boolean, msg: WitnessUpdateContract): WitnessUpdateContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WitnessUpdateContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WitnessUpdateContract;
  static deserializeBinaryFromReader(message: WitnessUpdateContract, reader: jspb.BinaryReader): WitnessUpdateContract;
}

export namespace WitnessUpdateContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    updateUrl: Uint8Array | string,
  }
}

export class AssetIssueContract extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getName(): Uint8Array | string;
  getName_asU8(): Uint8Array;
  getName_asB64(): string;
  setName(value: Uint8Array | string): void;

  getAbbr(): Uint8Array | string;
  getAbbr_asU8(): Uint8Array;
  getAbbr_asB64(): string;
  setAbbr(value: Uint8Array | string): void;

  getTotalSupply(): number;
  setTotalSupply(value: number): void;

  clearFrozenSupplyList(): void;
  getFrozenSupplyList(): Array<AssetIssueContract.FrozenSupply>;
  setFrozenSupplyList(value: Array<AssetIssueContract.FrozenSupply>): void;
  addFrozenSupply(value?: AssetIssueContract.FrozenSupply, index?: number): AssetIssueContract.FrozenSupply;

  getTrxNum(): number;
  setTrxNum(value: number): void;

  getPrecision(): number;
  setPrecision(value: number): void;

  getNum(): number;
  setNum(value: number): void;

  getStartTime(): number;
  setStartTime(value: number): void;

  getEndTime(): number;
  setEndTime(value: number): void;

  getOrder(): number;
  setOrder(value: number): void;

  getVoteScore(): number;
  setVoteScore(value: number): void;

  getDescription(): Uint8Array | string;
  getDescription_asU8(): Uint8Array;
  getDescription_asB64(): string;
  setDescription(value: Uint8Array | string): void;

  getUrl(): Uint8Array | string;
  getUrl_asU8(): Uint8Array;
  getUrl_asB64(): string;
  setUrl(value: Uint8Array | string): void;

  getFreeAssetNetLimit(): number;
  setFreeAssetNetLimit(value: number): void;

  getPublicFreeAssetNetLimit(): number;
  setPublicFreeAssetNetLimit(value: number): void;

  getPublicFreeAssetNetUsage(): number;
  setPublicFreeAssetNetUsage(value: number): void;

  getPublicLatestFreeNetTime(): number;
  setPublicLatestFreeNetTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetIssueContract.AsObject;
  static toObject(includeInstance: boolean, msg: AssetIssueContract): AssetIssueContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssetIssueContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetIssueContract;
  static deserializeBinaryFromReader(message: AssetIssueContract, reader: jspb.BinaryReader): AssetIssueContract;
}

export namespace AssetIssueContract {
  export type AsObject = {
    id: string,
    ownerAddress: Uint8Array | string,
    name: Uint8Array | string,
    abbr: Uint8Array | string,
    totalSupply: number,
    frozenSupplyList: Array<AssetIssueContract.FrozenSupply.AsObject>,
    trxNum: number,
    precision: number,
    num: number,
    startTime: number,
    endTime: number,
    order: number,
    voteScore: number,
    description: Uint8Array | string,
    url: Uint8Array | string,
    freeAssetNetLimit: number,
    publicFreeAssetNetLimit: number,
    publicFreeAssetNetUsage: number,
    publicLatestFreeNetTime: number,
  }

  export class FrozenSupply extends jspb.Message {
    getFrozenAmount(): number;
    setFrozenAmount(value: number): void;

    getFrozenDays(): number;
    setFrozenDays(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FrozenSupply.AsObject;
    static toObject(includeInstance: boolean, msg: FrozenSupply): FrozenSupply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FrozenSupply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FrozenSupply;
    static deserializeBinaryFromReader(message: FrozenSupply, reader: jspb.BinaryReader): FrozenSupply;
  }

  export namespace FrozenSupply {
    export type AsObject = {
      frozenAmount: number,
      frozenDays: number,
    }
  }
}

export class ParticipateAssetIssueContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getToAddress(): Uint8Array | string;
  getToAddress_asU8(): Uint8Array;
  getToAddress_asB64(): string;
  setToAddress(value: Uint8Array | string): void;

  getAssetName(): Uint8Array | string;
  getAssetName_asU8(): Uint8Array;
  getAssetName_asB64(): string;
  setAssetName(value: Uint8Array | string): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParticipateAssetIssueContract.AsObject;
  static toObject(includeInstance: boolean, msg: ParticipateAssetIssueContract): ParticipateAssetIssueContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParticipateAssetIssueContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParticipateAssetIssueContract;
  static deserializeBinaryFromReader(message: ParticipateAssetIssueContract, reader: jspb.BinaryReader): ParticipateAssetIssueContract;
}

export namespace ParticipateAssetIssueContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    toAddress: Uint8Array | string,
    assetName: Uint8Array | string,
    amount: number,
  }
}

export class FreezeBalanceContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getFrozenBalance(): number;
  setFrozenBalance(value: number): void;

  getFrozenDuration(): number;
  setFrozenDuration(value: number): void;

  getResource(): ResourceCodeMap[keyof ResourceCodeMap];
  setResource(value: ResourceCodeMap[keyof ResourceCodeMap]): void;

  getReceiverAddress(): Uint8Array | string;
  getReceiverAddress_asU8(): Uint8Array;
  getReceiverAddress_asB64(): string;
  setReceiverAddress(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FreezeBalanceContract.AsObject;
  static toObject(includeInstance: boolean, msg: FreezeBalanceContract): FreezeBalanceContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FreezeBalanceContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FreezeBalanceContract;
  static deserializeBinaryFromReader(message: FreezeBalanceContract, reader: jspb.BinaryReader): FreezeBalanceContract;
}

export namespace FreezeBalanceContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    frozenBalance: number,
    frozenDuration: number,
    resource: ResourceCodeMap[keyof ResourceCodeMap],
    receiverAddress: Uint8Array | string,
  }
}

export class UnfreezeBalanceContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getResource(): ResourceCodeMap[keyof ResourceCodeMap];
  setResource(value: ResourceCodeMap[keyof ResourceCodeMap]): void;

  getReceiverAddress(): Uint8Array | string;
  getReceiverAddress_asU8(): Uint8Array;
  getReceiverAddress_asB64(): string;
  setReceiverAddress(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnfreezeBalanceContract.AsObject;
  static toObject(includeInstance: boolean, msg: UnfreezeBalanceContract): UnfreezeBalanceContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnfreezeBalanceContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnfreezeBalanceContract;
  static deserializeBinaryFromReader(message: UnfreezeBalanceContract, reader: jspb.BinaryReader): UnfreezeBalanceContract;
}

export namespace UnfreezeBalanceContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    resource: ResourceCodeMap[keyof ResourceCodeMap],
    receiverAddress: Uint8Array | string,
  }
}

export class UnfreezeAssetContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnfreezeAssetContract.AsObject;
  static toObject(includeInstance: boolean, msg: UnfreezeAssetContract): UnfreezeAssetContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnfreezeAssetContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnfreezeAssetContract;
  static deserializeBinaryFromReader(message: UnfreezeAssetContract, reader: jspb.BinaryReader): UnfreezeAssetContract;
}

export namespace UnfreezeAssetContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
  }
}

export class WithdrawBalanceContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawBalanceContract.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawBalanceContract): WithdrawBalanceContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WithdrawBalanceContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawBalanceContract;
  static deserializeBinaryFromReader(message: WithdrawBalanceContract, reader: jspb.BinaryReader): WithdrawBalanceContract;
}

export namespace WithdrawBalanceContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
  }
}

export class UpdateAssetContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getDescription(): Uint8Array | string;
  getDescription_asU8(): Uint8Array;
  getDescription_asB64(): string;
  setDescription(value: Uint8Array | string): void;

  getUrl(): Uint8Array | string;
  getUrl_asU8(): Uint8Array;
  getUrl_asB64(): string;
  setUrl(value: Uint8Array | string): void;

  getNewLimit(): number;
  setNewLimit(value: number): void;

  getNewPublicLimit(): number;
  setNewPublicLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAssetContract.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAssetContract): UpdateAssetContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAssetContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAssetContract;
  static deserializeBinaryFromReader(message: UpdateAssetContract, reader: jspb.BinaryReader): UpdateAssetContract;
}

export namespace UpdateAssetContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    description: Uint8Array | string,
    url: Uint8Array | string,
    newLimit: number,
    newPublicLimit: number,
  }
}

export class ProposalCreateContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getParametersMap(): jspb.Map<number, number>;
  clearParametersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposalCreateContract.AsObject;
  static toObject(includeInstance: boolean, msg: ProposalCreateContract): ProposalCreateContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProposalCreateContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProposalCreateContract;
  static deserializeBinaryFromReader(message: ProposalCreateContract, reader: jspb.BinaryReader): ProposalCreateContract;
}

export namespace ProposalCreateContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    parametersMap: Array<[number, number]>,
  }
}

export class ProposalApproveContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getProposalId(): number;
  setProposalId(value: number): void;

  getIsAddApproval(): boolean;
  setIsAddApproval(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposalApproveContract.AsObject;
  static toObject(includeInstance: boolean, msg: ProposalApproveContract): ProposalApproveContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProposalApproveContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProposalApproveContract;
  static deserializeBinaryFromReader(message: ProposalApproveContract, reader: jspb.BinaryReader): ProposalApproveContract;
}

export namespace ProposalApproveContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    proposalId: number,
    isAddApproval: boolean,
  }
}

export class ProposalDeleteContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getProposalId(): number;
  setProposalId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposalDeleteContract.AsObject;
  static toObject(includeInstance: boolean, msg: ProposalDeleteContract): ProposalDeleteContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProposalDeleteContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProposalDeleteContract;
  static deserializeBinaryFromReader(message: ProposalDeleteContract, reader: jspb.BinaryReader): ProposalDeleteContract;
}

export namespace ProposalDeleteContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    proposalId: number,
  }
}

export class CreateSmartContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  hasNewContract(): boolean;
  clearNewContract(): void;
  getNewContract(): core_Tron_pb.SmartContract | undefined;
  setNewContract(value?: core_Tron_pb.SmartContract): void;

  getCallTokenValue(): number;
  setCallTokenValue(value: number): void;

  getTokenId(): number;
  setTokenId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSmartContract.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSmartContract): CreateSmartContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSmartContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSmartContract;
  static deserializeBinaryFromReader(message: CreateSmartContract, reader: jspb.BinaryReader): CreateSmartContract;
}

export namespace CreateSmartContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    newContract?: core_Tron_pb.SmartContract.AsObject,
    callTokenValue: number,
    tokenId: number,
  }
}

export class TriggerSmartContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getContractAddress(): Uint8Array | string;
  getContractAddress_asU8(): Uint8Array;
  getContractAddress_asB64(): string;
  setContractAddress(value: Uint8Array | string): void;

  getCallValue(): number;
  setCallValue(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getCallTokenValue(): number;
  setCallTokenValue(value: number): void;

  getTokenId(): number;
  setTokenId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerSmartContract.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerSmartContract): TriggerSmartContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerSmartContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerSmartContract;
  static deserializeBinaryFromReader(message: TriggerSmartContract, reader: jspb.BinaryReader): TriggerSmartContract;
}

export namespace TriggerSmartContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    contractAddress: Uint8Array | string,
    callValue: number,
    data: Uint8Array | string,
    callTokenValue: number,
    tokenId: number,
  }
}

export class BuyStorageContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getQuant(): number;
  setQuant(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuyStorageContract.AsObject;
  static toObject(includeInstance: boolean, msg: BuyStorageContract): BuyStorageContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuyStorageContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuyStorageContract;
  static deserializeBinaryFromReader(message: BuyStorageContract, reader: jspb.BinaryReader): BuyStorageContract;
}

export namespace BuyStorageContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    quant: number,
  }
}

export class BuyStorageBytesContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getBytes(): number;
  setBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuyStorageBytesContract.AsObject;
  static toObject(includeInstance: boolean, msg: BuyStorageBytesContract): BuyStorageBytesContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuyStorageBytesContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuyStorageBytesContract;
  static deserializeBinaryFromReader(message: BuyStorageBytesContract, reader: jspb.BinaryReader): BuyStorageBytesContract;
}

export namespace BuyStorageBytesContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    bytes: number,
  }
}

export class SellStorageContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getStorageBytes(): number;
  setStorageBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SellStorageContract.AsObject;
  static toObject(includeInstance: boolean, msg: SellStorageContract): SellStorageContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SellStorageContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SellStorageContract;
  static deserializeBinaryFromReader(message: SellStorageContract, reader: jspb.BinaryReader): SellStorageContract;
}

export namespace SellStorageContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    storageBytes: number,
  }
}

export class ExchangeCreateContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getFirstTokenId(): Uint8Array | string;
  getFirstTokenId_asU8(): Uint8Array;
  getFirstTokenId_asB64(): string;
  setFirstTokenId(value: Uint8Array | string): void;

  getFirstTokenBalance(): number;
  setFirstTokenBalance(value: number): void;

  getSecondTokenId(): Uint8Array | string;
  getSecondTokenId_asU8(): Uint8Array;
  getSecondTokenId_asB64(): string;
  setSecondTokenId(value: Uint8Array | string): void;

  getSecondTokenBalance(): number;
  setSecondTokenBalance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeCreateContract.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeCreateContract): ExchangeCreateContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExchangeCreateContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeCreateContract;
  static deserializeBinaryFromReader(message: ExchangeCreateContract, reader: jspb.BinaryReader): ExchangeCreateContract;
}

export namespace ExchangeCreateContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    firstTokenId: Uint8Array | string,
    firstTokenBalance: number,
    secondTokenId: Uint8Array | string,
    secondTokenBalance: number,
  }
}

export class ExchangeInjectContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getExchangeId(): number;
  setExchangeId(value: number): void;

  getTokenId(): Uint8Array | string;
  getTokenId_asU8(): Uint8Array;
  getTokenId_asB64(): string;
  setTokenId(value: Uint8Array | string): void;

  getQuant(): number;
  setQuant(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeInjectContract.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeInjectContract): ExchangeInjectContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExchangeInjectContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeInjectContract;
  static deserializeBinaryFromReader(message: ExchangeInjectContract, reader: jspb.BinaryReader): ExchangeInjectContract;
}

export namespace ExchangeInjectContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    exchangeId: number,
    tokenId: Uint8Array | string,
    quant: number,
  }
}

export class ExchangeWithdrawContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getExchangeId(): number;
  setExchangeId(value: number): void;

  getTokenId(): Uint8Array | string;
  getTokenId_asU8(): Uint8Array;
  getTokenId_asB64(): string;
  setTokenId(value: Uint8Array | string): void;

  getQuant(): number;
  setQuant(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeWithdrawContract.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeWithdrawContract): ExchangeWithdrawContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExchangeWithdrawContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeWithdrawContract;
  static deserializeBinaryFromReader(message: ExchangeWithdrawContract, reader: jspb.BinaryReader): ExchangeWithdrawContract;
}

export namespace ExchangeWithdrawContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    exchangeId: number,
    tokenId: Uint8Array | string,
    quant: number,
  }
}

export class ExchangeTransactionContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getExchangeId(): number;
  setExchangeId(value: number): void;

  getTokenId(): Uint8Array | string;
  getTokenId_asU8(): Uint8Array;
  getTokenId_asB64(): string;
  setTokenId(value: Uint8Array | string): void;

  getQuant(): number;
  setQuant(value: number): void;

  getExpected(): number;
  setExpected(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeTransactionContract.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeTransactionContract): ExchangeTransactionContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExchangeTransactionContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeTransactionContract;
  static deserializeBinaryFromReader(message: ExchangeTransactionContract, reader: jspb.BinaryReader): ExchangeTransactionContract;
}

export namespace ExchangeTransactionContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    exchangeId: number,
    tokenId: Uint8Array | string,
    quant: number,
    expected: number,
  }
}

export class AccountPermissionUpdateContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): core_Tron_pb.Permission | undefined;
  setOwner(value?: core_Tron_pb.Permission): void;

  hasWitness(): boolean;
  clearWitness(): void;
  getWitness(): core_Tron_pb.Permission | undefined;
  setWitness(value?: core_Tron_pb.Permission): void;

  clearActivesList(): void;
  getActivesList(): Array<core_Tron_pb.Permission>;
  setActivesList(value: Array<core_Tron_pb.Permission>): void;
  addActives(value?: core_Tron_pb.Permission, index?: number): core_Tron_pb.Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountPermissionUpdateContract.AsObject;
  static toObject(includeInstance: boolean, msg: AccountPermissionUpdateContract): AccountPermissionUpdateContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountPermissionUpdateContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountPermissionUpdateContract;
  static deserializeBinaryFromReader(message: AccountPermissionUpdateContract, reader: jspb.BinaryReader): AccountPermissionUpdateContract;
}

export namespace AccountPermissionUpdateContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    owner?: core_Tron_pb.Permission.AsObject,
    witness?: core_Tron_pb.Permission.AsObject,
    activesList: Array<core_Tron_pb.Permission.AsObject>,
  }
}

export class UpdateBrokerageContract extends jspb.Message {
  getOwnerAddress(): Uint8Array | string;
  getOwnerAddress_asU8(): Uint8Array;
  getOwnerAddress_asB64(): string;
  setOwnerAddress(value: Uint8Array | string): void;

  getBrokerage(): number;
  setBrokerage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBrokerageContract.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBrokerageContract): UpdateBrokerageContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBrokerageContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBrokerageContract;
  static deserializeBinaryFromReader(message: UpdateBrokerageContract, reader: jspb.BinaryReader): UpdateBrokerageContract;
}

export namespace UpdateBrokerageContract {
  export type AsObject = {
    ownerAddress: Uint8Array | string,
    brokerage: number,
  }
}

export interface ResourceCodeMap {
  BANDWIDTH: 0;
  ENERGY: 1;
}

export const ResourceCode: ResourceCodeMap;

