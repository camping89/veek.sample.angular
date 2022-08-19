import type { SourceType } from '../enums/source-type.enum';
import type { SentimentValue } from '../enums/sentiment-value.enum';
import { AuditedEntityDto, PagedAndSortedResultRequestDto } from '@app/models';

export interface FeedCreateDto {
  title: string;
  content: string;
  sourceType?: SourceType;
  postedAt?: string;
  like?: number;
  comment?: number;
  share?: number;
  view?: number;
  authorUid: string;
  authorName: string;
  sentimentValue?: SentimentValue;
}

export interface FeedDto extends AuditedEntityDto<string> {
  title: string;
  content: string;
  sourceType?: SourceType;
  postedAt?: string;
  like?: number;
  comment?: number;
  share?: number;
  view?: number;
  authorUid: string;
  authorName: string;
  sentimentValue?: SentimentValue;
}

export interface FeedUpdateDto {
  title: string;
  content: string;
  sourceType?: SourceType;
  postedAt?: string;
  like?: number;
  comment?: number;
  share?: number;
  view?: number;
  authorUid: string;
  authorName: string;
  sentimentValue?: SentimentValue;
}

export interface GetFeedsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  title?: string;
  content?: string;
  sourceType?: SourceType;
  postedAtMin?: string;
  postedAtMax?: string;
  likeMin?: number;
  likeMax?: number;
  commentMin?: number;
  commentMax?: number;
  shareMin?: number;
  shareMax?: number;
  viewMin?: number;
  viewMax?: number;
  authorUid?: string;
  authorName?: string;
  sentimentValue?: SentimentValue;
}
