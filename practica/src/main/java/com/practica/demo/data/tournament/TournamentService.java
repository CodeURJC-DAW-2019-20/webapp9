package com.practica.demo.data.tournament;

import java.util.List;

public interface TournamentService {
	public abstract List<Tournament> getTournaments();
	public abstract boolean createTournament(Tournament tournament);
}
