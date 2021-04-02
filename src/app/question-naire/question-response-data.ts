
//-- ให้สำหรับ รับค่า Response ของคำถามทั้งหมด จากการ Call API
//-- เช่น ( ..._ID_10 คือข้อที่ 10 ) หรือ ( ..._ID_10_VALUE_1 คือคำตอบของข้อ 10 มีค่าเป็น 1 )
export interface questionResponseDataInterface {
  QUESTION_SUB_HEADER: {
    QUESTION_DETAIL_ID_18: string;
    QUESTION_DETAIL_ID_19: string;
    QUESTION_DETAIL_ID_16: string;
    QUESTION_DETAIL_ID_17: string;
    QUESTION_DETAIL_ID_6: string;
    QUESTION_DETAIL_ID_14: string;
    QUESTION_DETAIL_ID_15: string;
    QUESTION_DETAIL_ID_12: string;
    QUESTION_DETAIL_ID_34: string;
    QUESTION_DETAIL_ID_3: string;
    QUESTION_DETAIL_ID_13: string;
    QUESTION_DETAIL_ID_35: string;
    QUESTION_DETAIL_ID_9: string;
    QUESTION_DETAIL_ID_8: string;
    QUESTION_DETAIL_ID_7: string;
    QUESTION_DETAIL_ID_10: string;
    QUESTION_DETAIL_ID_32: string;
    QUESTION_DETAIL_ID_11: string;
    QUESTION_DETAIL_ID_33: string;
    QUESTION_DETAIL_ID_31: string;
  },
  QUIZ_HEADER: string,
  CHOICES_OF_QUESTION: {
    CHOICES_OF_QUESTION_ID_10_VALUE_1: string;
    CHOICES_OF_QUESTION_ID_10_VALUE_3: string;
    CHOICES_OF_QUESTION_ID_10_VALUE_2: string;
    CHOICES_OF_QUESTION_ID_8_VALUE_3: string;
    CHOICES_OF_QUESTION_ID_8_VALUE_1: string;
    CHOICES_OF_QUESTION_ID_8_VALUE_2: string;
    CHOICES_OF_QUESTION_ID_14_VALUE_1_5: string;
    CHOICES_OF_QUESTION_ID_19_VALUE_4: string;
    CHOICES_OF_QUESTION_ID_14_VALUE_1_6: string;
    CHOICES_OF_QUESTION_ID_19_VALUE_3: string;
    CHOICES_OF_QUESTION_ID_19_VALUE_6: string;
    CHOICES_OF_QUESTION_ID_19_VALUE_5: string;
    CHOICES_OF_QUESTION_ID_14_VALUE_1_1: string;
    CHOICES_OF_QUESTION_ID_14_VALUE_1_2: string;
    CHOICES_OF_QUESTION_ID_14_VALUE_1_3: string;
    CHOICES_OF_QUESTION_ID_19_VALUE_2: string;
    CHOICES_OF_QUESTION_ID_14_VALUE_1_4: string;
    CHOICES_OF_QUESTION_ID_19_VALUE_1: string;
    CHOICES_OF_QUESTION_ID_6_VALUE_2: string;
    CHOICES_OF_QUESTION_ID_6_VALUE_1: string;
    CHOICES_OF_QUESTION_ID_15_VALUE_2: string;
    CHOICES_OF_QUESTION_ID_15_VALUE_1: string;
    CHOICES_OF_QUESTION_ID_10_VALUE_5_2: string;
    CHOICES_OF_QUESTION_ID_10_VALUE_5_1: string;
    CHOICES_OF_QUESTION_ID_10_VALUE_5_4: string;
    CHOICES_OF_QUESTION_ID_10_VALUE_5_3: string;
    CHOICES_OF_QUESTION_ID_15_VALUE_3: string;
    CHOICES_OF_QUESTION_ID_10_VALUE_5_5: string;
    CHOICES_OF_QUESTION_ID_17_VALUE_5: string;
    CHOICES_OF_QUESTION_ID_17_VALUE_1: string;
    CHOICES_OF_QUESTION_ID_17_VALUE_2: string;
    CHOICES_OF_QUESTION_ID_17_VALUE_3: string;
    CHOICES_OF_QUESTION_ID_17_VALUE_4: string;
    CHOICES_OF_QUESTION_ID_9_VALUE_1_1: string;
    CHOICES_OF_QUESTION_ID_9_VALUE_1_2: string;
    CHOICES_OF_QUESTION_ID_9_VALUE_1_3: string;
    CHOICES_OF_QUESTION_ID_9_VALUE_1_4: string;
    CHOICES_OF_QUESTION_ID_11_VALUE_6_5: string;
    CHOICES_OF_QUESTION_ID_7_VALUE_1: string;
    CHOICES_OF_QUESTION_ID_7_VALUE_2: string;
    CHOICES_OF_QUESTION_ID_11_VALUE_6_3: string;
    CHOICES_OF_QUESTION_ID_7_VALUE_3: string;
    CHOICES_OF_QUESTION_ID_11_VALUE_6_4: string;
    CHOICES_OF_QUESTION_ID_11_VALUE_6_1: string;
    CHOICES_OF_QUESTION_ID_9_VALUE_2: string;
    CHOICES_OF_QUESTION_ID_11_VALUE_6_2: string;
    CHOICES_OF_QUESTION_ID_11_VALUE_1: string;
    CHOICES_OF_QUESTION_ID_11_VALUE_2: string;
    CHOICES_OF_QUESTION_ID_11_VALUE_5: string;
    CHOICES_OF_QUESTION_ID_11_VALUE_3: string;
    CHOICES_OF_QUESTION_ID_11_VALUE_4: string;
    CHOICES_OF_QUESTION_ID_18_VALUE_1: string;
    CHOICES_OF_QUESTION_ID_3_VALUE_2: string;
    CHOICES_OF_QUESTION_ID_18_VALUE_2: string;
    CHOICES_OF_QUESTION_ID_14_VALUE_2_1: string;
    CHOICES_OF_QUESTION_ID_14_VALUE_2_2: string;
    CHOICES_OF_QUESTION_ID_16_VALUE_1: string;
    CHOICES_OF_QUESTION_ID_3_VALUE_3: string;
    CHOICES_OF_QUESTION_ID_10_VALUE_4_1: string;
    CHOICES_OF_QUESTION_ID_10_VALUE_4_3: string;
    CHOICES_OF_QUESTION_ID_10_VALUE_4_2: string;
    CHOICES_OF_QUESTION_ID_3_VALUE_1: string;
    CHOICES_OF_QUESTION_ID_10_VALUE_4_4: string;
    CHOICES_OF_QUESTION_ID_16_VALUE_2: string;
    CHOICES_OF_QUESTION_ID_16_VALUE_3: string;
    CHOICES_OF_QUESTION_ID_16_VALUE_4: string;
    CHOICES_OF_QUESTION_ID_16_VALUE_5: string;
  },
  question_error_message_status: number,
  LEV_ID: number,
  question_error_message: string,
  SECTION_MAIN_HEADER: {
    SECTION_NAME_ID_1: string;
    SECTION_NAME_ID_2: string;
    SECTION_NAME_ID_3: string;
  },
  CHOICES_OF_ALL_DISTRICT: {
    DISTRICT_NAME: string;
    AMPHUR_NAME: string;
    POSTCODE: string;
    DISTRICT_ID: string;
    AMPHUR_ID: string;
    PROVINCE_ID: string;
    COUNTRY_NAME_ENG: string;
    PROVINCE_NAME: string;
    COUNTRY_NO: string;
  },
  CHOICES_OF_DISTRICT: {
    DISTRICT_NAME: string;
  },
  CHOICES_OF_AMPHUR: {
    AMPHUR_NAME: string;
  },
  CHOICES_OF_PROVINCE: {
    PROVINCE_ID: string;
    PROVINCE_NAME: string;
  },
  CHOICES_OF_POSTCODE: {
    POSTCODE: string;
  }
}

export interface districtInterface {
  DISTRICT_NAME: string;
}

export interface amphurInterface {
  AMPHUR_NAME: string;
}

export interface provinceInterface {
  PROVINCE_ID: string;
  PROVINCE_NAME: string;
}

export interface postcodeInterface {
  POSTCODE: string;
}

export interface districtAllInterface {
  DISTRICT_NAME: string;
  AMPHUR_NAME: string;
  POSTCODE: string;
  DISTRICT_ID: string;
  AMPHUR_ID: string;
  PROVINCE_ID: string;
  COUNTRY_NAME_ENG: string;
  PROVINCE_NAME: string;
  COUNTRY_NO: string;
}
