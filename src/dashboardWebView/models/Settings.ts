import { DataType } from './../../models/DataType';
import { VersionInfo } from '../../models/VersionInfo';
import { ContentFolder } from '../../models/ContentFolder';
import { ContentType, CustomScript, DraftField, Framework, Snippets, SortingSetting } from '../../models';
import { SortingOption } from './SortingOption';
import { DashboardViewType } from '.';
import { DataFile } from '../../models/DataFile';

export interface Settings { 
  beta: boolean;
  initialized: boolean;
  wsFolder: string; 
  staticFolder: string;
  tags: string[];
  categories: string[];
  openOnStart: boolean | null;
  versionInfo: VersionInfo;
  pageViewType: DashboardViewType | undefined;
  mediaSnippet: string[];
  contentTypes: ContentType[];
  contentFolders: ContentFolder[];
  crntFramework: string;
  framework: Framework | null | undefined;
  draftField: DraftField | null | undefined;
  customSorting: SortingSetting[] | undefined;
  dashboardState: DashboardState;
  scripts: CustomScript[];
  dataFiles: DataFile[] | undefined;
  dataTypes: DataType[] | undefined;
  isBacker: boolean | undefined;
  snippets: Snippets | undefined;
  date: { format: string };
}

export interface DashboardState {
  contents: ContentsViewState;
  media: MediaViewState;
  welcome: WelcomeViewState;
}

export interface ContentsViewState {
  sorting: SortingOption | null | undefined;
  defaultSorting: string | null | undefined;
  tags: string | null | undefined;
}

export interface MediaViewState extends ContentsViewState {
  selectedFolder: string | null | undefined;
  mimeTypes: string[] | null | undefined;
}

export interface WelcomeViewState {
  contentFolders: string[];
}