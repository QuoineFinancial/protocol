// package: protocol
// file: core/Tron.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as core_Discover_pb from "../core/Discover_pb";

export class AccountId extends jspb.Message {
  getName(): Uint8Array | string;
  getName_asU8(): Uint8Array;
  getName_asB64(): string;
  setName(value: Uint8Array | string): void;

  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountId.AsObject;
  static toObject(includeInstance: boolean, msg: AccountId): AccountId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountId;
  static deserializeBinaryFromReader(message: AccountId, reader: jspb.BinaryReader): AccountId;
}

export namespace AccountId {
  export type AsObject = {
    name: Uint8Array | string,
    address: Uint8Array | string,
  }
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

export class Proposal extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  getProposerAddress(): Uint8Array | string;
  getProposerAddress_asU8(): Uint8Array;
  getProposerAddress_asB64(): string;
  setProposerAddress(value: Uint8Array | string): void;

  getParametersMap(): jspb.Map<number, number>;
  clearParametersMap(): void;
  getExpirationTime(): number;
  setExpirationTime(value: number): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  clearApprovalsList(): void;
  getApprovalsList(): Array<Uint8Array | string>;
  getApprovalsList_asU8(): Array<Uint8Array>;
  getApprovalsList_asB64(): Array<string>;
  setApprovalsList(value: Array<Uint8Array | string>): void;
  addApprovals(value: Uint8Array | string, index?: number): Uint8Array | string;

  getState(): Proposal.StateMap[keyof Proposal.StateMap];
  setState(value: Proposal.StateMap[keyof Proposal.StateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Proposal.AsObject;
  static toObject(includeInstance: boolean, msg: Proposal): Proposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Proposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Proposal;
  static deserializeBinaryFromReader(message: Proposal, reader: jspb.BinaryReader): Proposal;
}

export namespace Proposal {
  export type AsObject = {
    proposalId: number,
    proposerAddress: Uint8Array | string,
    parametersMap: Array<[number, number]>,
    expirationTime: number,
    createTime: number,
    approvalsList: Array<Uint8Array | string>,
    state: Proposal.StateMap[keyof Proposal.StateMap],
  }

  export interface StateMap {
    PENDING: 0;
    DISAPPROVED: 1;
    APPROVED: 2;
    CANCELED: 3;
  }

  export const State: StateMap;
}

export class Exchange extends jspb.Message {
  getExchangeId(): number;
  setExchangeId(value: number): void;

  getCreatorAddress(): Uint8Array | string;
  getCreatorAddress_asU8(): Uint8Array;
  getCreatorAddress_asB64(): string;
  setCreatorAddress(value: Uint8Array | string): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

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
  toObject(includeInstance?: boolean): Exchange.AsObject;
  static toObject(includeInstance: boolean, msg: Exchange): Exchange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Exchange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Exchange;
  static deserializeBinaryFromReader(message: Exchange, reader: jspb.BinaryReader): Exchange;
}

export namespace Exchange {
  export type AsObject = {
    exchangeId: number,
    creatorAddress: Uint8Array | string,
    createTime: number,
    firstTokenId: Uint8Array | string,
    firstTokenBalance: number,
    secondTokenId: Uint8Array | string,
    secondTokenBalance: number,
  }
}

export class ChainParameters extends jspb.Message {
  clearChainparameterList(): void;
  getChainparameterList(): Array<ChainParameters.ChainParameter>;
  setChainparameterList(value: Array<ChainParameters.ChainParameter>): void;
  addChainparameter(value?: ChainParameters.ChainParameter, index?: number): ChainParameters.ChainParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChainParameters.AsObject;
  static toObject(includeInstance: boolean, msg: ChainParameters): ChainParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChainParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChainParameters;
  static deserializeBinaryFromReader(message: ChainParameters, reader: jspb.BinaryReader): ChainParameters;
}

export namespace ChainParameters {
  export type AsObject = {
    chainparameterList: Array<ChainParameters.ChainParameter.AsObject>,
  }

  export class ChainParameter extends jspb.Message {
    getKey(): string;
    setKey(value: string): void;

    getValue(): number;
    setValue(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChainParameter.AsObject;
    static toObject(includeInstance: boolean, msg: ChainParameter): ChainParameter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChainParameter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChainParameter;
    static deserializeBinaryFromReader(message: ChainParameter, reader: jspb.BinaryReader): ChainParameter;
  }

  export namespace ChainParameter {
    export type AsObject = {
      key: string,
      value: number,
    }
  }
}

export class Account extends jspb.Message {
  getAccountName(): Uint8Array | string;
  getAccountName_asU8(): Uint8Array;
  getAccountName_asB64(): string;
  setAccountName(value: Uint8Array | string): void;

  getType(): AccountTypeMap[keyof AccountTypeMap];
  setType(value: AccountTypeMap[keyof AccountTypeMap]): void;

  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): void;

  getBalance(): number;
  setBalance(value: number): void;

  clearVotesList(): void;
  getVotesList(): Array<Vote>;
  setVotesList(value: Array<Vote>): void;
  addVotes(value?: Vote, index?: number): Vote;

  getAssetMap(): jspb.Map<string, number>;
  clearAssetMap(): void;
  getAssetv2Map(): jspb.Map<string, number>;
  clearAssetv2Map(): void;
  clearFrozenList(): void;
  getFrozenList(): Array<Account.Frozen>;
  setFrozenList(value: Array<Account.Frozen>): void;
  addFrozen(value?: Account.Frozen, index?: number): Account.Frozen;

  getNetUsage(): number;
  setNetUsage(value: number): void;

  getAcquiredDelegatedFrozenBalanceForBandwidth(): number;
  setAcquiredDelegatedFrozenBalanceForBandwidth(value: number): void;

  getDelegatedFrozenBalanceForBandwidth(): number;
  setDelegatedFrozenBalanceForBandwidth(value: number): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getLatestOprationTime(): number;
  setLatestOprationTime(value: number): void;

  getAllowance(): number;
  setAllowance(value: number): void;

  getLatestWithdrawTime(): number;
  setLatestWithdrawTime(value: number): void;

  getCode(): Uint8Array | string;
  getCode_asU8(): Uint8Array;
  getCode_asB64(): string;
  setCode(value: Uint8Array | string): void;

  getIsWitness(): boolean;
  setIsWitness(value: boolean): void;

  getIsCommittee(): boolean;
  setIsCommittee(value: boolean): void;

  clearFrozenSupplyList(): void;
  getFrozenSupplyList(): Array<Account.Frozen>;
  setFrozenSupplyList(value: Array<Account.Frozen>): void;
  addFrozenSupply(value?: Account.Frozen, index?: number): Account.Frozen;

  getAssetIssuedName(): Uint8Array | string;
  getAssetIssuedName_asU8(): Uint8Array;
  getAssetIssuedName_asB64(): string;
  setAssetIssuedName(value: Uint8Array | string): void;

  getAssetIssuedId(): Uint8Array | string;
  getAssetIssuedId_asU8(): Uint8Array;
  getAssetIssuedId_asB64(): string;
  setAssetIssuedId(value: Uint8Array | string): void;

  getLatestAssetOperationTimeMap(): jspb.Map<string, number>;
  clearLatestAssetOperationTimeMap(): void;
  getLatestAssetOperationTimev2Map(): jspb.Map<string, number>;
  clearLatestAssetOperationTimev2Map(): void;
  getFreeNetUsage(): number;
  setFreeNetUsage(value: number): void;

  getFreeAssetNetUsageMap(): jspb.Map<string, number>;
  clearFreeAssetNetUsageMap(): void;
  getFreeAssetNetUsagev2Map(): jspb.Map<string, number>;
  clearFreeAssetNetUsagev2Map(): void;
  getLatestConsumeTime(): number;
  setLatestConsumeTime(value: number): void;

  getLatestConsumeFreeTime(): number;
  setLatestConsumeFreeTime(value: number): void;

  getAccountId(): Uint8Array | string;
  getAccountId_asU8(): Uint8Array;
  getAccountId_asB64(): string;
  setAccountId(value: Uint8Array | string): void;

  hasAccountResource(): boolean;
  clearAccountResource(): void;
  getAccountResource(): Account.AccountResource | undefined;
  setAccountResource(value?: Account.AccountResource): void;

  getCodehash(): Uint8Array | string;
  getCodehash_asU8(): Uint8Array;
  getCodehash_asB64(): string;
  setCodehash(value: Uint8Array | string): void;

  hasOwnerPermission(): boolean;
  clearOwnerPermission(): void;
  getOwnerPermission(): Permission | undefined;
  setOwnerPermission(value?: Permission): void;

  hasWitnessPermission(): boolean;
  clearWitnessPermission(): void;
  getWitnessPermission(): Permission | undefined;
  setWitnessPermission(value?: Permission): void;

  clearActivePermissionList(): void;
  getActivePermissionList(): Array<Permission>;
  setActivePermissionList(value: Array<Permission>): void;
  addActivePermission(value?: Permission, index?: number): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    accountName: Uint8Array | string,
    type: AccountTypeMap[keyof AccountTypeMap],
    address: Uint8Array | string,
    balance: number,
    votesList: Array<Vote.AsObject>,
    assetMap: Array<[string, number]>,
    assetv2Map: Array<[string, number]>,
    frozenList: Array<Account.Frozen.AsObject>,
    netUsage: number,
    acquiredDelegatedFrozenBalanceForBandwidth: number,
    delegatedFrozenBalanceForBandwidth: number,
    createTime: number,
    latestOprationTime: number,
    allowance: number,
    latestWithdrawTime: number,
    code: Uint8Array | string,
    isWitness: boolean,
    isCommittee: boolean,
    frozenSupplyList: Array<Account.Frozen.AsObject>,
    assetIssuedName: Uint8Array | string,
    assetIssuedId: Uint8Array | string,
    latestAssetOperationTimeMap: Array<[string, number]>,
    latestAssetOperationTimev2Map: Array<[string, number]>,
    freeNetUsage: number,
    freeAssetNetUsageMap: Array<[string, number]>,
    freeAssetNetUsagev2Map: Array<[string, number]>,
    latestConsumeTime: number,
    latestConsumeFreeTime: number,
    accountId: Uint8Array | string,
    accountResource?: Account.AccountResource.AsObject,
    codehash: Uint8Array | string,
    ownerPermission?: Permission.AsObject,
    witnessPermission?: Permission.AsObject,
    activePermissionList: Array<Permission.AsObject>,
  }

  export class Frozen extends jspb.Message {
    getFrozenBalance(): number;
    setFrozenBalance(value: number): void;

    getExpireTime(): number;
    setExpireTime(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Frozen.AsObject;
    static toObject(includeInstance: boolean, msg: Frozen): Frozen.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Frozen, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Frozen;
    static deserializeBinaryFromReader(message: Frozen, reader: jspb.BinaryReader): Frozen;
  }

  export namespace Frozen {
    export type AsObject = {
      frozenBalance: number,
      expireTime: number,
    }
  }

  export class AccountResource extends jspb.Message {
    getEnergyUsage(): number;
    setEnergyUsage(value: number): void;

    hasFrozenBalanceForEnergy(): boolean;
    clearFrozenBalanceForEnergy(): void;
    getFrozenBalanceForEnergy(): Account.Frozen | undefined;
    setFrozenBalanceForEnergy(value?: Account.Frozen): void;

    getLatestConsumeTimeForEnergy(): number;
    setLatestConsumeTimeForEnergy(value: number): void;

    getAcquiredDelegatedFrozenBalanceForEnergy(): number;
    setAcquiredDelegatedFrozenBalanceForEnergy(value: number): void;

    getDelegatedFrozenBalanceForEnergy(): number;
    setDelegatedFrozenBalanceForEnergy(value: number): void;

    getStorageLimit(): number;
    setStorageLimit(value: number): void;

    getStorageUsage(): number;
    setStorageUsage(value: number): void;

    getLatestExchangeStorageTime(): number;
    setLatestExchangeStorageTime(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountResource.AsObject;
    static toObject(includeInstance: boolean, msg: AccountResource): AccountResource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccountResource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountResource;
    static deserializeBinaryFromReader(message: AccountResource, reader: jspb.BinaryReader): AccountResource;
  }

  export namespace AccountResource {
    export type AsObject = {
      energyUsage: number,
      frozenBalanceForEnergy?: Account.Frozen.AsObject,
      latestConsumeTimeForEnergy: number,
      acquiredDelegatedFrozenBalanceForEnergy: number,
      delegatedFrozenBalanceForEnergy: number,
      storageLimit: number,
      storageUsage: number,
      latestExchangeStorageTime: number,
    }
  }
}

export class Key extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): void;

  getWeight(): number;
  setWeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Key.AsObject;
  static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Key;
  static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

export namespace Key {
  export type AsObject = {
    address: Uint8Array | string,
    weight: number,
  }
}

export class DelegatedResource extends jspb.Message {
  getFrom(): Uint8Array | string;
  getFrom_asU8(): Uint8Array;
  getFrom_asB64(): string;
  setFrom(value: Uint8Array | string): void;

  getTo(): Uint8Array | string;
  getTo_asU8(): Uint8Array;
  getTo_asB64(): string;
  setTo(value: Uint8Array | string): void;

  getFrozenBalanceForBandwidth(): number;
  setFrozenBalanceForBandwidth(value: number): void;

  getFrozenBalanceForEnergy(): number;
  setFrozenBalanceForEnergy(value: number): void;

  getExpireTimeForBandwidth(): number;
  setExpireTimeForBandwidth(value: number): void;

  getExpireTimeForEnergy(): number;
  setExpireTimeForEnergy(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelegatedResource.AsObject;
  static toObject(includeInstance: boolean, msg: DelegatedResource): DelegatedResource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DelegatedResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelegatedResource;
  static deserializeBinaryFromReader(message: DelegatedResource, reader: jspb.BinaryReader): DelegatedResource;
}

export namespace DelegatedResource {
  export type AsObject = {
    from: Uint8Array | string,
    to: Uint8Array | string,
    frozenBalanceForBandwidth: number,
    frozenBalanceForEnergy: number,
    expireTimeForBandwidth: number,
    expireTimeForEnergy: number,
  }
}

export class authority extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): AccountId | undefined;
  setAccount(value?: AccountId): void;

  getPermissionName(): Uint8Array | string;
  getPermissionName_asU8(): Uint8Array;
  getPermissionName_asB64(): string;
  setPermissionName(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): authority.AsObject;
  static toObject(includeInstance: boolean, msg: authority): authority.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: authority, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): authority;
  static deserializeBinaryFromReader(message: authority, reader: jspb.BinaryReader): authority;
}

export namespace authority {
  export type AsObject = {
    account?: AccountId.AsObject,
    permissionName: Uint8Array | string,
  }
}

export class Permission extends jspb.Message {
  getType(): Permission.PermissionTypeMap[keyof Permission.PermissionTypeMap];
  setType(value: Permission.PermissionTypeMap[keyof Permission.PermissionTypeMap]): void;

  getId(): number;
  setId(value: number): void;

  getPermissionName(): string;
  setPermissionName(value: string): void;

  getThreshold(): number;
  setThreshold(value: number): void;

  getParentId(): number;
  setParentId(value: number): void;

  getOperations(): Uint8Array | string;
  getOperations_asU8(): Uint8Array;
  getOperations_asB64(): string;
  setOperations(value: Uint8Array | string): void;

  clearKeysList(): void;
  getKeysList(): Array<Key>;
  setKeysList(value: Array<Key>): void;
  addKeys(value?: Key, index?: number): Key;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Permission.AsObject;
  static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Permission;
  static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
}

export namespace Permission {
  export type AsObject = {
    type: Permission.PermissionTypeMap[keyof Permission.PermissionTypeMap],
    id: number,
    permissionName: string,
    threshold: number,
    parentId: number,
    operations: Uint8Array | string,
    keysList: Array<Key.AsObject>,
  }

  export interface PermissionTypeMap {
    OWNER: 0;
    WITNESS: 1;
    ACTIVE: 2;
  }

  export const PermissionType: PermissionTypeMap;
}

export class Witness extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): void;

  getVotecount(): number;
  setVotecount(value: number): void;

  getPubkey(): Uint8Array | string;
  getPubkey_asU8(): Uint8Array;
  getPubkey_asB64(): string;
  setPubkey(value: Uint8Array | string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getTotalproduced(): number;
  setTotalproduced(value: number): void;

  getTotalmissed(): number;
  setTotalmissed(value: number): void;

  getLatestblocknum(): number;
  setLatestblocknum(value: number): void;

  getLatestslotnum(): number;
  setLatestslotnum(value: number): void;

  getIsjobs(): boolean;
  setIsjobs(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Witness.AsObject;
  static toObject(includeInstance: boolean, msg: Witness): Witness.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Witness, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Witness;
  static deserializeBinaryFromReader(message: Witness, reader: jspb.BinaryReader): Witness;
}

export namespace Witness {
  export type AsObject = {
    address: Uint8Array | string,
    votecount: number,
    pubkey: Uint8Array | string,
    url: string,
    totalproduced: number,
    totalmissed: number,
    latestblocknum: number,
    latestslotnum: number,
    isjobs: boolean,
  }
}

export class Votes extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): void;

  clearOldVotesList(): void;
  getOldVotesList(): Array<Vote>;
  setOldVotesList(value: Array<Vote>): void;
  addOldVotes(value?: Vote, index?: number): Vote;

  clearNewVotesList(): void;
  getNewVotesList(): Array<Vote>;
  setNewVotesList(value: Array<Vote>): void;
  addNewVotes(value?: Vote, index?: number): Vote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Votes.AsObject;
  static toObject(includeInstance: boolean, msg: Votes): Votes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Votes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Votes;
  static deserializeBinaryFromReader(message: Votes, reader: jspb.BinaryReader): Votes;
}

export namespace Votes {
  export type AsObject = {
    address: Uint8Array | string,
    oldVotesList: Array<Vote.AsObject>,
    newVotesList: Array<Vote.AsObject>,
  }
}

export class TXOutput extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  getPubkeyhash(): Uint8Array | string;
  getPubkeyhash_asU8(): Uint8Array;
  getPubkeyhash_asB64(): string;
  setPubkeyhash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TXOutput.AsObject;
  static toObject(includeInstance: boolean, msg: TXOutput): TXOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TXOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TXOutput;
  static deserializeBinaryFromReader(message: TXOutput, reader: jspb.BinaryReader): TXOutput;
}

export namespace TXOutput {
  export type AsObject = {
    value: number,
    pubkeyhash: Uint8Array | string,
  }
}

export class TXInput extends jspb.Message {
  hasRawData(): boolean;
  clearRawData(): void;
  getRawData(): TXInput.raw | undefined;
  setRawData(value?: TXInput.raw): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TXInput.AsObject;
  static toObject(includeInstance: boolean, msg: TXInput): TXInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TXInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TXInput;
  static deserializeBinaryFromReader(message: TXInput, reader: jspb.BinaryReader): TXInput;
}

export namespace TXInput {
  export type AsObject = {
    rawData?: TXInput.raw.AsObject,
    signature: Uint8Array | string,
  }

  export class raw extends jspb.Message {
    getTxid(): Uint8Array | string;
    getTxid_asU8(): Uint8Array;
    getTxid_asB64(): string;
    setTxid(value: Uint8Array | string): void;

    getVout(): number;
    setVout(value: number): void;

    getPubkey(): Uint8Array | string;
    getPubkey_asU8(): Uint8Array;
    getPubkey_asB64(): string;
    setPubkey(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): raw.AsObject;
    static toObject(includeInstance: boolean, msg: raw): raw.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: raw, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): raw;
    static deserializeBinaryFromReader(message: raw, reader: jspb.BinaryReader): raw;
  }

  export namespace raw {
    export type AsObject = {
      txid: Uint8Array | string,
      vout: number,
      pubkey: Uint8Array | string,
    }
  }
}

export class TXOutputs extends jspb.Message {
  clearOutputsList(): void;
  getOutputsList(): Array<TXOutput>;
  setOutputsList(value: Array<TXOutput>): void;
  addOutputs(value?: TXOutput, index?: number): TXOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TXOutputs.AsObject;
  static toObject(includeInstance: boolean, msg: TXOutputs): TXOutputs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TXOutputs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TXOutputs;
  static deserializeBinaryFromReader(message: TXOutputs, reader: jspb.BinaryReader): TXOutputs;
}

export namespace TXOutputs {
  export type AsObject = {
    outputsList: Array<TXOutput.AsObject>,
  }
}

export class ResourceReceipt extends jspb.Message {
  getEnergyUsage(): number;
  setEnergyUsage(value: number): void;

  getEnergyFee(): number;
  setEnergyFee(value: number): void;

  getOriginEnergyUsage(): number;
  setOriginEnergyUsage(value: number): void;

  getEnergyUsageTotal(): number;
  setEnergyUsageTotal(value: number): void;

  getNetUsage(): number;
  setNetUsage(value: number): void;

  getNetFee(): number;
  setNetFee(value: number): void;

  getResult(): Transaction.Result.contractResultMap[keyof Transaction.Result.contractResultMap];
  setResult(value: Transaction.Result.contractResultMap[keyof Transaction.Result.contractResultMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceReceipt.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceReceipt): ResourceReceipt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceReceipt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceReceipt;
  static deserializeBinaryFromReader(message: ResourceReceipt, reader: jspb.BinaryReader): ResourceReceipt;
}

export namespace ResourceReceipt {
  export type AsObject = {
    energyUsage: number,
    energyFee: number,
    originEnergyUsage: number,
    energyUsageTotal: number,
    netUsage: number,
    netFee: number,
    result: Transaction.Result.contractResultMap[keyof Transaction.Result.contractResultMap],
  }
}

export class Transaction extends jspb.Message {
  hasRawData(): boolean;
  clearRawData(): void;
  getRawData(): Transaction.raw | undefined;
  setRawData(value?: Transaction.raw): void;

  clearSignatureList(): void;
  getSignatureList(): Array<Uint8Array | string>;
  getSignatureList_asU8(): Array<Uint8Array>;
  getSignatureList_asB64(): Array<string>;
  setSignatureList(value: Array<Uint8Array | string>): void;
  addSignature(value: Uint8Array | string, index?: number): Uint8Array | string;

  clearRetList(): void;
  getRetList(): Array<Transaction.Result>;
  setRetList(value: Array<Transaction.Result>): void;
  addRet(value?: Transaction.Result, index?: number): Transaction.Result;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    rawData?: Transaction.raw.AsObject,
    signatureList: Array<Uint8Array | string>,
    retList: Array<Transaction.Result.AsObject>,
  }

  export class Contract extends jspb.Message {
    getType(): Transaction.Contract.ContractTypeMap[keyof Transaction.Contract.ContractTypeMap];
    setType(value: Transaction.Contract.ContractTypeMap[keyof Transaction.Contract.ContractTypeMap]): void;

    hasParameter(): boolean;
    clearParameter(): void;
    getParameter(): google_protobuf_any_pb.Any | undefined;
    setParameter(value?: google_protobuf_any_pb.Any): void;

    getProvider(): Uint8Array | string;
    getProvider_asU8(): Uint8Array;
    getProvider_asB64(): string;
    setProvider(value: Uint8Array | string): void;

    getContractname(): Uint8Array | string;
    getContractname_asU8(): Uint8Array;
    getContractname_asB64(): string;
    setContractname(value: Uint8Array | string): void;

    getPermissionId(): number;
    setPermissionId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Contract.AsObject;
    static toObject(includeInstance: boolean, msg: Contract): Contract.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Contract, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Contract;
    static deserializeBinaryFromReader(message: Contract, reader: jspb.BinaryReader): Contract;
  }

  export namespace Contract {
    export type AsObject = {
      type: Transaction.Contract.ContractTypeMap[keyof Transaction.Contract.ContractTypeMap],
      parameter?: google_protobuf_any_pb.Any.AsObject,
      provider: Uint8Array | string,
      contractname: Uint8Array | string,
      permissionId: number,
    }

    export interface ContractTypeMap {
      ACCOUNTCREATECONTRACT: 0;
      TRANSFERCONTRACT: 1;
      TRANSFERASSETCONTRACT: 2;
      VOTEASSETCONTRACT: 3;
      VOTEWITNESSCONTRACT: 4;
      WITNESSCREATECONTRACT: 5;
      ASSETISSUECONTRACT: 6;
      WITNESSUPDATECONTRACT: 8;
      PARTICIPATEASSETISSUECONTRACT: 9;
      ACCOUNTUPDATECONTRACT: 10;
      FREEZEBALANCECONTRACT: 11;
      UNFREEZEBALANCECONTRACT: 12;
      WITHDRAWBALANCECONTRACT: 13;
      UNFREEZEASSETCONTRACT: 14;
      UPDATEASSETCONTRACT: 15;
      PROPOSALCREATECONTRACT: 16;
      PROPOSALAPPROVECONTRACT: 17;
      PROPOSALDELETECONTRACT: 18;
      SETACCOUNTIDCONTRACT: 19;
      CUSTOMCONTRACT: 20;
      CREATESMARTCONTRACT: 30;
      TRIGGERSMARTCONTRACT: 31;
      GETCONTRACT: 32;
      UPDATESETTINGCONTRACT: 33;
      EXCHANGECREATECONTRACT: 41;
      EXCHANGEINJECTCONTRACT: 42;
      EXCHANGEWITHDRAWCONTRACT: 43;
      EXCHANGETRANSACTIONCONTRACT: 44;
      UPDATEENERGYLIMITCONTRACT: 45;
      ACCOUNTPERMISSIONUPDATECONTRACT: 46;
      CLEARABICONTRACT: 48;
      UPDATEBROKERAGECONTRACT: 49;
    }

    export const ContractType: ContractTypeMap;
  }

  export class Result extends jspb.Message {
    getFee(): number;
    setFee(value: number): void;

    getRet(): Transaction.Result.codeMap[keyof Transaction.Result.codeMap];
    setRet(value: Transaction.Result.codeMap[keyof Transaction.Result.codeMap]): void;

    getContractret(): Transaction.Result.contractResultMap[keyof Transaction.Result.contractResultMap];
    setContractret(value: Transaction.Result.contractResultMap[keyof Transaction.Result.contractResultMap]): void;

    getAssetissueid(): string;
    setAssetissueid(value: string): void;

    getWithdrawAmount(): number;
    setWithdrawAmount(value: number): void;

    getUnfreezeAmount(): number;
    setUnfreezeAmount(value: number): void;

    getExchangeReceivedAmount(): number;
    setExchangeReceivedAmount(value: number): void;

    getExchangeInjectAnotherAmount(): number;
    setExchangeInjectAnotherAmount(value: number): void;

    getExchangeWithdrawAnotherAmount(): number;
    setExchangeWithdrawAnotherAmount(value: number): void;

    getExchangeId(): number;
    setExchangeId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Result.AsObject;
    static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Result;
    static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
  }

  export namespace Result {
    export type AsObject = {
      fee: number,
      ret: Transaction.Result.codeMap[keyof Transaction.Result.codeMap],
      contractret: Transaction.Result.contractResultMap[keyof Transaction.Result.contractResultMap],
      assetissueid: string,
      withdrawAmount: number,
      unfreezeAmount: number,
      exchangeReceivedAmount: number,
      exchangeInjectAnotherAmount: number,
      exchangeWithdrawAnotherAmount: number,
      exchangeId: number,
    }

    export interface codeMap {
      SUCESS: 0;
      FAILED: 1;
    }

    export const code: codeMap;

    export interface contractResultMap {
      DEFAULT: 0;
      SUCCESS: 1;
      REVERT: 2;
      BAD_JUMP_DESTINATION: 3;
      OUT_OF_MEMORY: 4;
      PRECOMPILED_CONTRACT: 5;
      STACK_TOO_SMALL: 6;
      STACK_TOO_LARGE: 7;
      ILLEGAL_OPERATION: 8;
      STACK_OVERFLOW: 9;
      OUT_OF_ENERGY: 10;
      OUT_OF_TIME: 11;
      JVM_STACK_OVER_FLOW: 12;
      UNKNOWN: 13;
      TRANSFER_FAILED: 14;
    }

    export const contractResult: contractResultMap;
  }

  export class raw extends jspb.Message {
    getRefBlockBytes(): Uint8Array | string;
    getRefBlockBytes_asU8(): Uint8Array;
    getRefBlockBytes_asB64(): string;
    setRefBlockBytes(value: Uint8Array | string): void;

    getRefBlockNum(): number;
    setRefBlockNum(value: number): void;

    getRefBlockHash(): Uint8Array | string;
    getRefBlockHash_asU8(): Uint8Array;
    getRefBlockHash_asB64(): string;
    setRefBlockHash(value: Uint8Array | string): void;

    getExpiration(): number;
    setExpiration(value: number): void;

    clearAuthsList(): void;
    getAuthsList(): Array<authority>;
    setAuthsList(value: Array<authority>): void;
    addAuths(value?: authority, index?: number): authority;

    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): void;

    clearContractList(): void;
    getContractList(): Array<Transaction.Contract>;
    setContractList(value: Array<Transaction.Contract>): void;
    addContract(value?: Transaction.Contract, index?: number): Transaction.Contract;

    getScripts(): Uint8Array | string;
    getScripts_asU8(): Uint8Array;
    getScripts_asB64(): string;
    setScripts(value: Uint8Array | string): void;

    getTimestamp(): number;
    setTimestamp(value: number): void;

    getFeeLimit(): number;
    setFeeLimit(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): raw.AsObject;
    static toObject(includeInstance: boolean, msg: raw): raw.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: raw, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): raw;
    static deserializeBinaryFromReader(message: raw, reader: jspb.BinaryReader): raw;
  }

  export namespace raw {
    export type AsObject = {
      refBlockBytes: Uint8Array | string,
      refBlockNum: number,
      refBlockHash: Uint8Array | string,
      expiration: number,
      authsList: Array<authority.AsObject>,
      data: Uint8Array | string,
      contractList: Array<Transaction.Contract.AsObject>,
      scripts: Uint8Array | string,
      timestamp: number,
      feeLimit: number,
    }
  }
}

export class TransactionInfo extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getFee(): number;
  setFee(value: number): void;

  getBlocknumber(): number;
  setBlocknumber(value: number): void;

  getBlocktimestamp(): number;
  setBlocktimestamp(value: number): void;

  clearContractresultList(): void;
  getContractresultList(): Array<Uint8Array | string>;
  getContractresultList_asU8(): Array<Uint8Array>;
  getContractresultList_asB64(): Array<string>;
  setContractresultList(value: Array<Uint8Array | string>): void;
  addContractresult(value: Uint8Array | string, index?: number): Uint8Array | string;

  getContractAddress(): Uint8Array | string;
  getContractAddress_asU8(): Uint8Array;
  getContractAddress_asB64(): string;
  setContractAddress(value: Uint8Array | string): void;

  hasReceipt(): boolean;
  clearReceipt(): void;
  getReceipt(): ResourceReceipt | undefined;
  setReceipt(value?: ResourceReceipt): void;

  clearLogList(): void;
  getLogList(): Array<TransactionInfo.Log>;
  setLogList(value: Array<TransactionInfo.Log>): void;
  addLog(value?: TransactionInfo.Log, index?: number): TransactionInfo.Log;

  getResult(): TransactionInfo.codeMap[keyof TransactionInfo.codeMap];
  setResult(value: TransactionInfo.codeMap[keyof TransactionInfo.codeMap]): void;

  getResmessage(): Uint8Array | string;
  getResmessage_asU8(): Uint8Array;
  getResmessage_asB64(): string;
  setResmessage(value: Uint8Array | string): void;

  getAssetissueid(): string;
  setAssetissueid(value: string): void;

  getWithdrawAmount(): number;
  setWithdrawAmount(value: number): void;

  getUnfreezeAmount(): number;
  setUnfreezeAmount(value: number): void;

  clearInternalTransactionsList(): void;
  getInternalTransactionsList(): Array<InternalTransaction>;
  setInternalTransactionsList(value: Array<InternalTransaction>): void;
  addInternalTransactions(value?: InternalTransaction, index?: number): InternalTransaction;

  getExchangeReceivedAmount(): number;
  setExchangeReceivedAmount(value: number): void;

  getExchangeInjectAnotherAmount(): number;
  setExchangeInjectAnotherAmount(value: number): void;

  getExchangeWithdrawAnotherAmount(): number;
  setExchangeWithdrawAnotherAmount(value: number): void;

  getExchangeId(): number;
  setExchangeId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionInfo): TransactionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionInfo;
  static deserializeBinaryFromReader(message: TransactionInfo, reader: jspb.BinaryReader): TransactionInfo;
}

export namespace TransactionInfo {
  export type AsObject = {
    id: Uint8Array | string,
    fee: number,
    blocknumber: number,
    blocktimestamp: number,
    contractresultList: Array<Uint8Array | string>,
    contractAddress: Uint8Array | string,
    receipt?: ResourceReceipt.AsObject,
    logList: Array<TransactionInfo.Log.AsObject>,
    result: TransactionInfo.codeMap[keyof TransactionInfo.codeMap],
    resmessage: Uint8Array | string,
    assetissueid: string,
    withdrawAmount: number,
    unfreezeAmount: number,
    internalTransactionsList: Array<InternalTransaction.AsObject>,
    exchangeReceivedAmount: number,
    exchangeInjectAnotherAmount: number,
    exchangeWithdrawAnotherAmount: number,
    exchangeId: number,
  }

  export class Log extends jspb.Message {
    getAddress(): Uint8Array | string;
    getAddress_asU8(): Uint8Array;
    getAddress_asB64(): string;
    setAddress(value: Uint8Array | string): void;

    clearTopicsList(): void;
    getTopicsList(): Array<Uint8Array | string>;
    getTopicsList_asU8(): Array<Uint8Array>;
    getTopicsList_asB64(): Array<string>;
    setTopicsList(value: Array<Uint8Array | string>): void;
    addTopics(value: Uint8Array | string, index?: number): Uint8Array | string;

    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Log.AsObject;
    static toObject(includeInstance: boolean, msg: Log): Log.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Log, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Log;
    static deserializeBinaryFromReader(message: Log, reader: jspb.BinaryReader): Log;
  }

  export namespace Log {
    export type AsObject = {
      address: Uint8Array | string,
      topicsList: Array<Uint8Array | string>,
      data: Uint8Array | string,
    }
  }

  export interface codeMap {
    SUCESS: 0;
    FAILED: 1;
  }

  export const code: codeMap;
}

export class Transactions extends jspb.Message {
  clearTransactionsList(): void;
  getTransactionsList(): Array<Transaction>;
  setTransactionsList(value: Array<Transaction>): void;
  addTransactions(value?: Transaction, index?: number): Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transactions.AsObject;
  static toObject(includeInstance: boolean, msg: Transactions): Transactions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transactions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transactions;
  static deserializeBinaryFromReader(message: Transactions, reader: jspb.BinaryReader): Transactions;
}

export namespace Transactions {
  export type AsObject = {
    transactionsList: Array<Transaction.AsObject>,
  }
}

export class TransactionSign extends jspb.Message {
  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): Transaction | undefined;
  setTransaction(value?: Transaction): void;

  getPrivatekey(): Uint8Array | string;
  getPrivatekey_asU8(): Uint8Array;
  getPrivatekey_asB64(): string;
  setPrivatekey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionSign.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionSign): TransactionSign.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionSign, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionSign;
  static deserializeBinaryFromReader(message: TransactionSign, reader: jspb.BinaryReader): TransactionSign;
}

export namespace TransactionSign {
  export type AsObject = {
    transaction?: Transaction.AsObject,
    privatekey: Uint8Array | string,
  }
}

export class BlockHeader extends jspb.Message {
  hasRawData(): boolean;
  clearRawData(): void;
  getRawData(): BlockHeader.raw | undefined;
  setRawData(value?: BlockHeader.raw): void;

  getWitnessSignature(): Uint8Array | string;
  getWitnessSignature_asU8(): Uint8Array;
  getWitnessSignature_asB64(): string;
  setWitnessSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockHeader.AsObject;
  static toObject(includeInstance: boolean, msg: BlockHeader): BlockHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockHeader;
  static deserializeBinaryFromReader(message: BlockHeader, reader: jspb.BinaryReader): BlockHeader;
}

export namespace BlockHeader {
  export type AsObject = {
    rawData?: BlockHeader.raw.AsObject,
    witnessSignature: Uint8Array | string,
  }

  export class raw extends jspb.Message {
    getTimestamp(): number;
    setTimestamp(value: number): void;

    getTxtrieroot(): Uint8Array | string;
    getTxtrieroot_asU8(): Uint8Array;
    getTxtrieroot_asB64(): string;
    setTxtrieroot(value: Uint8Array | string): void;

    getParenthash(): Uint8Array | string;
    getParenthash_asU8(): Uint8Array;
    getParenthash_asB64(): string;
    setParenthash(value: Uint8Array | string): void;

    getNumber(): number;
    setNumber(value: number): void;

    getWitnessId(): number;
    setWitnessId(value: number): void;

    getWitnessAddress(): Uint8Array | string;
    getWitnessAddress_asU8(): Uint8Array;
    getWitnessAddress_asB64(): string;
    setWitnessAddress(value: Uint8Array | string): void;

    getVersion(): number;
    setVersion(value: number): void;

    getAccountstateroot(): Uint8Array | string;
    getAccountstateroot_asU8(): Uint8Array;
    getAccountstateroot_asB64(): string;
    setAccountstateroot(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): raw.AsObject;
    static toObject(includeInstance: boolean, msg: raw): raw.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: raw, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): raw;
    static deserializeBinaryFromReader(message: raw, reader: jspb.BinaryReader): raw;
  }

  export namespace raw {
    export type AsObject = {
      timestamp: number,
      txtrieroot: Uint8Array | string,
      parenthash: Uint8Array | string,
      number: number,
      witnessId: number,
      witnessAddress: Uint8Array | string,
      version: number,
      accountstateroot: Uint8Array | string,
    }
  }
}

export class Block extends jspb.Message {
  clearTransactionsList(): void;
  getTransactionsList(): Array<Transaction>;
  setTransactionsList(value: Array<Transaction>): void;
  addTransactions(value?: Transaction, index?: number): Transaction;

  hasBlockHeader(): boolean;
  clearBlockHeader(): void;
  getBlockHeader(): BlockHeader | undefined;
  setBlockHeader(value?: BlockHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    transactionsList: Array<Transaction.AsObject>,
    blockHeader?: BlockHeader.AsObject,
  }
}

export class ChainInventory extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<ChainInventory.BlockId>;
  setIdsList(value: Array<ChainInventory.BlockId>): void;
  addIds(value?: ChainInventory.BlockId, index?: number): ChainInventory.BlockId;

  getRemainNum(): number;
  setRemainNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChainInventory.AsObject;
  static toObject(includeInstance: boolean, msg: ChainInventory): ChainInventory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChainInventory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChainInventory;
  static deserializeBinaryFromReader(message: ChainInventory, reader: jspb.BinaryReader): ChainInventory;
}

export namespace ChainInventory {
  export type AsObject = {
    idsList: Array<ChainInventory.BlockId.AsObject>,
    remainNum: number,
  }

  export class BlockId extends jspb.Message {
    getHash(): Uint8Array | string;
    getHash_asU8(): Uint8Array;
    getHash_asB64(): string;
    setHash(value: Uint8Array | string): void;

    getNumber(): number;
    setNumber(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockId.AsObject;
    static toObject(includeInstance: boolean, msg: BlockId): BlockId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockId;
    static deserializeBinaryFromReader(message: BlockId, reader: jspb.BinaryReader): BlockId;
  }

  export namespace BlockId {
    export type AsObject = {
      hash: Uint8Array | string,
      number: number,
    }
  }
}

export class BlockInventory extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<BlockInventory.BlockId>;
  setIdsList(value: Array<BlockInventory.BlockId>): void;
  addIds(value?: BlockInventory.BlockId, index?: number): BlockInventory.BlockId;

  getType(): BlockInventory.TypeMap[keyof BlockInventory.TypeMap];
  setType(value: BlockInventory.TypeMap[keyof BlockInventory.TypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockInventory.AsObject;
  static toObject(includeInstance: boolean, msg: BlockInventory): BlockInventory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockInventory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockInventory;
  static deserializeBinaryFromReader(message: BlockInventory, reader: jspb.BinaryReader): BlockInventory;
}

export namespace BlockInventory {
  export type AsObject = {
    idsList: Array<BlockInventory.BlockId.AsObject>,
    type: BlockInventory.TypeMap[keyof BlockInventory.TypeMap],
  }

  export class BlockId extends jspb.Message {
    getHash(): Uint8Array | string;
    getHash_asU8(): Uint8Array;
    getHash_asB64(): string;
    setHash(value: Uint8Array | string): void;

    getNumber(): number;
    setNumber(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockId.AsObject;
    static toObject(includeInstance: boolean, msg: BlockId): BlockId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockId;
    static deserializeBinaryFromReader(message: BlockId, reader: jspb.BinaryReader): BlockId;
  }

  export namespace BlockId {
    export type AsObject = {
      hash: Uint8Array | string,
      number: number,
    }
  }

  export interface TypeMap {
    SYNC: 0;
    ADVTISE: 1;
    FETCH: 2;
  }

  export const Type: TypeMap;
}

export class Inventory extends jspb.Message {
  getType(): Inventory.InventoryTypeMap[keyof Inventory.InventoryTypeMap];
  setType(value: Inventory.InventoryTypeMap[keyof Inventory.InventoryTypeMap]): void;

  clearIdsList(): void;
  getIdsList(): Array<Uint8Array | string>;
  getIdsList_asU8(): Array<Uint8Array>;
  getIdsList_asB64(): Array<string>;
  setIdsList(value: Array<Uint8Array | string>): void;
  addIds(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Inventory.AsObject;
  static toObject(includeInstance: boolean, msg: Inventory): Inventory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Inventory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Inventory;
  static deserializeBinaryFromReader(message: Inventory, reader: jspb.BinaryReader): Inventory;
}

export namespace Inventory {
  export type AsObject = {
    type: Inventory.InventoryTypeMap[keyof Inventory.InventoryTypeMap],
    idsList: Array<Uint8Array | string>,
  }

  export interface InventoryTypeMap {
    TRX: 0;
    BLOCK: 1;
  }

  export const InventoryType: InventoryTypeMap;
}

export class Items extends jspb.Message {
  getType(): Items.ItemTypeMap[keyof Items.ItemTypeMap];
  setType(value: Items.ItemTypeMap[keyof Items.ItemTypeMap]): void;

  clearBlocksList(): void;
  getBlocksList(): Array<Block>;
  setBlocksList(value: Array<Block>): void;
  addBlocks(value?: Block, index?: number): Block;

  clearBlockHeadersList(): void;
  getBlockHeadersList(): Array<BlockHeader>;
  setBlockHeadersList(value: Array<BlockHeader>): void;
  addBlockHeaders(value?: BlockHeader, index?: number): BlockHeader;

  clearTransactionsList(): void;
  getTransactionsList(): Array<Transaction>;
  setTransactionsList(value: Array<Transaction>): void;
  addTransactions(value?: Transaction, index?: number): Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Items.AsObject;
  static toObject(includeInstance: boolean, msg: Items): Items.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Items, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Items;
  static deserializeBinaryFromReader(message: Items, reader: jspb.BinaryReader): Items;
}

export namespace Items {
  export type AsObject = {
    type: Items.ItemTypeMap[keyof Items.ItemTypeMap],
    blocksList: Array<Block.AsObject>,
    blockHeadersList: Array<BlockHeader.AsObject>,
    transactionsList: Array<Transaction.AsObject>,
  }

  export interface ItemTypeMap {
    ERR: 0;
    TRX: 1;
    BLOCK: 2;
    BLOCKHEADER: 3;
  }

  export const ItemType: ItemTypeMap;
}

export class DynamicProperties extends jspb.Message {
  getLastSolidityBlockNum(): number;
  setLastSolidityBlockNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynamicProperties.AsObject;
  static toObject(includeInstance: boolean, msg: DynamicProperties): DynamicProperties.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DynamicProperties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynamicProperties;
  static deserializeBinaryFromReader(message: DynamicProperties, reader: jspb.BinaryReader): DynamicProperties;
}

export namespace DynamicProperties {
  export type AsObject = {
    lastSolidityBlockNum: number,
  }
}

export class DisconnectMessage extends jspb.Message {
  getReason(): ReasonCodeMap[keyof ReasonCodeMap];
  setReason(value: ReasonCodeMap[keyof ReasonCodeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectMessage): DisconnectMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisconnectMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectMessage;
  static deserializeBinaryFromReader(message: DisconnectMessage, reader: jspb.BinaryReader): DisconnectMessage;
}

export namespace DisconnectMessage {
  export type AsObject = {
    reason: ReasonCodeMap[keyof ReasonCodeMap],
  }
}

export class HelloMessage extends jspb.Message {
  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): core_Discover_pb.Endpoint | undefined;
  setFrom(value?: core_Discover_pb.Endpoint): void;

  getVersion(): number;
  setVersion(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  hasGenesisblockid(): boolean;
  clearGenesisblockid(): void;
  getGenesisblockid(): HelloMessage.BlockId | undefined;
  setGenesisblockid(value?: HelloMessage.BlockId): void;

  hasSolidblockid(): boolean;
  clearSolidblockid(): void;
  getSolidblockid(): HelloMessage.BlockId | undefined;
  setSolidblockid(value?: HelloMessage.BlockId): void;

  hasHeadblockid(): boolean;
  clearHeadblockid(): void;
  getHeadblockid(): HelloMessage.BlockId | undefined;
  setHeadblockid(value?: HelloMessage.BlockId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloMessage.AsObject;
  static toObject(includeInstance: boolean, msg: HelloMessage): HelloMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloMessage;
  static deserializeBinaryFromReader(message: HelloMessage, reader: jspb.BinaryReader): HelloMessage;
}

export namespace HelloMessage {
  export type AsObject = {
    from?: core_Discover_pb.Endpoint.AsObject,
    version: number,
    timestamp: number,
    genesisblockid?: HelloMessage.BlockId.AsObject,
    solidblockid?: HelloMessage.BlockId.AsObject,
    headblockid?: HelloMessage.BlockId.AsObject,
  }

  export class BlockId extends jspb.Message {
    getHash(): Uint8Array | string;
    getHash_asU8(): Uint8Array;
    getHash_asB64(): string;
    setHash(value: Uint8Array | string): void;

    getNumber(): number;
    setNumber(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockId.AsObject;
    static toObject(includeInstance: boolean, msg: BlockId): BlockId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockId;
    static deserializeBinaryFromReader(message: BlockId, reader: jspb.BinaryReader): BlockId;
  }

  export namespace BlockId {
    export type AsObject = {
      hash: Uint8Array | string,
      number: number,
    }
  }
}

export class SmartContract extends jspb.Message {
  getOriginAddress(): Uint8Array | string;
  getOriginAddress_asU8(): Uint8Array;
  getOriginAddress_asB64(): string;
  setOriginAddress(value: Uint8Array | string): void;

  getContractAddress(): Uint8Array | string;
  getContractAddress_asU8(): Uint8Array;
  getContractAddress_asB64(): string;
  setContractAddress(value: Uint8Array | string): void;

  hasAbi(): boolean;
  clearAbi(): void;
  getAbi(): SmartContract.ABI | undefined;
  setAbi(value?: SmartContract.ABI): void;

  getBytecode(): Uint8Array | string;
  getBytecode_asU8(): Uint8Array;
  getBytecode_asB64(): string;
  setBytecode(value: Uint8Array | string): void;

  getCallValue(): number;
  setCallValue(value: number): void;

  getConsumeUserResourcePercent(): number;
  setConsumeUserResourcePercent(value: number): void;

  getName(): string;
  setName(value: string): void;

  getOriginEnergyLimit(): number;
  setOriginEnergyLimit(value: number): void;

  getCodeHash(): Uint8Array | string;
  getCodeHash_asU8(): Uint8Array;
  getCodeHash_asB64(): string;
  setCodeHash(value: Uint8Array | string): void;

  getTrxHash(): Uint8Array | string;
  getTrxHash_asU8(): Uint8Array;
  getTrxHash_asB64(): string;
  setTrxHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmartContract.AsObject;
  static toObject(includeInstance: boolean, msg: SmartContract): SmartContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmartContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmartContract;
  static deserializeBinaryFromReader(message: SmartContract, reader: jspb.BinaryReader): SmartContract;
}

export namespace SmartContract {
  export type AsObject = {
    originAddress: Uint8Array | string,
    contractAddress: Uint8Array | string,
    abi?: SmartContract.ABI.AsObject,
    bytecode: Uint8Array | string,
    callValue: number,
    consumeUserResourcePercent: number,
    name: string,
    originEnergyLimit: number,
    codeHash: Uint8Array | string,
    trxHash: Uint8Array | string,
  }

  export class ABI extends jspb.Message {
    clearEntrysList(): void;
    getEntrysList(): Array<SmartContract.ABI.Entry>;
    setEntrysList(value: Array<SmartContract.ABI.Entry>): void;
    addEntrys(value?: SmartContract.ABI.Entry, index?: number): SmartContract.ABI.Entry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ABI.AsObject;
    static toObject(includeInstance: boolean, msg: ABI): ABI.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ABI, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ABI;
    static deserializeBinaryFromReader(message: ABI, reader: jspb.BinaryReader): ABI;
  }

  export namespace ABI {
    export type AsObject = {
      entrysList: Array<SmartContract.ABI.Entry.AsObject>,
    }

    export class Entry extends jspb.Message {
      getAnonymous(): boolean;
      setAnonymous(value: boolean): void;

      getConstant(): boolean;
      setConstant(value: boolean): void;

      getName(): string;
      setName(value: string): void;

      clearInputsList(): void;
      getInputsList(): Array<SmartContract.ABI.Entry.Param>;
      setInputsList(value: Array<SmartContract.ABI.Entry.Param>): void;
      addInputs(value?: SmartContract.ABI.Entry.Param, index?: number): SmartContract.ABI.Entry.Param;

      clearOutputsList(): void;
      getOutputsList(): Array<SmartContract.ABI.Entry.Param>;
      setOutputsList(value: Array<SmartContract.ABI.Entry.Param>): void;
      addOutputs(value?: SmartContract.ABI.Entry.Param, index?: number): SmartContract.ABI.Entry.Param;

      getType(): SmartContract.ABI.Entry.EntryTypeMap[keyof SmartContract.ABI.Entry.EntryTypeMap];
      setType(value: SmartContract.ABI.Entry.EntryTypeMap[keyof SmartContract.ABI.Entry.EntryTypeMap]): void;

      getPayable(): boolean;
      setPayable(value: boolean): void;

      getStatemutability(): SmartContract.ABI.Entry.StateMutabilityTypeMap[keyof SmartContract.ABI.Entry.StateMutabilityTypeMap];
      setStatemutability(value: SmartContract.ABI.Entry.StateMutabilityTypeMap[keyof SmartContract.ABI.Entry.StateMutabilityTypeMap]): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Entry.AsObject;
      static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Entry;
      static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
    }

    export namespace Entry {
      export type AsObject = {
        anonymous: boolean,
        constant: boolean,
        name: string,
        inputsList: Array<SmartContract.ABI.Entry.Param.AsObject>,
        outputsList: Array<SmartContract.ABI.Entry.Param.AsObject>,
        type: SmartContract.ABI.Entry.EntryTypeMap[keyof SmartContract.ABI.Entry.EntryTypeMap],
        payable: boolean,
        statemutability: SmartContract.ABI.Entry.StateMutabilityTypeMap[keyof SmartContract.ABI.Entry.StateMutabilityTypeMap],
      }

      export class Param extends jspb.Message {
        getIndexed(): boolean;
        setIndexed(value: boolean): void;

        getName(): string;
        setName(value: string): void;

        getType(): string;
        setType(value: string): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Param.AsObject;
        static toObject(includeInstance: boolean, msg: Param): Param.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Param, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Param;
        static deserializeBinaryFromReader(message: Param, reader: jspb.BinaryReader): Param;
      }

      export namespace Param {
        export type AsObject = {
          indexed: boolean,
          name: string,
          type: string,
        }
      }

      export interface EntryTypeMap {
        UNKNOWNENTRYTYPE: 0;
        CONSTRUCTOR: 1;
        FUNCTION: 2;
        EVENT: 3;
        FALLBACK: 4;
      }

      export const EntryType: EntryTypeMap;

      export interface StateMutabilityTypeMap {
        UNKNOWNMUTABILITYTYPE: 0;
        PURE: 1;
        VIEW: 2;
        NONPAYABLE: 3;
        PAYABLE: 4;
      }

      export const StateMutabilityType: StateMutabilityTypeMap;
    }
  }
}

export class InternalTransaction extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  getCallerAddress(): Uint8Array | string;
  getCallerAddress_asU8(): Uint8Array;
  getCallerAddress_asB64(): string;
  setCallerAddress(value: Uint8Array | string): void;

  getTransfertoAddress(): Uint8Array | string;
  getTransfertoAddress_asU8(): Uint8Array;
  getTransfertoAddress_asB64(): string;
  setTransfertoAddress(value: Uint8Array | string): void;

  clearCallvalueinfoList(): void;
  getCallvalueinfoList(): Array<InternalTransaction.CallValueInfo>;
  setCallvalueinfoList(value: Array<InternalTransaction.CallValueInfo>): void;
  addCallvalueinfo(value?: InternalTransaction.CallValueInfo, index?: number): InternalTransaction.CallValueInfo;

  getNote(): Uint8Array | string;
  getNote_asU8(): Uint8Array;
  getNote_asB64(): string;
  setNote(value: Uint8Array | string): void;

  getRejected(): boolean;
  setRejected(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: InternalTransaction): InternalTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InternalTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalTransaction;
  static deserializeBinaryFromReader(message: InternalTransaction, reader: jspb.BinaryReader): InternalTransaction;
}

export namespace InternalTransaction {
  export type AsObject = {
    hash: Uint8Array | string,
    callerAddress: Uint8Array | string,
    transfertoAddress: Uint8Array | string,
    callvalueinfoList: Array<InternalTransaction.CallValueInfo.AsObject>,
    note: Uint8Array | string,
    rejected: boolean,
  }

  export class CallValueInfo extends jspb.Message {
    getCallvalue(): number;
    setCallvalue(value: number): void;

    getTokenid(): string;
    setTokenid(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallValueInfo.AsObject;
    static toObject(includeInstance: boolean, msg: CallValueInfo): CallValueInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CallValueInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallValueInfo;
    static deserializeBinaryFromReader(message: CallValueInfo, reader: jspb.BinaryReader): CallValueInfo;
  }

  export namespace CallValueInfo {
    export type AsObject = {
      callvalue: number,
      tokenid: string,
    }
  }
}

export class DelegatedResourceAccountIndex extends jspb.Message {
  getAccount(): Uint8Array | string;
  getAccount_asU8(): Uint8Array;
  getAccount_asB64(): string;
  setAccount(value: Uint8Array | string): void;

  clearFromaccountsList(): void;
  getFromaccountsList(): Array<Uint8Array | string>;
  getFromaccountsList_asU8(): Array<Uint8Array>;
  getFromaccountsList_asB64(): Array<string>;
  setFromaccountsList(value: Array<Uint8Array | string>): void;
  addFromaccounts(value: Uint8Array | string, index?: number): Uint8Array | string;

  clearToaccountsList(): void;
  getToaccountsList(): Array<Uint8Array | string>;
  getToaccountsList_asU8(): Array<Uint8Array>;
  getToaccountsList_asB64(): Array<string>;
  setToaccountsList(value: Array<Uint8Array | string>): void;
  addToaccounts(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelegatedResourceAccountIndex.AsObject;
  static toObject(includeInstance: boolean, msg: DelegatedResourceAccountIndex): DelegatedResourceAccountIndex.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DelegatedResourceAccountIndex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelegatedResourceAccountIndex;
  static deserializeBinaryFromReader(message: DelegatedResourceAccountIndex, reader: jspb.BinaryReader): DelegatedResourceAccountIndex;
}

export namespace DelegatedResourceAccountIndex {
  export type AsObject = {
    account: Uint8Array | string,
    fromaccountsList: Array<Uint8Array | string>,
    toaccountsList: Array<Uint8Array | string>,
  }
}

export class NodeInfo extends jspb.Message {
  getBeginsyncnum(): number;
  setBeginsyncnum(value: number): void;

  getBlock(): string;
  setBlock(value: string): void;

  getSolidityblock(): string;
  setSolidityblock(value: string): void;

  getCurrentconnectcount(): number;
  setCurrentconnectcount(value: number): void;

  getActiveconnectcount(): number;
  setActiveconnectcount(value: number): void;

  getPassiveconnectcount(): number;
  setPassiveconnectcount(value: number): void;

  getTotalflow(): number;
  setTotalflow(value: number): void;

  clearPeerinfolistList(): void;
  getPeerinfolistList(): Array<NodeInfo.PeerInfo>;
  setPeerinfolistList(value: Array<NodeInfo.PeerInfo>): void;
  addPeerinfolist(value?: NodeInfo.PeerInfo, index?: number): NodeInfo.PeerInfo;

  hasConfignodeinfo(): boolean;
  clearConfignodeinfo(): void;
  getConfignodeinfo(): NodeInfo.ConfigNodeInfo | undefined;
  setConfignodeinfo(value?: NodeInfo.ConfigNodeInfo): void;

  hasMachineinfo(): boolean;
  clearMachineinfo(): void;
  getMachineinfo(): NodeInfo.MachineInfo | undefined;
  setMachineinfo(value?: NodeInfo.MachineInfo): void;

  getCheatwitnessinfomapMap(): jspb.Map<string, string>;
  clearCheatwitnessinfomapMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NodeInfo): NodeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeInfo;
  static deserializeBinaryFromReader(message: NodeInfo, reader: jspb.BinaryReader): NodeInfo;
}

export namespace NodeInfo {
  export type AsObject = {
    beginsyncnum: number,
    block: string,
    solidityblock: string,
    currentconnectcount: number,
    activeconnectcount: number,
    passiveconnectcount: number,
    totalflow: number,
    peerinfolistList: Array<NodeInfo.PeerInfo.AsObject>,
    confignodeinfo?: NodeInfo.ConfigNodeInfo.AsObject,
    machineinfo?: NodeInfo.MachineInfo.AsObject,
    cheatwitnessinfomapMap: Array<[string, string]>,
  }

  export class PeerInfo extends jspb.Message {
    getLastsyncblock(): string;
    setLastsyncblock(value: string): void;

    getRemainnum(): number;
    setRemainnum(value: number): void;

    getLastblockupdatetime(): number;
    setLastblockupdatetime(value: number): void;

    getSyncflag(): boolean;
    setSyncflag(value: boolean): void;

    getHeadblocktimewebothhave(): number;
    setHeadblocktimewebothhave(value: number): void;

    getNeedsyncfrompeer(): boolean;
    setNeedsyncfrompeer(value: boolean): void;

    getNeedsyncfromus(): boolean;
    setNeedsyncfromus(value: boolean): void;

    getHost(): string;
    setHost(value: string): void;

    getPort(): number;
    setPort(value: number): void;

    getNodeid(): string;
    setNodeid(value: string): void;

    getConnecttime(): number;
    setConnecttime(value: number): void;

    getAvglatency(): number;
    setAvglatency(value: number): void;

    getSynctofetchsize(): number;
    setSynctofetchsize(value: number): void;

    getSynctofetchsizepeeknum(): number;
    setSynctofetchsizepeeknum(value: number): void;

    getSyncblockrequestedsize(): number;
    setSyncblockrequestedsize(value: number): void;

    getUnfetchsynnum(): number;
    setUnfetchsynnum(value: number): void;

    getBlockinporcsize(): number;
    setBlockinporcsize(value: number): void;

    getHeadblockwebothhave(): string;
    setHeadblockwebothhave(value: string): void;

    getIsactive(): boolean;
    setIsactive(value: boolean): void;

    getScore(): number;
    setScore(value: number): void;

    getNodecount(): number;
    setNodecount(value: number): void;

    getInflow(): number;
    setInflow(value: number): void;

    getDisconnecttimes(): number;
    setDisconnecttimes(value: number): void;

    getLocaldisconnectreason(): string;
    setLocaldisconnectreason(value: string): void;

    getRemotedisconnectreason(): string;
    setRemotedisconnectreason(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PeerInfo.AsObject;
    static toObject(includeInstance: boolean, msg: PeerInfo): PeerInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PeerInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PeerInfo;
    static deserializeBinaryFromReader(message: PeerInfo, reader: jspb.BinaryReader): PeerInfo;
  }

  export namespace PeerInfo {
    export type AsObject = {
      lastsyncblock: string,
      remainnum: number,
      lastblockupdatetime: number,
      syncflag: boolean,
      headblocktimewebothhave: number,
      needsyncfrompeer: boolean,
      needsyncfromus: boolean,
      host: string,
      port: number,
      nodeid: string,
      connecttime: number,
      avglatency: number,
      synctofetchsize: number,
      synctofetchsizepeeknum: number,
      syncblockrequestedsize: number,
      unfetchsynnum: number,
      blockinporcsize: number,
      headblockwebothhave: string,
      isactive: boolean,
      score: number,
      nodecount: number,
      inflow: number,
      disconnecttimes: number,
      localdisconnectreason: string,
      remotedisconnectreason: string,
    }
  }

  export class ConfigNodeInfo extends jspb.Message {
    getCodeversion(): string;
    setCodeversion(value: string): void;

    getP2pversion(): string;
    setP2pversion(value: string): void;

    getListenport(): number;
    setListenport(value: number): void;

    getDiscoverenable(): boolean;
    setDiscoverenable(value: boolean): void;

    getActivenodesize(): number;
    setActivenodesize(value: number): void;

    getPassivenodesize(): number;
    setPassivenodesize(value: number): void;

    getSendnodesize(): number;
    setSendnodesize(value: number): void;

    getMaxconnectcount(): number;
    setMaxconnectcount(value: number): void;

    getSameipmaxconnectcount(): number;
    setSameipmaxconnectcount(value: number): void;

    getBackuplistenport(): number;
    setBackuplistenport(value: number): void;

    getBackupmembersize(): number;
    setBackupmembersize(value: number): void;

    getBackuppriority(): number;
    setBackuppriority(value: number): void;

    getDbversion(): number;
    setDbversion(value: number): void;

    getMinparticipationrate(): number;
    setMinparticipationrate(value: number): void;

    getSupportconstant(): boolean;
    setSupportconstant(value: boolean): void;

    getMintimeratio(): number;
    setMintimeratio(value: number): void;

    getMaxtimeratio(): number;
    setMaxtimeratio(value: number): void;

    getAllowcreationofcontracts(): number;
    setAllowcreationofcontracts(value: number): void;

    getAllowadaptiveenergy(): number;
    setAllowadaptiveenergy(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfigNodeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ConfigNodeInfo): ConfigNodeInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfigNodeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfigNodeInfo;
    static deserializeBinaryFromReader(message: ConfigNodeInfo, reader: jspb.BinaryReader): ConfigNodeInfo;
  }

  export namespace ConfigNodeInfo {
    export type AsObject = {
      codeversion: string,
      p2pversion: string,
      listenport: number,
      discoverenable: boolean,
      activenodesize: number,
      passivenodesize: number,
      sendnodesize: number,
      maxconnectcount: number,
      sameipmaxconnectcount: number,
      backuplistenport: number,
      backupmembersize: number,
      backuppriority: number,
      dbversion: number,
      minparticipationrate: number,
      supportconstant: boolean,
      mintimeratio: number,
      maxtimeratio: number,
      allowcreationofcontracts: number,
      allowadaptiveenergy: number,
    }
  }

  export class MachineInfo extends jspb.Message {
    getThreadcount(): number;
    setThreadcount(value: number): void;

    getDeadlockthreadcount(): number;
    setDeadlockthreadcount(value: number): void;

    getCpucount(): number;
    setCpucount(value: number): void;

    getTotalmemory(): number;
    setTotalmemory(value: number): void;

    getFreememory(): number;
    setFreememory(value: number): void;

    getCpurate(): number;
    setCpurate(value: number): void;

    getJavaversion(): string;
    setJavaversion(value: string): void;

    getOsname(): string;
    setOsname(value: string): void;

    getJvmtotalmemoery(): number;
    setJvmtotalmemoery(value: number): void;

    getJvmfreememory(): number;
    setJvmfreememory(value: number): void;

    getProcesscpurate(): number;
    setProcesscpurate(value: number): void;

    clearMemorydescinfolistList(): void;
    getMemorydescinfolistList(): Array<NodeInfo.MachineInfo.MemoryDescInfo>;
    setMemorydescinfolistList(value: Array<NodeInfo.MachineInfo.MemoryDescInfo>): void;
    addMemorydescinfolist(value?: NodeInfo.MachineInfo.MemoryDescInfo, index?: number): NodeInfo.MachineInfo.MemoryDescInfo;

    clearDeadlockthreadinfolistList(): void;
    getDeadlockthreadinfolistList(): Array<NodeInfo.MachineInfo.DeadLockThreadInfo>;
    setDeadlockthreadinfolistList(value: Array<NodeInfo.MachineInfo.DeadLockThreadInfo>): void;
    addDeadlockthreadinfolist(value?: NodeInfo.MachineInfo.DeadLockThreadInfo, index?: number): NodeInfo.MachineInfo.DeadLockThreadInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MachineInfo.AsObject;
    static toObject(includeInstance: boolean, msg: MachineInfo): MachineInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MachineInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MachineInfo;
    static deserializeBinaryFromReader(message: MachineInfo, reader: jspb.BinaryReader): MachineInfo;
  }

  export namespace MachineInfo {
    export type AsObject = {
      threadcount: number,
      deadlockthreadcount: number,
      cpucount: number,
      totalmemory: number,
      freememory: number,
      cpurate: number,
      javaversion: string,
      osname: string,
      jvmtotalmemoery: number,
      jvmfreememory: number,
      processcpurate: number,
      memorydescinfolistList: Array<NodeInfo.MachineInfo.MemoryDescInfo.AsObject>,
      deadlockthreadinfolistList: Array<NodeInfo.MachineInfo.DeadLockThreadInfo.AsObject>,
    }

    export class MemoryDescInfo extends jspb.Message {
      getName(): string;
      setName(value: string): void;

      getInitsize(): number;
      setInitsize(value: number): void;

      getUsesize(): number;
      setUsesize(value: number): void;

      getMaxsize(): number;
      setMaxsize(value: number): void;

      getUserate(): number;
      setUserate(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): MemoryDescInfo.AsObject;
      static toObject(includeInstance: boolean, msg: MemoryDescInfo): MemoryDescInfo.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: MemoryDescInfo, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): MemoryDescInfo;
      static deserializeBinaryFromReader(message: MemoryDescInfo, reader: jspb.BinaryReader): MemoryDescInfo;
    }

    export namespace MemoryDescInfo {
      export type AsObject = {
        name: string,
        initsize: number,
        usesize: number,
        maxsize: number,
        userate: number,
      }
    }

    export class DeadLockThreadInfo extends jspb.Message {
      getName(): string;
      setName(value: string): void;

      getLockname(): string;
      setLockname(value: string): void;

      getLockowner(): string;
      setLockowner(value: string): void;

      getState(): string;
      setState(value: string): void;

      getBlocktime(): number;
      setBlocktime(value: number): void;

      getWaittime(): number;
      setWaittime(value: number): void;

      getStacktrace(): string;
      setStacktrace(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DeadLockThreadInfo.AsObject;
      static toObject(includeInstance: boolean, msg: DeadLockThreadInfo): DeadLockThreadInfo.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DeadLockThreadInfo, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DeadLockThreadInfo;
      static deserializeBinaryFromReader(message: DeadLockThreadInfo, reader: jspb.BinaryReader): DeadLockThreadInfo;
    }

    export namespace DeadLockThreadInfo {
      export type AsObject = {
        name: string,
        lockname: string,
        lockowner: string,
        state: string,
        blocktime: number,
        waittime: number,
        stacktrace: string,
      }
    }
  }
}

export interface AccountTypeMap {
  NORMAL: 0;
  ASSETISSUE: 1;
  CONTRACT: 2;
}

export const AccountType: AccountTypeMap;

export interface ReasonCodeMap {
  REQUESTED: 0;
  BAD_PROTOCOL: 2;
  TOO_MANY_PEERS: 4;
  DUPLICATE_PEER: 5;
  INCOMPATIBLE_PROTOCOL: 6;
  NULL_IDENTITY: 7;
  PEER_QUITING: 8;
  UNEXPECTED_IDENTITY: 9;
  LOCAL_IDENTITY: 10;
  PING_TIMEOUT: 11;
  USER_REASON: 16;
  RESET: 17;
  SYNC_FAIL: 18;
  FETCH_FAIL: 19;
  BAD_TX: 20;
  BAD_BLOCK: 21;
  FORKED: 22;
  UNLINKABLE: 23;
  INCOMPATIBLE_VERSION: 24;
  INCOMPATIBLE_CHAIN: 25;
  TIME_OUT: 32;
  CONNECT_FAIL: 33;
  TOO_MANY_PEERS_WITH_SAME_IP: 34;
  UNKNOWN: 255;
}

export const ReasonCode: ReasonCodeMap;

