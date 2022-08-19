import { EventEmitter, Type } from '@angular/core';
import { Routes } from '@angular/router';
import { Subject } from 'rxjs';
export declare namespace ABP {
    interface Child {
        localizations?: Localization[];
    }
    interface Localization {
        culture: string;
        resources: LocalizationResource[];
    }
    interface LocalizationResource {
        resourceName: string;
        texts: Record<string, string>;
    }
    interface HasPolicy {
        requiredPolicy?: string;
    }
    type PagedResponse<T> = {
        totalCount: number;
    } & PagedItemsResponse<T>;
    interface PagedItemsResponse<T> {
        items: T[];
    }
    interface PageQueryParams {
        filter?: string;
        sorting?: string;
        skipCount?: number;
        maxResultCount?: number;
    }
    interface Lookup {
        id: string;
        displayName: string;
    }
    interface Nav {
        name: string;
        parentName?: string;
        requiredPolicy?: string;
        order?: number;
        invisible?: boolean;
    }
    interface Tab extends Nav {
        component: Type<any>;
    }
    interface BasicItem {
        id: string;
        name: string;
    }
    interface Option<T> {
        key: Extract<keyof T, string>;
        value: T[Extract<keyof T, string>];
    }
    interface Dictionary<T = any> {
        [key: string]: T;
    }
    type ExtractFromOutput<T extends EventEmitter<any> | Subject<any>> = T extends EventEmitter<infer X> ? X : T extends Subject<infer Y> ? Y : never;
}
