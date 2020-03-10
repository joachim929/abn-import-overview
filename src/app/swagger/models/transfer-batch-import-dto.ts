/* tslint:disable */
import { RawTransferSerializerDto } from './raw-transfer-serializer-dto';
import { Transfer } from './transfer';
export interface TransferBatchImportDto {
  existingTransfers?: Array<RawTransferSerializerDto>;
  savedTransfers?: Array<Transfer>;
}
