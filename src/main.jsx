import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DataProvider } from "/src/providers/DataProvider";
import { LanguageProvider } from "/src/providers/LanguageProvider";
import { ThemeProvider } from "/src/providers/ThemeProvider";
import { GlobalStateProvider } from "/src/providers/GlobalStateProvider";
import { FeedbacksProvider } from "/src/providers/FeedbacksProvider";
import { WindowProvider } from "/src/providers/WindowProvider";
import App from "/src/components/App.jsx";
import Preloader from "/src/components/Preloader.jsx";
import GlobalClickSound from '/src/components/GlobalClickSound'; // Import GlobalClickSound component

const AppProviders = ({ children }) => (
    <DataProvider>
        <LanguageProvider>
            <FeedbacksProvider>
                <WindowProvider>
                    <ThemeProvider>
                        <GlobalStateProvider>
                            {children}
                        </GlobalStateProvider>
                    </ThemeProvider>
                </WindowProvider>
            </FeedbacksProvider>
        </LanguageProvider>
    </DataProvider>
);

let container = null;

document.addEventListener('DOMContentLoaded', function(event) {
    if (container) return;

    container = document.getElementById('root');
    createRoot(container).render(
        <StrictMode>
            <Preloader>
                <GlobalClickSound> {/* Wrap the AppProviders with GlobalClickSound */}
                    <AppProviders>
                        <App />
                    </AppProviders>
                </GlobalClickSound>
            </Preloader>
        </StrictMode>
    );
});
