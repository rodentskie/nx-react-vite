import { Menu } from '@mantine/core';
import { IconNotes } from '@tabler/icons-react';

import { UserButton, ButtonMenu } from '@practera-badges/library/user.button';
import { LinksGroup } from '@practera-badges/library/link.group';
import { Dashboard } from '@practera-badges/library/dashboard';

const sideBars = [
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
  const links = sideBars.map((item) => (
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

  return <Dashboard links={links} UserButtonMenu={UserButtonMenu} />;
}
