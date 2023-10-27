import { Context } from 'koa';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import { dbInstance } from '@api/db';
import {
  BadgesScanResult,
  BadgesField,
  CertificateGetResult,
  CertificatesField,
  UpdateBadgeInput,
} from '@practera-badges/library/types';

export const BadgesWorldResolver = {
  Badge: {
    certificate: async (
      root: BadgesField
    ): Promise<CertificatesField | null> => {
      const certificateId = root.certificate;
      const documentClient = new DocumentClient({ service: dbInstance() });

      const params = {
        TableName: 'certificates',
        Key: {
          id: certificateId,
        },
      };

      const data = await new Promise((resolve, reject) => {
        documentClient.get(params, (err, data) => {
          if (err) {
            reject(err);
          }

          resolve(data);
        });
      });

      const certificate = data as CertificateGetResult;

      return certificate.Item;
    },
  },
  Query: {
    getBadges: async (_: never, filter: any): Promise<BadgesField[] | []> => {
      const documentClient = new DocumentClient({ service: dbInstance() });

      const params = {
        TableName: 'badges',
      };

      const data = await new Promise((resolve, reject) => {
        documentClient.scan(params, (err, data) => {
          if (err) {
            reject(err);
          }

          resolve(data);
        });
      });

      const badges = data as BadgesScanResult;

      return badges.Items;
    },
  },
  Mutation: {
    updateBadge: async (
      _: never,
      data: UpdateBadgeInput,
      ctx: Context
    ) /*: Promise<BadgesField>*/ => {
      // to do
    },
  },
};
