# AceBattleBet
 
## Introduction

Beta version of betting web application for AB (Ace Battle) Association.
- v0.2 - added mobile view, improved ux and added more logical algorithms with bets.
- v0.3 - implemented web sockets for all kind of bets.

### At the moment there are several bet types implemented:
- Bet on the winner of the match
- Bet on the difference in seconds between the winner and the loser
### Another features: 
- User registration / authorization
- Players/Matches/Competitions using own api
- User statistics / bet history / profile
- Coefficients are counted by a special formula
- Balance can be added per free;

## What in prospective?
- Rewrite on nestJs
- WebSockets communication for udating bets coefs on all connected clients.
- Results when a match was finished, update users balance after depend on the result of the match.

## Installation
- Clone the repository
- Install dependencies: npm i;
- Run the server: npm run develop;
- Run the client: npm run dev;
- Open http://localhost:3000 in your browser;

## Technologies

### Client:
- React | NextJs
- TypeScript
- Redux Toolkit | RTK Query
- MUI | scss
- React Hook Form / yup
### Server: 
- Strapi

