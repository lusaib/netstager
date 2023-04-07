import { ObjectTypeWithAnyKeyValues } from "../../utils/commonTypeScriptTypes";

export interface insightType {
  id: string;
  url: string;
  title: string;
  wordCount: number;
  mediaUrls: [string];
  favoriteFlag: boolean;
  createdAt: Date;
}

export const insightTypeCast = (
  val: ObjectTypeWithAnyKeyValues
): insightType => ({
  id: val._id,
  url: val.url,
  title: val.title,
  wordCount: val.wordCount,
  mediaUrls: val.mediaUrls,
  favoriteFlag: val.favoriteFlag,
  createdAt: val.createdAt,
});
