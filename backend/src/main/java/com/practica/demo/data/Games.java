package com.practica.demo.data;

import java.util.ArrayList;

public class Games {

	private ArrayList<String> array;

	public Games() {
		array = new ArrayList<String>();
		array.add("League of Legends");
		array.add("Rocket League");
	}

	public ArrayList<String> getArray() {
		return array;
	}
}
