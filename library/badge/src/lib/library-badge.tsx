import {
  Card,
  Image,
  ActionIcon,
  Group,
  Text,
  Avatar,
  Badge,
  useMantineTheme,
  rem,
  Tooltip,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

import { IconEye, IconPencil } from '@tabler/icons-react';
import { BadgesQueryField } from '@practera-badges/library/types';

import { ViewCertificateModal } from './components/view-certificate';
import { EditEmailModal } from './components/edit-email';

import classes from './style.module.css';

interface BadgeLayoutProps {
  data: BadgesQueryField;
}

export function BadgeLayout(props: BadgeLayoutProps) {
  const { data } = props;
  const [opened, { open, close }] = useDisclosure(false);
  const [openedEdit, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);
  const [imageSrc, setImageSrc] = useState('');

  const theme = useMantineTheme();

  const handleSelectView = () => {
    open();
    setImageSrc(data.certificate.s3Url);
  };

  return (
    <>
      <ViewCertificateModal opened={opened} close={close} imageSrc={imageSrc} />
      <EditEmailModal opened={openedEdit} close={closeEdit} />
      <Card withBorder padding="lg" radius="md" className={classes.card}>
        <Card.Section mb="sm">
          <Image src={data.certificate.s3Url} alt={data.details} height={180} />
        </Card.Section>

        <Badge w="fit-content" variant="light">
          {data.title}
        </Badge>

        <Text fw={700} className={classes.title} mt="xs">
          {data.details}
        </Text>

        <Group mt="lg" justify="flex-start">
          <Avatar src={data.imageUrl} radius="sm" />
          <div>
            <Text fw={500} size="xs">
              {data.email}
            </Text>
            <Text fz="xs" c="dimmed">
              {data.date}
            </Text>
          </div>
        </Group>

        <Card.Section className={classes.footer}>
          <Group justify="flex-end">
            <Group gap={0}>
              <Tooltip label="Edit">
                <ActionIcon variant="subtle" color="gray" onClick={openEdit}>
                  <IconPencil
                    style={{ width: rem(20), height: rem(20) }}
                    color={theme.colors.yellow[6]}
                    stroke={1.5}
                  />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="View">
                <ActionIcon
                  variant="subtle"
                  color="gray"
                  onClick={handleSelectView}
                >
                  <IconEye
                    style={{ width: rem(20), height: rem(20) }}
                    color={theme.colors.blue[6]}
                    stroke={1.5}
                  />
                </ActionIcon>
              </Tooltip>
            </Group>
          </Group>
        </Card.Section>
      </Card>
    </>
  );
}
