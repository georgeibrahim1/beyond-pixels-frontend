import React from 'react'
import { fakeUsers } from '../features/game/data/fakeUsers'
import RankCard from '../components/userCard'

export default function UsersPage() {

    const sortedUsers = 

  return (
    <div>
        {
            sortedUsers.map(() => {
                <RankCard/>
            })
        }
    </div>
  )
}
