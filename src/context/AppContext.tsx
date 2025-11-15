'use client';

import axios from 'axios';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { topLeague } from '@/data/country-club/topLeague';
import { userData } from '@/data/country-club/userData';

type AppContextType = {
  handleSelectClub: (club: string) => void;
  refreshUser: () => void;
  user: userData | null;
  loading: boolean;
  error: string | null;
  eng: topLeague | null;
  spain: topLeague | null;
  italy: topLeague | null;
  france: topLeague | null;
  germany: topLeague | null;
  selectedClub: string;
  walletBalance: number;
  setWalletBalance: React.Dispatch<React.SetStateAction<number>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [user, setUser] = useState<userData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedClub, setSelectedClub] = useState<string>('');
  const [eng, setEng] = useState<topLeague | null>(null);
  const [spain, setSpain] = useState<topLeague | null>(null);
  const [italy, setItaly] = useState<topLeague | null>(null);
  const [france, setFrance] = useState<topLeague | null>(null);
  const [germany, setGermany] = useState<topLeague | null>(null);

  const [walletBalance, setWalletBalance] = useState<number>(0);

  const getUser = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }

      const response = await axios.get('https://nest-js-knb6.onrender.com/nenjas', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const england = response.data[0];
      const laLiga = response.data[1];
      const seriaA = response.data[2];
      const leagueOne = response.data[3];
      const bundesliga = response.data[4];
      setFrance(leagueOne);
      setSpain(laLiga);
      setEng(england);
      setItaly(seriaA);
      setGermany(bundesliga);
      console.log('Response from /users/me:', response.data);
      setUser(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching user:', error);
      setError('Failed to fetch user data');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSelectClub = (club: string) => {
    setSelectedClub(club);
    console.log('Selected club:', selectedClub);
  }

  useEffect(() => {
    getUser();
  }, []);

  const refreshUser = () => {
    getUser();
  };

  return (
    <AppContext.Provider
      value={{
        user,
        loading,
        error,
        eng,
        handleSelectClub,
        selectedClub,
        spain,
        italy,
        france,
        germany,
        walletBalance,
        setWalletBalance,
        refreshUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};