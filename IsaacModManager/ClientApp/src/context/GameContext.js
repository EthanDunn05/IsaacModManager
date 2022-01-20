import React from 'react'

export const GameContext = React.createContext({
   game: null,
   fetchGameData: () => {}
});