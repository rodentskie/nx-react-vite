export interface CertificatesField {
  id: string;
  s3Url: string;
}

export interface CertificateGetResult {
  Item: CertificatesField;
}
