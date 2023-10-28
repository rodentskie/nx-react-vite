import cx from 'clsx';
import { request } from 'graphql-request';
import { useEffect, useState } from 'react';
import {
  Container,
  MantineProvider,
  Paper,
  SimpleGrid,
  createTheme,
} from '@mantine/core';

import { BADGES_QUERY } from '@practera-badges/library/gql';
import {
  BadgesResponse,
  BadgesQueryField,
} from '@practera-badges/library/types';
import { BadgeLayout } from '@practera-badges/library/badge';

import classes from '../styles/container.module.css';

const theme = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === 'responsive' }),
      }),
    }),
  },
});

export const Badges = (): JSX.Element => {
  const gqlUrl =
    import.meta.env.PRACTERA_GQL_URL || 'http://localhost:8080/graphql';

  const [badges, setBadges] = useState<BadgesQueryField[] | []>([]);

  const fetchBadges = async (): Promise<void> => {
    const data = await request<BadgesResponse>({
      url: gqlUrl,
      document: BADGES_QUERY,
      variables: {},
    });

    setBadges(data.getBadges);
  };

  useEffect(() => {
    (async () => {
      await fetchBadges();
    })();
  }, []);

  return (
    <MantineProvider theme={theme}>
      <Container size="responsive">
        <Paper shadow="xs" withBorder p="xl">
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 4 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
          >
            {badges.map((data,index) => {
              return (
                <div key={index}>
                  {' '}
                  <BadgeLayout data={data} />
                </div>
              );
            })}
          </SimpleGrid>
        </Paper>
      </Container>
    </MantineProvider>
  );
};
