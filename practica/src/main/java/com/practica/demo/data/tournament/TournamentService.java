package com.practica.demo.data.tournament;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public interface TournamentService {
	public abstract List<Tournament> getTournaments();
	public abstract boolean createTournament(Tournament tournament);
	public abstract boolean uploadImage(MultipartFile imageFile,int id);
	public abstract byte[] getImage(int id);
}
