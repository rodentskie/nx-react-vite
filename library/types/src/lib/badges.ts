export interface BadgesField {
  id: string;
  title: string;
  details: string;
  imageUrl: string;
  date: string;
  email: string;
  certificate: string;
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
