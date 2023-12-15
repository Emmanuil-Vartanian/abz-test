import React, { useRef, useState } from 'react'
import Header from "./components/Header/Header.tsx";
import axios from "axios";

import { Container } from "./style.tsx";

import Banner from "./components/Banner";
import Users from "./components/Users";
import SignUp from "./components/SignUp";
import { GET_USERS } from "api";

export interface GetUsers {
  page: number
  lastPage: boolean
  loading: boolean
  users: Record<string, any>[]
}

export const getUsersInitialState: GetUsers = {
  page: 1,
  lastPage: false,
  loading: false,
  users: []
}

const Home: React.FC = () => {
  const [getUsers, setGetUsers] = useState(getUsersInitialState)
  const [error, setError] = useState<string>('')

  const navigation = {
    top: useRef<HTMLDivElement>(null),
    users: useRef<HTMLDivElement>(null),
    signup: useRef<HTMLDivElement>(null),
  }

  const scrollToNextBlock = (name: 'top' | 'users' | 'signup') => () => {
    if (navigation[name].current) {
      navigation[name].current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getUsersData = async (page: number) => {
    setGetUsers(prev => ({ ...prev, loading: true }))
    try {
      const { data } = await axios.get(GET_USERS.replace(':page', String(page)))

      if (data.success) {
        data.users.sort((a: any, b: any) => b.registration_timestamp - a.registration_timestamp)
        setGetUsers(prev => ({
          ...prev,
          page,
          users: [...prev.users, ...data.users],
          lastPage: page === data.total_pages,
        }))
      }
    } catch (e: any) {
      setError(e.message)
    } finally {
      setGetUsers(prev => ({ ...prev, loading: false }))
    }
  }

  return (
    <>
      <Header scrollToNextBlock={scrollToNextBlock} />
      <Container ref={navigation.top}>
        <main>
          <Banner scrollToNextBlock={scrollToNextBlock} />
          <Users
            usersData={getUsers}
            error={error}
            handleGetUsers={getUsersData}
            navigationRef={navigation.users}
          />
          <SignUp
            handleGetUsers={getUsersData}
            setGetUsers={setGetUsers}
            navigationRef={navigation.signup}
          />
        </main>
      </Container>
    </>
  )
}

export default Home