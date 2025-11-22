import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { BrowsePage } from './components/BrowsePage';
import { CardListingPage } from './components/CardListingPage';
import { TradeProposalPage } from './components/TradeProposalPage';
import { DashboardPage } from './components/DashboardPage';
import { TradeManagementPage } from './components/TradeManagementPage';

type Page = 'home' | 'browse' | 'listing' | 'trade-proposal' | 'dashboard' | 'trade-management';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const navigateTo = (page: string, cardId?: string) => {
    setCurrentPage(page as Page);
    if (cardId) setSelectedCardId(cardId);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
      {currentPage === 'browse' && <BrowsePage onNavigate={navigateTo} />}
      {currentPage === 'listing' && selectedCardId && (
        <CardListingPage cardId={selectedCardId} onNavigate={navigateTo} />
      )}
      {currentPage === 'trade-proposal' && <TradeProposalPage onNavigate={navigateTo} />}
      {currentPage === 'dashboard' && <DashboardPage onNavigate={navigateTo} />}
      {currentPage === 'trade-management' && <TradeManagementPage onNavigate={navigateTo} />}
    </div>
  );
}