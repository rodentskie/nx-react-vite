import { UnstyledButton, Group, Avatar, Text } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

interface UserButtonProps extends ComponentPropsWithoutRef<'button'> {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

export const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon, ...others }: UserButtonProps, ref) => {
    return (
      <UnstyledButton
        ref={ref}
        style={{
          display: 'block',
          width: '100%',
          padding: 'var(--mantine-spacing-md)',
          color:
            'light-dark(var(--mantine-color-black), var(--mantine-color-dark-0))',
          borderRadius: 'var(--mantine-radius-sm)',
        }}
        {...others}
      >
        <Group>
          <Avatar src={image} radius="xl" />

          <div style={{ flex: 1 }}>
            <Text size="sm" fw={500}>
              {name}
            </Text>

            <Text c="dimmed" size="xs">
              {email}
            </Text>
          </div>

          {icon || <IconChevronRight size="1rem" />}
        </Group>
      </UnstyledButton>
    );
  }
);
