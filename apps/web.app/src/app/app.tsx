import {
  Group,
  Code,
  ScrollArea,
  rem,
  AppShell,
  Burger,
  Menu,
} from '@mantine/core';
import { IconNotes } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

import { UserButton, ButtonMenu } from '@practera-badges/library/user.button';
import { LinksGroup } from '@practera-badges/library/link.group';
import { Logo } from '@practera-badges/library/logo';
import { ActionToggle } from '@practera-badges/library/theme.switch';

import classes from './style.module.css';

const mockdata = [
  {
    label: 'Documents',
    icon: IconNotes,
    initiallyOpened: false,
    links: [
      { label: 'Badges', link: '/' },
      { label: 'Certificates', link: '/' },
    ],
  },
];

export default function App() {
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  const UserButtonMenu = (): JSX.Element => {
    return (
      <>
        <Menu withArrow position="right-end">
          <Menu.Target>
            <UserButton
              image="https://media.licdn.com/dms/image/D4D03AQGR2LhT-TJAaw/profile-displayphoto-shrink_800_800/0/1680326670231?e=2147483647&v=beta&t=pwiigNqokawlEOflGcEsE5t3E8B6CYXwPvjFSgFgHcI"
              name="Rodney N. Lingganay"
              email="rodney@practera.com"
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
