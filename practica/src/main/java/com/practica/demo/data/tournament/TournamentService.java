package com.practica.demo.data.tournament;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.practica.demo.data.teamsOnGame.Teams_On_Game;

public interface TournamentService {
	public abstract List<Tournament> getTournaments();
	public abstract boolean createTournament(Tournament tournament);
	public abstract boolean uploadImage(MultipartFile imageFile,int id);
	public abstract byte[] getImage(int id);
	public abstract boolean joinTournament(int idTournament, int idTeam);
	public abstract List<Teams_On_Game> getGamesInTournament(int idTournament);
}
