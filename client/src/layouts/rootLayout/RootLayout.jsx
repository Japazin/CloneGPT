import React  from "react";
import { Link, Outlet } from "react-router";
import "./rootLayout.css";
import {
  ClerkProvider,
  SignedIn,
  UserButton,
} from "@clerk/clerk-react";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const queryClient = new QueryClient()


const RootLoayout = () => {
  // const [showBlackScreen, setShowBlackScreen] = useState(false);

  // Função para prevenir o comportamento de impressão, captura de tela e clique direito
  // const preventActions = (e) => {
  //   console.log(e);

    // Bloquear teclas como F12 (Ferramentas de Desenvolvedor), PrintScreen, Ctrl + P (impressão)
    // if (
    //   e.key === "F12" || // Detecta F12
    //   (e.ctrlKey && e.key === "p") || // Bloqueia Ctrl + P
    //   e.key === "PrintScreen" || // Bloqueia PrintScreen
    //   e.keyCode === 44 || // Outra forma de capturar PrintScreen (keyCode)
    //   e.key === "Meta" // Bloqueia a tecla Win (Meta)
    // ) {
    //   e.preventDefault();
    //   setShowBlackScreen(true); // Ativa a tela preta
    // }

    // Bloquear clique direito
    // if (e.type === 'contextmenu') {
    //   e.preventDefault();
    // }
  // };

  // Função para esconder a tela preta
  // const hideBlackScreen = () => {
  //   setShowBlackScreen(false);
  // };

  // Adiciona o evento para prevenir ações de impressão, captura de tela e clique direito
  // useEffect(() => {
  //   document.addEventListener('keydown', preventActions); // Previne ações de teclado
  //   document.addEventListener('contextmenu', preventActions); // Previne clique direito

  //   // Remove os eventos quando o componente for desmontado
  //   return () => {
  //     document.removeEventListener('keydown', preventActions);
  //     document.removeEventListener('contextmenu', preventActions);
  //   };
  // }, []);

  return (

      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <QueryClientProvider client={queryClient}>
        <div className="rootLayout">
    
          <header>
            <Link to="/" className="logo">
              <img src="/logo.png" alt="" />
              <span>JAP IA</span>
            </Link>
            <div className="user">
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          <main>
            <Outlet />
          </main>
        </div>
      </QueryClientProvider>
      </ClerkProvider>
  );
};

export default RootLoayout;
