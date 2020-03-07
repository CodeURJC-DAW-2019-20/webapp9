package com.practica.demo.data.tournament;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.practica.demo.data.game.Game;
import com.practica.demo.data.game.GameRepository;

@Service
public class TournamentServiceImp implements TournamentService{
	
	@Autowired
	private TournamentRepository tournamentRepository;
	
	@Autowired
	private GameRepository gameRepository;
	
	@Override
	public List<Tournament> getTournaments() {
		return tournamentRepository.findAll();
	}

	@Override
	public boolean createTournament(Tournament tournament) {
		try {
			tournamentRepository.save(tournament);
			
			Game newGame = new Game();
			
			newGame.setTournament(tournament);
			
			gameRepository.save(newGame);
			
			return true;
		}catch(Exception e) {
			return false;
		}
	}

}
