/**
 * Intervengine Application API V1Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  RESPONSEUICONFIGS1,
  rESPONSEUICONFIGS1Schema,
} from './rESPONSEUICONFIGS1';

export interface UiConfigs2 {
  cARDCONTENTTYPE?: string;
  cARDLAYOUTTYPE?: string;
  cARDTHEME?: string;
  eNDBUTTONLABEL?: string;
  rESPONSEUICONFIGS?: RESPONSEUICONFIGS1[];
  sTARTBUTTONLABEL?: string;
  sTARTBUTTONPOSITION?: string;
  tEMPLATE?: string;
}

export const uiConfigs2Schema: Schema<UiConfigs2> = object({
  cARDCONTENTTYPE: ['CARD_CONTENT_TYPE', optional(string())],
  cARDLAYOUTTYPE: ['CARD_LAYOUT_TYPE', optional(string())],
  cARDTHEME: ['CARD_THEME', optional(string())],
  eNDBUTTONLABEL: ['END_BUTTON_LABEL', optional(string())],
  rESPONSEUICONFIGS: [
    'RESPONSE_UI_CONFIGS',
    optional(array(lazy(() => rESPONSEUICONFIGS1Schema))),
  ],
  sTARTBUTTONLABEL: ['START_BUTTON_LABEL', optional(string())],
  sTARTBUTTONPOSITION: ['START_BUTTON_POSITION', optional(string())],
  tEMPLATE: ['TEMPLATE', optional(string())],
});
