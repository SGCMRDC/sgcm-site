import { SiteHeader } from '../../../components/SiteHeader';
import { SiteFooter } from '../../../components/SiteFooter';
import CrpStandard from '../../../components/CrpStandard';

export const metadata = {
  title: 'Le standard CRP | SGCM',
  description:
    "De l'origine au marché, le programme CRP structure et documente la conformité des coopératives minières jusqu'à la rendre recevable par les marchés les plus exigeants.",
};

export default function Page() {
  return (
    <>
      <SiteHeader variant="dark" activeLang="fr" enHref="/sgcm-certified" frHref="/fr/sgcm-certified" />
      <CrpStandard lang="fr" />
      <SiteFooter lang="fr" />
    </>
  );
}
