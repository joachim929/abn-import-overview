/* tslint:disable */
import { RawTransferSerializerDto } from './raw-transfer-serializer-dto';
import { TransferMutationDto } from './transfer-mutation-dto';
export interface TransferBatchImportDto {
  existingTransfers?: Array<RawTransferSerializerDto>;
  savedTransfers?: Array<TransferMutationDto>;
}
