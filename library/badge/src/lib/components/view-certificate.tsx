import { Modal, Image } from '@mantine/core';

interface IProps {
  opened: boolean;
  close: () => void;
  imageSrc: string;
}

export function ViewCertificateModal({ opened, close, imageSrc }: IProps) {
  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Certificate"
      centered
      size={'xl'}
    >
      <Image radius="md" src={imageSrc} />
    </Modal>
  );
}
