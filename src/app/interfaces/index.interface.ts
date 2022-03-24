export interface News {
  meta: Meta;
  data: Articule[];
}

export interface Articule {
  uuid:            string;
  title:           string;
  description:     string;
  keywords:        string;
  snippet:         string;
  url:             string;
  image_url:       string;
  language:        string;
  published_at:    Date;
  source:          string;
  categories:      string[];
  relevance_score?: string;
  locale:          string;
}

export interface Meta {
  found:    number;
  returned: number;
  limit:    number;
  page:     number;
}

export interface categories {
  name: string;
  key: string;
}
