package org.tron.core.net.node;

import java.util.Deque;
import java.util.List;
import org.tron.core.Sha256Hash;
import org.tron.core.capsule.BlockCapsule;
import org.tron.core.capsule.BlockCapsule.BlockId;
import org.tron.core.capsule.TransactionCapsule;
import org.tron.core.exception.BadBlockException;
import org.tron.core.exception.UnReachBlockException;
import org.tron.core.exception.ValidateSignatureException;
import org.tron.core.net.message.Message;
import org.tron.core.net.message.MessageTypes;

public interface NodeDelegate {

  void handleBlock(BlockCapsule block) throws ValidateSignatureException, BadBlockException;

  void handleTransaction(TransactionCapsule trx) throws ValidateSignatureException;

  List<BlockId> getLostBlockIds(List<BlockId> blockChainSummary) throws UnReachBlockException;

  Deque<BlockId> getBlockChainSummary(BlockId beginBLockId, List<BlockId> blockIds);

  Message getData(Sha256Hash msgId, MessageTypes type);

  void syncToCli();

  long getBlockTime(BlockId id);

  BlockId getHeadBlockId();

  boolean contain(Sha256Hash hash, MessageTypes type);

  boolean containBlock(BlockId id);

  boolean containBlockInMainChain(BlockId id);

  BlockCapsule getGenesisBlock();

}
