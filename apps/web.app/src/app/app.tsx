import {
  Group,
  Code,
  ScrollArea,
  rem,
  AppShell,
  Burger,
  Menu,
  Text,
  UnstyledButton,
  Avatar,
} from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconArrowsLeftRight,
  IconTrash,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconSettings,
  IconChevronRight,
} from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

import { UserButton, ButtonMenu } from '@practera-badges/library/user.button';
import { LinksGroup } from '@practera-badges/library/link.group';
import { Logo } from '@practera-badges/library/logo';

import classes from './style.module.css';
import { forwardRef, useRef } from 'react';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Market news',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];

export default function App() {
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  const ref = useRef();
  const UserButtonMenu = (): JSX.Element => {
    return (
      <>
        <Menu withArrow position="right-end">
          <Menu.Target>
            <UserButton
              image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
              name="Harriette Spoonlicker"
              email="hspoonlicker@outlook.com"
            />
          </Menu.Target>

          <ButtonMenu />
        </Menu>
      </>
    );
  };
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between">
            <Logo style={{ width: rem(120) }} />
            <Code fw={700}>v3.1.2</Code>
          </Group>
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
