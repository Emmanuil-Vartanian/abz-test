import React, { RefObject, SyntheticEvent, useEffect, useState } from 'react'
import { CircularProgress, Tooltip, Typography } from "@mui/material";

import { CardBlock, CardImage, TypographyCut, UsersBlock, UsersContainer } from "./style.tsx";

import Button from "components/Button";
import defaultUserAvatar from 'assets/images/defaultUserAvatar.png'
import { GetUsers } from "../../Home.tsx";

interface UsersProps {
  usersData: GetUsers
  error: string
  handleGetUsers: (page: number) => void
  navigationRef: RefObject<HTMLDivElement>
}

const Users: React.FC<UsersProps> = ({
  usersData,
  error,
  handleGetUsers,
  navigationRef
}) => {
  const [errorAvatar, setErrorAvatar] = useState<number[]>([])

  useEffect(() => {
    handleGetUsers(usersData.page)
  }, [])

  const handleNextPage = () => {
    handleGetUsers(usersData.page + 1)
  }

  const onErrorImage = (id: number) => (e: SyntheticEvent) => {
    if (e.type === 'error') {
      setErrorAvatar(prev => [...prev, id])
    }
  }

  return (
    <UsersContainer ref={navigationRef}>
      <Typography variant={'h1'}>Working with GET request</Typography>
      <UsersBlock>
        {usersData.users.map((user) => (
          <CardBlock key={user.id}>
            <CardImage
              src={errorAvatar.includes(user.id) ? defaultUserAvatar : user.photo}
              alt={user.name}
              onError={onErrorImage(user.id)}
            />
            <Tooltip title={user.name}>
              <TypographyCut variant="h5" sx={{ margin: '20px 0' }}>
                {user.name}
              </TypographyCut>
            </Tooltip>
            <TypographyCut variant="h5">
              {user.position}
            </TypographyCut>
            <Tooltip title={user.email}>
              <TypographyCut variant="h5">
                {user.email}
              </TypographyCut>
            </Tooltip>
            <Typography variant="h5">
              {user.phone}
            </Typography>
          </CardBlock>
        ))}
      </UsersBlock>
      {error || null}
      {!error && !usersData.lastPage ? !usersData.loading ?
        <Button text={'Show more'} onClick={handleNextPage} /> : <CircularProgress /> : null}
    </UsersContainer>
  )
}

export default Users