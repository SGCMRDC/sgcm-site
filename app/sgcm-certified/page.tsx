import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';
import CrpStandard from '../../components/CrpStandard';

export const metadata = {
  title: 'The CRP standard | SGCM',
  description:
    'From origin to market, the CRP programme structures and documents the compliance of mining cooperatives until it can be recognised by the most demanding markets.',
};

export default function Page() {
  return (
    <>
      <SiteHeader variant="dark" activeLang="en" enHref="/sgcm-certified" frHref="/fr/sgcm-certified" />
      <CrpStandard lang="en" />
      <SiteFooter lang="en" />
    </>
  );
}
