import { Group, Code, ScrollArea, rem, AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { ActionToggle } from '@practera-badges/library/theme.switch';
import { Logo } from '@practera-badges/library/logo';
import { LinksGroupProps } from '@practera-badges/library/types';
import { LinksGroup } from '@practera-badges/library/link.group';

import classes from './style.module.css';
import { useState } from 'react';

interface DashboardProps {
  UserButtonMenu: () => JSX.Element;
  sideBars: LinksGroupProps[];
}

export function Dashboard(props: DashboardProps) {
  const { sideBars, UserButtonMenu } = props;

  const [slot, setSlot] = useState<React.ReactNode>();

  const links = sideBars.map((item) => (
    <LinksGroup {...item} key={item.label} setSlot={setSlot} />
  ));

  const [opened, { toggle }] = useDisclosure();
  const version = import.meta.env.PRACTERA_VERSION || 'v0.0.1';

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between">
            <Logo style={{ width: rem(120) }} />
            <Code fw={700}>{version}</Code>
          </Group>

          <ActionToggle />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <ScrollArea className={classes.links}>
          <div className={classes.linksInner}>{links}</div>
        </ScrollArea>

        <div className={classes.footer}>
          <UserButtonMenu />
        </div>
      </AppShell.Navbar>
      <AppShell.Main>{slot}</AppShell.Main>
    </AppShell>
  );
}
