import { CATEGORIES_ACTION_TYPES, Category } from "./category-types";

import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type fetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMatcher(
  (categories: Category[]): FetchCategoriesSuccess =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories)
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): fetchCategoriesFailed =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);
