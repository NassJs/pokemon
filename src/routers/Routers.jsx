import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import Game from '../pages/game';
import PokemonById from '../pages/pokemonById';

export function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/:id" element={<PokemonById />} />
                <Route exact path="/game" element={<Game />} />
            </Routes>
        </BrowserRouter>
    )
}
