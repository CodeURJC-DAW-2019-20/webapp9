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
import org.springframework.web.multipart.MultipartFile;

import com.practica.demo.Imgs.ImageService;
import com.practica.demo.data.game.Game;
import com.practica.demo.data.game.GameRepository;

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
	private ImageService imgService;

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
				// path.resolve(tournament.getImg());
				//File file = path.toFile();
				try {
					return IOUtils.toByteArray( Files.newInputStream(path));
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
					return null;
				}
				
				/*MockMultipartFile mockFile = new MockMultipartFile("image", new FileInputStream(file));
				
				byte[] content = null;
				try {
				    content = Files.readAllBytes(path);
				} catch (final IOException e) {
				}
				String originalFileName = "image-"+id;
				String contentType ="jpg";
				MultipartFile img = new MockMultipartFile("image.jpg",
				                     originalFileName , contentType, content);*/
				
			} else {
				return null;
			}
		} else {
			return null;
		}
	}

}
