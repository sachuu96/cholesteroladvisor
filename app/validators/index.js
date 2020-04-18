// @flow
export const PATTERN_NAME = /[a-z ,.'-]+/;
export const PATTERN_WIGHT = /\d{1,3}/;
export const PATTERN_DOB = /\d{4}\-\d{1,2}\-\d{1,2}/;
export const PATTERN_EMAIL = /\S+@\S+\.\S+/;
export const PATTERN_PASSWORD = /[a-z0-9]{8,}/;
export const PATTERN_FULLNAME = /^$|^[a-zA-ZčČćĆđĐšŠžŽ-]+ [a-zA-ZčČćĆđĐšŠžŽ-]+$/;
export const PATTERN_PHONE = /[0-9]{9,10}/;
export const PATTERN_AGE = /[0-9]/;
export const PATTERN_TC = /[0-9]/;
export const PATTERN_HDL = /[0-9]/;
export const PATTERN_SBP = /[0-9]/;


export const NameValidator = (value: string): boolean => {
  return RegExpValidator(PATTERN_NAME, value);
};

export const WeightValidator = (value: string): boolean => {
  return RegExpValidator(PATTERN_WIGHT, value);
};

export const DOBValidator = (value: string): boolean => {
  return RegExpValidator(PATTERN_DOB, value);
};

export const EmailValidator = (value: string): boolean => {
  return RegExpValidator(PATTERN_EMAIL, value);
};

export const PasswordValidator = (value: string): boolean => {
  return RegExpValidator(PATTERN_PASSWORD, value);
};

export const PhoneNumberValidator = (value: string): boolean => {
  return RegExpValidator(PATTERN_PHONE, value);
};

export const StringValidator = (value: string): boolean => {
  return !!value && value.length > 0;
};
export const AgerValidator = (value: string): boolean => {
  return RegExpValidator(PATTERN_AGE, value);
};
export const TCValidator = (value: string): boolean => {
  return RegExpValidator(PATTERN_TC, value);
};
export const HDLValidator = (value: string): boolean => {
  return RegExpValidator(PATTERN_HDL, value);
};
export const SBPValidator = (value: string): boolean => {
  return RegExpValidator(PATTERN_SBP, value);
};


const RegExpValidator = (regexp, value: string): boolean => {
  return regexp.test(value);
};
