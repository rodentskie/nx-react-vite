import { rem, Menu } from '@mantine/core';
import { IconLogout2, IconSettings } from '@tabler/icons-react';

export function ButtonMenu() {
  return (
    <Menu.Dropdown>
      <Menu.Label>Application</Menu.Label>
      <Menu.Item
        leftSection={
          <IconSettings style={{ width: rem(14), height: rem(14) }} />
        }
      >
        Settings
      </Menu.Item>

      <Menu.Divider />

      <Menu.Label>Danger zone</Menu.Label>

      <Menu.Item
        color="red"
        leftSection={<IconLogout2 style={{ width: rem(14), height: rem(14) }} />}
      >
        Logout
      </Menu.Item>
    </Menu.Dropdown>
  );
}
