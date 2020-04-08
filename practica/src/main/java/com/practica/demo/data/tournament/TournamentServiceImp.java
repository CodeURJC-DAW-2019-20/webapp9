package com.practica.demo.data.tournament;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.practica.demo.Imgs.ImageService;
import com.practica.demo.data.game.Game;
import com.practica.demo.data.game.GameRepository;
import com.practica.demo.data.play.Play;
import com.practica.demo.data.player.PlayerRepository;
import com.practica.demo.data.teams.Team;
import com.practica.demo.data.teams.TeamRepository;
import com.practica.demo.data.teamsOnGame.TeamsOnGameIds;
import com.practica.demo.data.teamsOnGame.Teams_On_Game;
import com.practica.demo.data.teamsOnGame.Teams_On_GameRepository;
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
	public Integer createTournament(Tournament tournament) {
		try {
			Tournament newTournament = new Tournament(tournament.getNumTeams(), tournament.getName(), tournament.getDescription(), tournament.getLatitude(), tournament.getLongitude());
			
			tournamentRepository.save(newTournament);

			Game newGame = new Game();
			
			Tournament auxTournament = tournamentRepository.findByname(newTournament.getName());

			newGame.setTournament(auxTournament);

			gameRepository.save(newGame);

			return auxTournament.getIdTournament();
		} catch (Exception e) {
			return null;
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
	public boolean joinTournament(int id, Team team) {

			
			Optional<Tournament> tour = tournamentRepository.findById(id);
			
			if (tour.isPresent()) {
				Tournament auxTour = tour.get();
				Game auxGame = gameRepository.findByTournament(auxTour);
			
				List<Game> numGames = gameRepository.findBytournamentIdTournament(auxTour.getIdTournament());
			
				if(auxTour.getNumTeams()>numGames.size()) {
				
					java.util.Date fecha = new java.util.Date();

					Team teamPlayer = teamRepository.findByname(team.getName());		
				
					Teams_On_Game teamOnGame = new Teams_On_Game(teamPlayer.getId(), auxGame.getId_game(), 0, false, "1", String.valueOf(fecha));
					
					TeamsOnGameIds teamOnGameId = new TeamsOnGameIds();
				
					teamOnGameId.setGame_Id_Game(auxGame.getId_game());
				
					teamOnGameId.setTeam_Id_Team(teamPlayer.getId());
				
					teamsOnGameRepository.save(teamOnGame);
					return true;
				}
			}

		return false;
	}

	@Override
	public List<Play> getGamesInTournament(int idTournament) {
		List<Play> playList= new ArrayList<Play>();
		if (tournamentRepository.findById(idTournament).isPresent()) {
			List<Game> gameList = gameRepository.findBytournamentIdTournament(idTournament);
			for (Game aux : gameList) {
				List<Teams_On_Game> listTeamsOnGame = teamsOnGameRepository.findGameIdGame(aux.getId_game());
				Play auxPlay = new Play();
				Teams_On_Game teamsOnGame = listTeamsOnGame.get(0);
				auxPlay.setRound(teamsOnGame.getRound());
				auxPlay.setDate(teamsOnGame.getDate());
				Team auxTeam = teamRepository.findByidTeam(teamsOnGame.getTeamIdTeam());
				auxPlay.setElo1(auxTeam.getElo());
				auxPlay.setName1(auxTeam.getName());
				if (listTeamsOnGame.size()==2) {
					teamsOnGame = listTeamsOnGame.get(1);
					auxTeam = teamRepository.findByidTeam(teamsOnGame.getTeamIdTeam());
					auxPlay.setElo2(auxTeam.getElo());
					auxPlay.setName2(auxTeam.getName());
					if(teamsOnGame.isWinner()) {
						auxPlay.setNameWinner(auxTeam.getName());
					}else {
						auxPlay.setNameWinner(auxPlay.getName1());
					}
				}else {
					auxPlay.setElo2(0);
					auxPlay.setName2("");
				}
				playList.add(auxPlay);
			}
		}else {
			playList=null;
		}
		return playList;
	}
			/*
			Game auxGame = gameRepository.findByTournament(tournamentRepository.findById(idTournament).get());
			List<Teams_On_Game> optional;
			optional = teamsOnGameRepository.findGameIdGame(auxGame.getId_game());
			if (optional!=null && !optional.isEmpty()) {
				return (optional);
			}else {
				return null;
			}
		}else {
			return null;
		}*/
			
	

}
