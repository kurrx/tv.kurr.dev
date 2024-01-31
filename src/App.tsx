import '@/App.css'

import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { TooltipProvider } from '@/components'
import { FeaturesProvider, store } from '@/features'
import { useAppViewport } from '@/hooks'

export function App() {
  useAppViewport()

  return (
    <StoreProvider store={store}>
      <FeaturesProvider>
        <TooltipProvider delayDuration={200}>
          <BrowserRouter>
            <main id='content'>
              <Routes>
                <Route path='*' element={null} />
              </Routes>
            </main>
          </BrowserRouter>
        </TooltipProvider>
      </FeaturesProvider>
    </StoreProvider>
  )
}