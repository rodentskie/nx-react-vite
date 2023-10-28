import { Group, Code, ScrollArea, rem, AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { ActionToggle } from '@practera-badges/library/theme.switch';
import { Logo } from '@practera-badges/library/logo';
import classes from './style.module.css';

interface DashboardProps {
  links: JSX.Element[];
  UserButtonMenu: () => JSX.Element;
}

export function Dashboard(props: DashboardProps) {
  const { links, UserButtonMenu } = props;

  const [opened, { toggle }] = useDisclosure();

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
            <Code fw={700}>v3.1.2</Code>
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
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}
