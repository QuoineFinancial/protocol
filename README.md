# Tron Protocol TypeScript

The typed binding for [Tron Protocol](https://github.com/tronprotocol/protocol), which is generated using [protoc-gen-ts](https://github.com/improbable-eng/ts-protoc-gen).

## Usage

### Transaction builder

You might need `Base58Check` encoder/decoder from [bs58check](https://www.npmjs.com/package/bs58check) and `Any` message from [google-protobuf](https://www.npmjs.com/package/google-protobuf).

```typescript
import base58check from 'bs58check';
import { TransferContract, Transaction } from 'tron-protocol-ts';
import { Any } from 'google-protobuf/google/protobuf/any_pb';

const to = 'TAEYS2U1AiDf7EEvRonmsxCTgPJMRjneJJ';
const from = 'TDAcZbH7V1vNyb26jaqMuhck4NP6VG87tE';
const amount = 1; // in SUN, 1 TRX = 1,000,000 SUN

const transferContract = new TransferContract();
transferContract.setToAddress(base58check.decode(to));
transferContract.setOwnerAddress(base58check.decode(from));
transferContract.setAmount(amount);

const param = new Any();
param.pack(transferContract.serializeBinary(), "protocol.TransferContract");

const contract = new Transaction.Contract();
contract.setType(Transaction.Contract.ContractType.TRANSFERCONTRACT);
contract.setParameter(param);

const rawData = new Transaction.raw();
rawData.addContract(contract);

const transaction = new Transaction();
transaction.setRawData(rawData);
```

### Serialize

Given `transaction`, to get the transaction hex

```typescript
const rawTransaction = Buffer
  .from(transaction.serializeBinary())
  .toString('hex');
```

### Deserialize

Given `rawTransaction` in hex form, to get the `Transaction`

```typescript
import { TransferContract, Transaction } from 'tron-protocol-ts';

Transaction.deserializeBinary(Buffer.from(rawTransaction, 'hex'));
```

If you need to read the contract inside

```typescript
transaction.getRawData().getContractList().forEach((contract) => {
  switch (contract.getType()) {
    case Transaction.Contract.ContractType.TRANSFERCONTRACT:
      const param = TransferContract.deserializeBinary(contract.getParameter().getValue() as Uint8Array);
      const amount = param.getAmount();
      const toAddress = base58check.encode(param.getToAddress());
      const ownerAddress = base58check.encode(param.getOwnerAddress());

    // Handle other kinds of Transaction.Contract.ContractType if you need it
  }
});
```
