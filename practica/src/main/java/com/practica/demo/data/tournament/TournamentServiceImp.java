package com.practica.demo.data.tournament;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.io.File;
import java.io.FileInputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.practica.demo.Imgs.ImageService;
import com.practica.demo.data.game.Game;
import com.practica.demo.data.game.GameRepository;
import com.practica.demo.data.player.Player;
import com.practica.demo.data.player.PlayerRepository;
import com.practica.demo.data.teams.Team;
import com.practica.demo.data.teams.TeamRepository;
import com.practica.demo.data.teamsOnGame.TeamsOnGameIds;
import com.practica.demo.data.teamsOnGame.Teams_On_Game;
import com.practica.demo.data.teamsOnGame.Teams_On_GameRepository;
import com.practica.demo.data.user.User;
import com.practica.demo.data.user.UserComponent;

@Service
public class TournamentServiceImp implements TournamentService {

	@Autowired
	private TournamentRepository tournamentRepository;

	@Autowired
	private GameRepository gameRepository;

	@Override
	public List<Tournament> getTournaments() {
		return tournamentRepository.findAll();
	}
	@Autowired
	private UserComponent userComponent;

	@Autowired
	private ImageService imgService;
	
	@Autowired
	private PlayerRepository playerRepository;
	
	@Autowired
	private Teams_On_GameRepository teamsOnGameRepository;
	
	@Autowired
	TeamRepository teamRepository;
	
	@Override
	public boolean createTournament(Tournament tournament) {
		try {
			Tournament newTournament = new Tournament(tournament.getNumTeams(), tournament.getName(), tournament.getDescription(), tournament.getLatitude(), tournament.getLongitude());
			
			tournamentRepository.save(newTournament);

			Game newGame = new Game();
			
			Tournament auxTournament = tournamentRepository.findByname(newTournament.getName());

			newGame.setTournament(auxTournament);

			gameRepository.save(newGame);

			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public boolean uploadImage(MultipartFile imageFile, int id) {
		try {
			Optional<Tournament> updated = tournamentRepository.findById(id);
			if (updated.isPresent()) {
				Path imgPath = imgService.saveImagePath("tournament", id, imageFile);
				Tournament updatedTournament = updated.get();
				updatedTournament.setImg(imgPath.toString());
				tournamentRepository.save(updatedTournament);
				return true;
			} else {
				return false;
			}
		} catch (IOException e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public byte[] getImage(int id) {
		Optional<Tournament> aux = tournamentRepository.findById(id);
		if (aux.isPresent()) {
			Tournament tournament = aux.get();
			if (tournament.getImg() != null) {
				Path path = Paths.get(tournament.getImg());
				try {
					return IOUtils.toByteArray( Files.newInputStream(path));
				} catch (IOException e) {
					e.printStackTrace();
					return null;
				}
			} else {
				return null;
			}
		} else {
			return null;
		}
	}
	
	@Override
	public boolean joinTournament(int id) {

		User userJoin = userComponent.getLoggedUser();
		Player playerJoin = playerRepository.findByuser(userJoin);

		if (!playerJoin.getTeam().getName().equals("")) {
			
			Optional<Tournament> tour = tournamentRepository.findById(id);
			
			if (tour.isPresent()) {
				Tournament auxTour = tour.get();
				Game auxGame = gameRepository.findByTournament(auxTour);
			
				List<Game> numGames = gameRepository.findBytournamentIdTournament(auxTour.getIdTournament());
			
				if(auxTour.getNumTeams()>numGames.size()) {
				
					java.util.Date fecha = new java.util.Date();

					Team teamPlayer = teamRepository.findByname(playerJoin.getTeam().getName());		
				
					Teams_On_Game teamOnGame = new Teams_On_Game(teamPlayer.getId(), auxGame.getId_game(), 0, false, "1", String.valueOf(fecha));
					
					TeamsOnGameIds teamOnGameId = new TeamsOnGameIds();
				
					teamOnGameId.setGame_Id_Game(auxGame.getId_game());
				
					teamOnGameId.setTeam_Id_Team(teamPlayer.getId());
				
					teamsOnGameRepository.save(teamOnGame);
					return true;
				}
			}
		}

		return false;
	}

}
