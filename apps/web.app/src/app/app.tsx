import { Menu } from '@mantine/core';
import { IconNotes } from '@tabler/icons-react';

import { UserButton, ButtonMenu } from '@practera-badges/library/user.button';
import { Dashboard } from '@practera-badges/library/dashboard';
import { SEO } from '@practera-badges/library/seo';
import { LinksGroupProps } from '@practera-badges/library/types';

import { Badges, Certificates } from '../pages';

const sideBars: LinksGroupProps[] = [
  {
    label: 'Documents',
    icon: IconNotes,
    initiallyOpened: false,
    links: [
      { label: 'Badges', link: '/', view: <Badges /> },
      { label: 'Certificates', link: '/', view: <Certificates /> },
    ],
  },
];

export default function App() {
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

  return (
    <>
      <SEO
        title="Dashboard | Practera"
        description="Manage documents for Practera, like badges and certificates."
        image="https://go.practera.com/hubfs/Practera_Logo_Primary_RGB%20(1).png"
        url="http://localhost:4200"
        keywords="Practera;Badges;Certificates"
        lang="en"
      />

      <Dashboard sideBars={sideBars} UserButtonMenu={UserButtonMenu} />
    </>
  );
}
