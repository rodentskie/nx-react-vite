import { Modal, Autocomplete, Loader, Button, Group } from '@mantine/core';
import { IconDeviceFloppy } from '@tabler/icons-react';
import { useState, useRef } from 'react';

interface IProps {
  opened: boolean;
  close: () => void;
}

export function EditEmailModal({ opened, close }: IProps) {
  const timeoutRef = useRef<number>(-1);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);

  const handleChange = (val: string) => {
    window.clearTimeout(timeoutRef.current);
    setValue(val);
    setData([]);

    if (val.trim().length === 0 || val.includes('@')) {
      setLoading(false);
    } else {
      setLoading(true);
      timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        setData(
          ['gmail.com', 'outlook.com', 'yahoo.com'].map(
            (provider) => `${val}@${provider}`
          )
        );
      }, 1000);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Update Email"
      centered
      size={'md'}
    >
      <Autocomplete
        value={value}
        data={data}
        onChange={handleChange}
        rightSection={loading ? <Loader size="1rem" /> : null}
        label="Email"
        placeholder="Your email"
      />

      <Group pt={10} justify="flex-end">
        <Button leftSection={<IconDeviceFloppy size={14} />} >
          Save
        </Button>
      </Group>
    </Modal>
  );
}
