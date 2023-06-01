import viteLogo from '../assets/logos/viteLogo.svg';
import typescriptLogo from '../assets/logos/typescript.svg';
import eslintLogo from '../assets/logos/eslint.svg';
import prettierLogo from '../assets/logos/prettier.svg';
import tailwindLogo from '../assets/logos/tailwind-css.svg';

const Footer = () => {
  return (
    <footer className="fixed left-0 right-0 bottom-0 bg-gray-200 text-center">
      <div className="p-3 font-normal text-gray-700 flex max-md:justify-center">
        <img src={viteLogo} alt="..." className="h-6 mx-2" />
        <img src={typescriptLogo} alt="..." className="h-6 mx-2" />
        <img src={eslintLogo} alt="..." className="h-6 mx-2" />
        <img src={prettierLogo} alt="..." className="h-6 mx-2" />
        <img src={tailwindLogo} alt="..." className="h-6 mx-2" />
        <div className="flex max-md:hidden md:ml-auto">
          <p className="mx-2">© 2023 Michael Saucedo</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
