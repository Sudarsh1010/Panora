import { IContactMapper } from '@ticketing/contact/types';
import { ZendeskContactInput, ZendeskContactOutput } from './types';
import {
  UnifiedContactInput,
  UnifiedContactOutput,
} from '@ticketing/contact/types/model.unified';

export class ZendeskContactMapper implements IContactMapper {
  desunify(
    source: UnifiedContactInput,
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): ZendeskContactInput {
    return;
  }

  unify(
    source: ZendeskContactOutput | ZendeskContactOutput[],
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): UnifiedContactOutput | UnifiedContactOutput[] {
    if (!Array.isArray(source)) {
      return this.mapSingleContactToUnified(source, customFieldMappings);
    }
    return source.map((ticket) =>
      this.mapSingleContactToUnified(ticket, customFieldMappings),
    );
  }

  private mapSingleContactToUnified(
    ticket: ZendeskContactOutput,
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): UnifiedContactOutput {
    return;
  }
}
