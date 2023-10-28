export interface BadgesField {
  id: string;
  title: string;
  details: string;
  imageUrl: string;
  date: string;
  email: string;
  certificateId: string;
}

export interface BadgesScanResult {
  Items: BadgesField[];
  Count: number;
  ScannedCount: number;
}

export interface UpdateBadgeInput {
  input: {
    id: string;
    title: string;
    details: string;
    imageUrl: string;
    date: string;
    email: string;
    certificateId: string;
  };
}

export interface BadgesQueryField {
  id: string;
  title: string;
  details: string;
  imageUrl: string;
  date: string;
  email: string;
  certificate: {
    id: string;
    s3Url: string;
  };
}

export interface BadgesResponse {
  getBadges: BadgesQueryField[];
}
