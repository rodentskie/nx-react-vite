import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  useComputedColorScheme,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { ComponentPropsWithoutRef, forwardRef, useState } from 'react';

interface UserButtonProps extends ComponentPropsWithoutRef<'button'> {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

export const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon, ...others }: UserButtonProps, ref) => {
    const computedColorScheme = useComputedColorScheme('light', {
      getInitialValueInEffect: true,
    });

    const [isHover, setHover] = useState<boolean>(false);

    const handleMouseHover = () => {
      setHover(!isHover);
    };

    return (
      <UnstyledButton
        ref={ref}
        style={{
          display: 'block',
          width: '100%',
          padding: 'var(--mantine-spacing-md)',
          color:
            computedColorScheme === 'light'
              ? 'var(--mantine-color-black)'
              : 'var(--mantine-color-dark-0)',
          borderRadius: 'var(--mantine-radius-sm)',
          backgroundColor: isHover
            ? computedColorScheme === 'light'
              ? 'var(--mantine-color-gray-0)'
              : 'var(--mantine-color-dark-8)'
            : 'transparent',
        }}
        {...others}
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseHover}
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
