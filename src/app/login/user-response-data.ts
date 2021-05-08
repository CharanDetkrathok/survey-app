
export interface userResponseDataInterface {
  LEV_ID: string;
  STD_CODE: string;
  PRENAME_NO: string;
  PRENAME_THAI: string;
  FIRST_NAME_THAI: string;
  LAST_NAME_THAI: string;
  BIRTH_DATE: string;
  MAJOR_NAME_THAI: string;
  MAJOR_NO: string;
  FACUTY_NO: string;
  FACULTY_NAME_THAI: string;
  YEAR_END: string;
  AGE: string;
  CURR_NO: string;
  error_message: string;
  error_message_status: number;
}

export interface userResponseDataEnInterface {
  LEV_ID: string;
  STD_CODE: string;
  PRENAME_NO: string;
  PRENAME_ENG: string;
  FIRST_NAME_ENG: string;
  LAST_NAME_ENG: string;
  BIRTH_DATE: string;
  MAJOR_NAME_ENG: string;
  MAJOR_NO: string;
  FACUTY_NO: string;
  FACULTY_NAME_ENG: string;
  YEAR_END: string;
  AGE: string;
  CURR_NO: string;
  error_message: string;
  error_message_status: number;
}

export interface CheckLanguageBefore {
  error_message: string;
  error_message_status: number;
  FIRST_NAME: string;
}
