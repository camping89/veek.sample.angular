
import { Injectable } from '@angular/core';
import { FeedCreateDto, FeedDto, FeedUpdateDto, GetFeedsInput, PagedResultDto } from '@app/models';
import { RestService } from '@app/services';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  apiName = 'Feed';

  create = (input: FeedCreateDto) =>
    this.restService.request<any, FeedDto>({
      method: 'POST',
      url: '/api/app/feeds',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/feeds/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, FeedDto>({
      method: 'GET',
      url: `/api/app/feeds/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: GetFeedsInput) =>
    this.restService.request<any, PagedResultDto<FeedDto>>({
      method: 'GET',
      url: '/api/app/feeds',
      params: { filterText: input.filterText, title: input.title, content: input.content, sourceType: input.sourceType, postedAtMin: input.postedAtMin, postedAtMax: input.postedAtMax, likeMin: input.likeMin, likeMax: input.likeMax, commentMin: input.commentMin, commentMax: input.commentMax, shareMin: input.shareMin, shareMax: input.shareMax, viewMin: input.viewMin, viewMax: input.viewMax, authorUid: input.authorUid, authorName: input.authorName, sentimentValue: input.sentimentValue, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: FeedUpdateDto) =>
    this.restService.request<any, FeedDto>({
      method: 'PUT',
      url: `/api/app/feeds/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
