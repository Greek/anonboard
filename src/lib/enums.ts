export enum PinboardErrors {
  RATELIMITED,
  MISSING_TITLE,
  MISSING_CONTENT,
  TITLE_TOO_LONG,
  CONTENT_TOO_LONG,
  POST_NOT_FOUND,
  POST_READONLY,
  EDIT_CODE_INVALID,
  INVALID_YEAR,
  INVALID_REPORT_REASON,
  TEAPOT = 69,
}

export enum StudentYears {
  FRESHMAN = 1,
  SOPHOMORE = 2,
  JUNIOR = 3,
  SENIOR = 4,
}

export enum ReportReason {
  DOXXING_PRIVATE_INFO,
  HATE_SPEECH,
  THREAT_AGAINST_OTHERS,
  UNCOMFORTABLE,
}
