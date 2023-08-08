/**
 * Intervengine Application API V1Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema, string } from '../schema';
import { RESPONSEUICONFIGS, rESPONSEUICONFIGSSchema } from './rESPONSEUICONFIGS';

export interface UiConfigs1 {
  rESPONSEUICONFIGS?: RESPONSEUICONFIGS;
  sHOWLONGDESCRIPTION?: boolean;
  sHOWSHORTDESCRIPTION?: boolean;
  tEMPLATE?: string;
}

export const uiConfigs1Schema: Schema<UiConfigs1> = object({
  rESPONSEUICONFIGS: [
    'RESPONSE_UI_CONFIGS',
    optional(lazy(() => rESPONSEUICONFIGSSchema)),
  ],
  sHOWLONGDESCRIPTION: ['SHOW_LONG_DESCRIPTION', optional(boolean())],
  sHOWSHORTDESCRIPTION: ['SHOW_SHORT_DESCRIPTION', optional(boolean())],
  tEMPLATE: ['TEMPLATE', optional(string())],
});
